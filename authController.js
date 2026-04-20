import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret123', {
    expiresIn: '30d',
  });
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        success: true,
        data: {
          _id: admin._id,
          email: admin.email,
          token: generateToken(admin._id),
        }
      });
    } else {
      res.status(401).json({ success: false, error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// Seed initial admin
export const seedAdmin = async (req, res) => {
  try {
    const adminExists = await Admin.findOne({ email: 'admin@example.com' });
    if (adminExists) {
      return res.status(400).json({ success: false, error: 'Admin already exists. Use Email: admin@example.com / Password: password' });
    }
    
    await Admin.create({
      email: 'admin@example.com',
      password: 'password'
    });
    
    res.status(201).json({ success: true, message: 'Admin seeded. Email: admin@example.com / Password: password' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error during seeding' });
  }
};
