import Contact from '../models/Contact.js';

// @desc    Submit a new contact message
// @route   POST /contact
// @access  Public
export const submitContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Simple manual validation just in case model validation misses
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message',
      });
    }

    // Create message in database
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages.join(', '),
      });
    }

    console.error(`Contact Controller Error: ${error.message}`);
    res.status(500).json({
      success: false,
      error: 'Server Error. Please try again later.',
    });
  }
};
