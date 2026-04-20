import Project from '../models/Project.js';

// Mock data to seed if DB is empty
const mockProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and a comprehensive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&q=80',
    tags: ['React', 'Express', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'A beautiful, drag-and-drop task management tool built to increase productivity. Uses optimistic UI updates for a seamless experience.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=800&q=80',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Prisma'],
    github: '#',
    live: '#'
  },
  {
    title: 'Real-time Chat Application',
    description: 'Real-time communication platform supporting text and media. Built using WebSocket for low-latency messaging.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?fit=crop&w=800&q=80',
    tags: ['React', 'Socket.io', 'Express', 'Redis'],
    github: '#',
    live: '#'
  }
];

// @desc    Get all projects
// @route   GET /projects
// @access  Public
export const getProjects = async (req, res) => {
  try {
    let projects = await Project.find({});
    
    // Seed database if empty so we have something to display
    if (projects.length === 0) {
      projects = await Project.insertMany(mockProjects);
    }
    
    res.status(200).json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error(`Project Controller Error: ${error.message}`);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Create a project
// @route   POST /projects
// @access  Private
export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
};

// @desc    Update a project
// @route   PUT /projects/:id
// @access  Private
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!project) return res.status(404).json({ success: false, error: 'Project not found' });
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
};

// @desc    Delete a project
// @route   DELETE /projects/:id
// @access  Private
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, error: 'Project not found' });
    await project.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
};
