const Project = require('../models/Project');
const Issue = require('../models/Issue');

exports.listProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().populate('createdBy', 'username email');
    res.json(projects);
  } catch (err) {
    next(err);
  }
};

exports.getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id).populate('createdBy', 'username email');
    if (!project) return res.status(404).json({ error: 'Project not found.' });
    res.json(project);
  } catch (err) {
    next(err);
  }
};

exports.createProject = async (req, res, next) => {
  try {
    const { name, description, createdBy } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Project name is required.' });
    }
    
    // For now, allow projects without createdBy (for demo purposes)
    const projectData = { name, description };
    if (createdBy) {
      projectData.createdBy = createdBy;
    }
    
    const project = new Project(projectData);
    await project.save();
    
    const populatedProject = await Project.findById(project._id).populate('createdBy', 'username email');
    res.status(201).json(populatedProject);
  } catch (err) {
    next(err);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const update = {};
    if (name) update.name = name;
    if (description) update.description = description;
    
    const project = await Project.findByIdAndUpdate(
      req.params.id, 
      update, 
      { new: true }
    ).populate('createdBy', 'username email');
    
    if (!project) return res.status(404).json({ error: 'Project not found.' });
    res.json(project);
  } catch (err) {
    next(err);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    
    // First, delete all issues associated with this project
    const deleteIssuesResult = await Issue.deleteMany({ project: projectId });
    console.log(`Deleted ${deleteIssuesResult.deletedCount} issues for project ${projectId}`);
    
    // Then delete the project
    const project = await Project.findByIdAndDelete(projectId);
    console.log(project);
    console.log(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found.' });
    
    res.json({ 
      message: 'Project deleted.',
      deletedIssuesCount: deleteIssuesResult.deletedCount
    });
  } catch (err) {
    next(err);
  }
}; 