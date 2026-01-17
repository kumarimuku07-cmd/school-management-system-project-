import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    duration: { type: String, required: true }, // e.g., "6 months", "1 year"
    fee: { type: Number, required: true },
    level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    category: { type: String, required: true }, // e.g., "Programming", "Mathematics", "Science"
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
    maxStudents: { type: Number, default: 30 },
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    syllabus: [String], // Array of topics
    requirements: [String] // Prerequisites
  },
  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
