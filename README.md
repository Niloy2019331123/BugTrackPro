# 🐛 BugTrackPro

A beautiful and modern bug tracking and project management application built with React.js and Node.js.

![BugTrackPro](https://img.shields.io/badge/BugTrackPro-v1.0-blue)
![React](https://img.shields.io/badge/React-19.1.0-61dafb)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933)
![MongoDB](https://img.shields.io/badge/MongoDB-8.16.0-47A248)

## ✨ Features

- **🎨 Beautiful Modern UI** - Stunning design with smooth animations and professional styling
- **👥 User Authentication** - Secure login and registration system
- **📁 Project Management** - Create, edit, and manage multiple projects
- **🐛 Issue Tracking** - Comprehensive bug tracking with status, priority, and assignment
- **📊 Real-time Updates** - Instant updates across all components
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **🔍 Advanced Filtering** - Filter issues by status, project, and more
- **📅 Due Date Management** - Set and track due dates for issues
- **🏷️ Tagging System** - Organize issues with custom tags
- **👨‍💼 User Assignment** - Assign issues to team members

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bugtrackpro.git
   cd bugtrackpro
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd bugtrackpro-frontend
   npm install
   cd ..
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in the root directory
   cp .env.example .env
   ```
   
   Edit `.env` file:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bugtrackpro
   JWT_SECRET=your_super_secret_jwt_key_here
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   # Windows
   start.bat
   
   # Linux/Mac
   ./start.sh
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
bugtrackpro/
├── src/                    # Backend source code
│   ├── controllers/        # API controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── server.js          # Express server
├── bugtrackpro-frontend/   # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── public/            # Static files
├── docs/                  # Documentation
├── postman/               # API testing collection
└── README.md              # This file
```

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **CSS3** - Styling with modern design system
- **Fetch API** - HTTP requests
- **Local Storage** - Client-side storage

## 📚 API Documentation

### Authentication
- `POST /api/register` - Register new user
- `POST /api/login` - User login
- `GET /api/users` - Get all users

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project by ID
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Issues
- `GET /api/issues` - Get all issues
- `POST /api/issues` - Create new issue
- `GET /api/issues/:id` - Get issue by ID
- `PUT /api/issues/:id` - Update issue
- `DELETE /api/issues/:id` - Delete issue

## 🎨 UI Features

- **Modern Design System** - Consistent colors, spacing, and typography
- **Smooth Animations** - Hover effects and transitions
- **Responsive Layout** - Mobile-first design approach
- **Beautiful Cards** - Modern card design with shadows
- **Status Badges** - Color-coded status indicators
- **Professional Forms** - Clean and intuitive form design

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/bugtrackpro |
| `JWT_SECRET` | JWT secret key | Required |
| `NODE_ENV` | Environment | development |

### MongoDB Setup

#### Local MongoDB
1. Install MongoDB on your system
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/bugtrackpro`

#### MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create new cluster
3. Get connection string and replace in `.env`

## 🧪 Testing

### API Testing
Use the provided Postman collection:
```bash
# Import the collection from postman/BugTrackPro.postman_collection.json
```

### Manual Testing
1. Register a new user
2. Create a project
3. Create issues with different priorities and statuses
4. Test filtering and editing functionality

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Update API endpoints in the frontend code

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React.js team for the amazing framework
- MongoDB team for the database
- All contributors and users

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation in the `docs/` folder
- Review the Postman collection for API examples

---

**Made with ❤️ by [Your Name]**
