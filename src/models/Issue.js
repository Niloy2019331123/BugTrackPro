const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { 
    type: String, 
    enum: ['Open', 'In Progress', 'Resolved', 'Closed'], 
    default: 'Open' 
  },
  priority: { 
    type: String, 
    enum: ['Low', 'Medium', 'High', 'Critical'], 
    default: 'Medium' 
  },
  type: { 
    type: String, 
    enum: ['Bug', 'Task', 'Feature', 'Enhancement'], 
    default: 'Bug' 
  },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dueDate: { type: Date, required: true },
  tags: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Issue', issueSchema); 