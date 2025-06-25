const fetch = require('node-fetch');

async function testProjectCreation() {
  try {
    console.log('Testing project creation...');
    
    const response = await fetch('http://localhost:5000/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Project',
        description: 'This is a test project'
      })
    });
    
    if (response.ok) {
      const project = await response.json();
      console.log('✅ Project created successfully:', project);
    } else {
      const error = await response.json();
      console.log('❌ Error creating project:', error);
    }
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }
}

testProjectCreation(); 