import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Announcement from '../models/Announcement.js';
import { authenticateToken, requireTeacher } from '../middleware/auth.js';

const router = Router();

// Get all announcements
router.get('/', async (req, res) => {
  try {
    const { targetAudience, priority } = req.query;
    let query = { isActive: true };

    if (targetAudience) query.targetAudience = { $in: [targetAudience, 'all'] };
    if (priority) query.priority = priority;

    // Filter expired announcements
    query.$or = [
      { expiresAt: { $exists: false } },
      { expiresAt: null },
      { expiresAt: { $gt: new Date() } }
    ];

    const announcements = await Announcement.find(query)
      .populate('author', 'name email avatar')
      .sort({ priority: -1, createdAt: -1 });

    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single announcement
router.get('/:id', async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id)
      .populate('author', 'name email avatar');

    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    res.json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create announcement (teachers and admins only)
router.post('/', authenticateToken, requireTeacher, [
  body('title').trim().isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
  body('content').trim().isLength({ min: 10 }).withMessage('Content must be at least 10 characters'),
  body('priority').optional().isIn(['low', 'medium', 'high']),
  body('targetAudience').optional().isIn(['all', 'students', 'teachers', 'parents'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const announcementData = {
      ...req.body,
      author: req.user._id
    };

    const announcement = await Announcement.create(announcementData);
    await announcement.populate('author', 'name email avatar');

    res.status(201).json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update announcement (author or admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    // Check if user is author or admin
    if (announcement.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized to update this announcement' });
    }

    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('author', 'name email avatar');

    res.json(updatedAnnouncement);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete announcement (author or admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    // Check if user is author or admin
    if (announcement.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized to delete this announcement' });
    }

    await Announcement.findByIdAndDelete(req.params.id);
    res.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
