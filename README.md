# BugTrackPro

A comprehensive bug tracking and project management application built with Node.js, Express, MongoDB, and React.

## Features

### ✅ Implemented Features

1. **User Authentication**
   - User registration and login
   - JWT token-based authentication
   - Secure password handling

2. **Project Management**
   - Create new projects
   - View all projects
   - Edit project details
   - Delete projects
   - Project descriptions and metadata

3. **Issue/Bug Tracking**
   - Create new issues with comprehensive details
   - Multiple issue types: Bug, Task, Feature, Enhancement
   - Priority levels: Low, Medium, High, Critical
   - Status tracking: Open, In Progress, Resolved, Closed
   - Assign issues to team members
   - Due date management
   - Tag system for better organization

4. **Issue Management**
   - View all issues with filtering
   - Filter by status and project
   - Edit issue details
   - Update issue status
   - Assign/reassign issues
   - Delete issues
   - Track issue history

5. **Dashboard Interface**
   - Modern, responsive UI
   - Tabbed interface for projects and issues
   - Real-time updates
   - Modal forms for creating items
   - Status indicators with color coding

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication

### Frontend
- **React** - UI library
- **CSS** - Styling (inline styles for simplicity)

## Project Structure

```
bugtrackpro/
├── src/                    # Backend source code
│   ├── app.js             # Express app configuration
│   ├── server.js          # Server entry point
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   └── routes/           # API routes
├── bugtrackpro-frontend/  # Frontend React app
│   ├── src/
│   │   ├── components/   # React components
│   │   └── App.js        # Main app component
└── docs/                 # Documentation
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd bugtrackpro-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Issues
- `GET /api/issues` - Get all issues
- `GET /api/issues/:id` - Get issue by ID
- `POST /api/issues` - Create new issue
- `PUT /api/issues/:id` - Update issue
- `DELETE /api/issues/:id` - Delete issue
- `GET /api/users/:id/issues` - Get issues by user
- `GET /api/users/:userId/assigned-issues` - Get assigned issues
- `GET /api/projects/:projectId/issues` - Get issues by project

## Usage

1. **Start both servers** (backend and frontend)
2. **Open your browser** and navigate to `http://localhost:3000`
3. **Register a new account** or login with existing credentials
4. **Create your first project** using the "New Project" button
5. **Add issues** to your project using the "New Issue" button
6. **Track and manage** your issues through the dashboard

## Features in Action

### Creating Projects
- Click "New Project" button
- Fill in project name and description
- Project is created and appears in the projects list

### Reporting Issues
- Click "New Issue" button
- Select the project
- Choose issue type (Bug, Task, Feature, Enhancement)
- Set priority level
- Add description and optional details
- Assign to team member (if applicable)
- Set due date and tags

### Managing Issues
- View all issues in the Issues tab
- Filter by status or project
- Edit issue details inline
- Update status (Open → In Progress → Resolved → Closed)
- Reassign issues to different team members
- Delete issues when no longer needed

## Database Models

### User Model
- username, email, password
- timestamps

### Project Model
- name, description, createdBy
- timestamps

### Issue Model
- title, description, status, priority, type
- project, reportedBy, assignedTo
- dueDate, tags
- timestamps

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License. 