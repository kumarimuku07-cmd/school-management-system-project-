import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Course from '../models/Course.js';
import { authenticateToken, requireTeacher } from '../middleware/auth.js';

const router = Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const { category, level, search } = req.query;
    let query = { isActive: true };

    if (category) query.category = category;
    if (level) query.level = level;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const courses = await Course.find(query)
      .populate('instructor', 'name email avatar')
      .sort({ createdAt: -1 });

    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single course
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'name email avatar')
      .populate('enrolledStudents', 'name email avatar');

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create course (teachers and admins only)
router.post('/', authenticateToken, requireTeacher, [
  body('title').trim().isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
  body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('duration').notEmpty().withMessage('Duration is required'),
  body('fee').isNumeric().withMessage('Fee must be a number'),
  body('category').notEmpty().withMessage('Category is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const courseData = {
      ...req.body,
      instructor: req.user._id
    };

    const course = await Course.create(courseData);
    await course.populate('instructor', 'name email avatar');

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update course (instructor or admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Check if user is instructor or admin
    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized to update this course' });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('instructor', 'name email avatar');

    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Enroll in course
router.post('/:id/enroll', authenticateToken, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    if (course.enrolledStudents.includes(req.user._id)) {
      return res.status(400).json({ error: 'Already enrolled in this course' });
    }

    if (course.enrolledStudents.length >= course.maxStudents) {
      return res.status(400).json({ error: 'Course is full' });
    }

    course.enrolledStudents.push(req.user._id);
    await course.save();

    res.json({ message: 'Successfully enrolled in course' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get enrolled courses for user
router.get('/user/enrolled', authenticateToken, async (req, res) => {
  try {
    const courses = await Course.find({ 
      enrolledStudents: req.user._id,
      isActive: true 
    }).populate('instructor', 'name email avatar');

    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
