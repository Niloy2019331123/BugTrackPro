const Issue = require('../models/Issue');

exports.getAllIssues = async (req, res, next) => {
  try {
    const issues = await Issue.find()
      .populate('project', 'name')
      .populate('reportedBy', 'username email')
      .populate('assignedTo', 'username email')
      .sort({ createdAt: -1 });
    res.json(issues);
  } catch (err) {
    next(err);
  }
};

exports.createIssue = async (req, res, next) => {
  try {
    const { 
      title, 
      description, 
      project, 
      reportedBy, 
      assignedTo, 
      priority, 
      type, 
      dueDate, 
      tags 
    } = req.body;
    
    if (!title || !project) {
      return res.status(400).json({ error: 'Title and project are required.' });
    }

    if (dueDate) {
      const due = new Date(dueDate);
      const now = new Date();
      now.setHours(0,0,0,0);
      if (due < now) {
        return res.status(400).json({ error: 'Due date cannot be in the past.' });
      }
    }

    const issueData = { 
      title, 
      description, 
      project, 
      priority, 
      type, 
      dueDate, 
      tags 
    };
    
    if (reportedBy) {
      issueData.reportedBy = reportedBy;
    }
    if (assignedTo) {
      issueData.assignedTo = assignedTo;
    }
    
    const issue = new Issue(issueData);
    await issue.save();
    
    const populatedIssue = await Issue.findById(issue._id)
      .populate('project', 'name')
      .populate('reportedBy', 'username email')
      .populate('assignedTo', 'username email');
      
    res.status(201).json(populatedIssue);
  } catch (err) {
    next(err);
  }
};

exports.getIssueById = async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id)
      .populate('project', 'name')
      .populate('reportedBy', 'username email')
      .populate('assignedTo', 'username email');
    if (!issue) return res.status(404).json({ error: 'Issue not found.' });
    res.json(issue);
  } catch (err) {
    next(err);
  }
};

exports.updateIssue = async (req, res, next) => {
  try {
    const { 
      status, 
      assignedTo, 
      priority, 
      type, 
      dueDate, 
      tags,
      title,
      description 
    } = req.body;
    
    if (dueDate) {
      const due = new Date(dueDate);
      const now = new Date();
      now.setHours(0,0,0,0);
      if (due < now) {
        return res.status(400).json({ error: 'Due date cannot be in the past.' });
      }
    }

    const update = {};
    if (status) update.status = status;
    if (assignedTo) update.assignedTo = assignedTo;
    if (priority) update.priority = priority;
    if (type) update.type = type;
    if (dueDate) update.dueDate = dueDate;
    if (tags) update.tags = tags;
    if (title) update.title = title;
    if (description) update.description = description;
    
    const issue = await Issue.findByIdAndUpdate(
      req.params.id, 
      update, 
      { new: true }
    ).populate('project', 'name')
     .populate('reportedBy', 'username email')
     .populate('assignedTo', 'username email');
     
    if (!issue) return res.status(404).json({ error: 'Issue not found.' });
    res.json(issue);
  } catch (err) {
    next(err);
  }
};

exports.deleteIssue = async (req, res, next) => {
  try {
    const issue = await Issue.findByIdAndDelete(req.params.id);
    if (!issue) return res.status(404).json({ error: 'Issue not found.' });
    res.json({ message: 'Issue deleted.' });
  } catch (err) {
    next(err);
  }
};

exports.getIssuesByUser = async (req, res, next) => {
  try {
    const issues = await Issue.find({ reportedBy: req.params.id })
      .populate('project', 'name')
      .populate('assignedTo', 'username email');
    res.json(issues);
  } catch (err) {
    next(err);
  }
};

exports.getIssuesByProject = async (req, res, next) => {
  try {
    const issues = await Issue.find({ project: req.params.projectId })
      .populate('reportedBy', 'username email')
      .populate('assignedTo', 'username email')
      .sort({ createdAt: -1 });
    res.json(issues);
  } catch (err) {
    next(err);
  }
};

exports.getAssignedIssues = async (req, res, next) => {
  try {
    const issues = await Issue.find({ assignedTo: req.params.userId })
      .populate('project', 'name')
      .populate('reportedBy', 'username email')
      .sort({ createdAt: -1 });
    res.json(issues);
  } catch (err) {
    next(err);
  }
};

const today = new Date().toISOString().split('T')[0]; 