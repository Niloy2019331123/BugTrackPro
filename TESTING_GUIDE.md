# BugTrackPro Testing Guide

## 🚀 Quick Start Testing

Both servers are now running:
- **Backend**: http://localhost:5000 ✅
- **Frontend**: http://localhost:3000 ✅

## 📋 Testing Checklist

### 1. **User Authentication Testing**

#### Test User Registration
1. Open http://localhost:3000 in your browser
2. Click "Need an account? Register"
3. Fill in the registration form:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `password123`
4. Click "Register"
5. **Expected Result**: Success message appears

#### Test User Login
1. After registration, you should be automatically logged in
2. If not, click "Already have an account? Login"
3. Enter your credentials:
   - Email: `test@example.com`
   - Password: `password123`
4. Click "Login"
5. **Expected Result**: You should be redirected to the Dashboard

### 2. **Project Management Testing**

#### Create a New Project
1. In the Dashboard, click the "Projects" tab (should be active by default)
2. Click the "+ New Project" button
3. Fill in the project details:
   - **Project Name**: `Test Project`
   - **Description**: `This is a test project for BugTrackPro`
4. Click "Create Project"
5. **Expected Result**: Project appears in the projects list

#### Edit a Project
1. Find your created project in the list
2. Click the "Edit" button
3. Change the project name to `Updated Test Project`
4. Click "Save"
5. **Expected Result**: Project name updates in the list

#### Delete a Project
1. Click the "Delete" button on any project
2. Confirm the deletion in the popup
3. **Expected Result**: Project is removed from the list

### 3. **Issue/Bug Tracking Testing**

#### Create a New Issue
1. Click the "Issues" tab in the Dashboard
2. Click the "+ New Issue" button
3. Fill in the issue details:
   - **Issue Title**: `Critical Login Bug`
   - **Description**: `Users cannot login with valid credentials`
   - **Project**: Select your created project
   - **Type**: `Bug`
   - **Priority**: `Critical`
   - **Due Date**: Select a future date
   - **Tags**: `frontend, authentication, critical`
4. Click "Create Issue"
5. **Expected Result**: Issue appears in the issues list

#### Create Different Types of Issues
Create multiple issues with different types:
- **Task**: `Update documentation`
- **Feature**: `Add dark mode`
- **Enhancement**: `Improve search functionality`

#### Test Issue Filtering
1. In the Issues tab, use the filter dropdowns:
   - **Status Filter**: Select "Open" - should show only open issues
   - **Project Filter**: Select your project - should show only issues from that project
2. **Expected Result**: Issues are filtered accordingly

#### Edit an Issue
1. Find an issue in the list
2. Click the "Edit" button
3. Change the status to "In Progress"
4. Change the priority to "High"
5. Click "Save"
6. **Expected Result**: Issue updates with new status and priority

#### Test Status Workflow
1. Edit an issue and change status through the workflow:
   - Open → In Progress → Resolved → Closed
2. **Expected Result**: Status badge color changes for each state

### 4. **Advanced Testing Scenarios**

#### Test Multiple Projects
1. Create 3-4 different projects with different names and descriptions
2. **Expected Result**: All projects appear in the projects list

#### Test Issue Assignment
1. Create an issue and assign it to a user (if user system is implemented)
2. **Expected Result**: Issue shows assigned user

#### Test Due Date Management
1. Create issues with different due dates
2. **Expected Result**: Due dates are properly stored and displayed

#### Test Tag System
1. Create issues with multiple tags separated by commas
2. **Expected Result**: Tags are properly parsed and stored

### 5. **Error Handling Testing**

#### Test Invalid Form Submissions
1. Try to create a project without a name
2. **Expected Result**: Form validation prevents submission

#### Test Network Errors
1. Stop the backend server temporarily
2. Try to create a new project
3. **Expected Result**: Error message is displayed
4. Restart the backend server

### 6. **UI/UX Testing**

#### Test Responsive Design
1. Resize your browser window
2. **Expected Result**: UI adapts to different screen sizes

#### Test Modal Functionality
1. Open create project/issue modals
2. Click outside the modal or the X button
3. **Expected Result**: Modal closes properly

#### Test Color Coding
1. Verify that different statuses have different colors:
   - Open: Green
   - In Progress: Yellow
   - Resolved: Blue
   - Closed: Gray
2. Verify that different priorities have different colors:
   - Critical: Red
   - High: Orange
   - Medium: Yellow
   - Low: Green

## 🧪 API Testing (Optional)

You can also test the API directly using tools like Postman or curl:

### Test Backend API Endpoints
```bash
# Health check
curl http://localhost:5000

# Get all projects
curl http://localhost:5000/api/projects

# Get all issues
curl http://localhost:5000/api/issues
```

## 📊 Expected Test Results

### ✅ Success Criteria
- [ ] User can register and login successfully
- [ ] Projects can be created, edited, and deleted
- [ ] Issues can be created with all required fields
- [ ] Issue status can be updated through the workflow
- [ ] Filtering works for both status and project
- [ ] UI is responsive and user-friendly
- [ ] Error handling works properly
- [ ] Data persists between sessions

### 🐛 Common Issues to Watch For
- Network connectivity issues (backend not running)
- MongoDB connection problems
- Form validation errors
- CORS issues (should be handled by backend)

## 🎯 Performance Testing

### Load Testing (Optional)
1. Create 50+ projects and 100+ issues
2. Test filtering and search performance
3. **Expected Result**: UI remains responsive

## 📝 Test Documentation

Keep track of your testing results:
- Test cases executed
- Bugs found and their severity
- Performance observations
- User experience feedback

## 🚀 Next Steps After Testing

Once testing is complete:
1. Document any bugs found
2. Test on different browsers
3. Test with different user roles (if implemented)
4. Consider adding automated tests
5. Plan for production deployment

---

**Happy Testing! 🎉**

If you encounter any issues during testing, check the browser console and server logs for error messages. 