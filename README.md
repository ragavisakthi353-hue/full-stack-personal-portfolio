# Full-Stack Portfolio Project

This is a full-stack portfolio project built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Project Structure

The repository is organized into three main directories to separate the frontend client, backend server, and generic configuration.

```text
portfolio-project/
├── backend/                  # Node.js + Express backend
│   ├── controllers/          # Request handlers for API endpoints
│   ├── models/               # Mongoose database schemas
│   └── routes/               # API route definitions
├── config/                   # Configuration files (e.g., environment variables, ESLint, Prettier)
├── frontend/                 # React frontend application
│   ├── assets/               # Static assets (images, fonts, global styles)
│   ├── components/           # Reusable React components
│   └── pages/                # Page-level React components (views)
└── README.md                 # Project documentation
```

### 1. `frontend/` (React)
Contains the client-side code built with React.
- **`assets/`**: Put all your static files here like images, global CSS, and icons.
- **`components/`**: Reusable UI parts like buttons, navbars, and footers.
- **`pages/`**: React components representing actual pages like `Home`, `About`, `Projects`, etc.

### 2. `backend/` (Node.js + Express + MongoDB)
Contains the server-side code and API endpoints. 
- **`controllers/`**: Logic to handle specific API requests (e.g., fetching projects, submitting contact forms).
- **`models/`**: MongoDB schemas defined using Mongoose (e.g., `Project`, `Message`).
- **`routes/`**: Express routes mapping URLs to specific controller functions.

### 3. `config/`
Stores centralized configuration files. This might include database connection setup files, environment variables (`.env`), or global build tool setups that both frontend and backend might share or use.

## Getting Started

1. Set up your MongoDB instance and add connection URIs to your `.env` files.
2. Navigate into the `backend` directory and run `npm install` followed by `npm run dev` to start the backend server.
3. Navigate into the `frontend` directory and run `npm install` followed by `npm start` (or `npm run dev` if using Vite) to start the React application.
