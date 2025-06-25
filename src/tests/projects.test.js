const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Project = require('../models/Project');
const User = require('../models/User');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bugtrackpro_test';

describe('Project Endpoints', () => {
  let userId;

  beforeAll(async () => {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const user = new User({ username: 'projuser', email: 'proj@example.com', password: 'pass' });
    await user.save();
    userId = user._id;
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
  });

  afterEach(async () => {
    await Project.deleteMany();
  });

  it('should create a new project', async () => {
    const res = await request(app)
      .post('/api/projects')
      .send({ name: 'Test Project', description: 'A test project', createdBy: userId });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Project');
    expect(res.body.createdBy).toBe(String(userId));
  });

  it('should list all projects', async () => {
    await request(app)
      .post('/api/projects')
      .send({ name: 'Project1', createdBy: userId });
    await request(app)
      .post('/api/projects')
      .send({ name: 'Project2', createdBy: userId });
    const res = await request(app).get('/api/projects');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(2);
  });
}); 