import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    targetAudience: { 
      type: String, 
      enum: ['all', 'students', 'teachers', 'parents'], 
      default: 'all' 
    },
    isActive: { type: Boolean, default: true },
    expiresAt: { type: Date },
    attachments: [{ 
      filename: String, 
      url: String, 
      size: Number 
    }]
  },
  { timestamps: true }
);

const Announcement = mongoose.model('Announcement', announcementSchema);
export default Announcement;
