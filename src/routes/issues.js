const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

router.get('/issues', issueController.getAllIssues);
router.post('/issues', issueController.createIssue);
router.get('/issues/:id', issueController.getIssueById);
router.put('/issues/:id', issueController.updateIssue);
router.delete('/issues/:id', issueController.deleteIssue);
router.get('/users/:id/issues', issueController.getIssuesByUser);
router.get('/users/:userId/assigned-issues', issueController.getAssignedIssues);
router.get('/projects/:projectId/issues', issueController.getIssuesByProject);

module.exports = router; 