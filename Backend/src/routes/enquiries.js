import { Router } from 'express';
import Enquiry from '../models/Enquiry.js';

const router = Router();

// Create enquiry
router.post('/', async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json(enquiry);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data', details: err.message });
  }
});

// List enquiries (latest first)
router.get('/', async (_req, res) => {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(50);
  res.json(enquiries);
});

export default router;



