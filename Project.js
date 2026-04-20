import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&q=80',
    },
    tags: {
      type: [String],
      required: true,
    },
    github: {
      type: String,
      required: false,
    },
    live: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
