const { Builder, By, until } = require('selenium-webdriver');

(async function allRoutesTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  const baseUrl = 'http://localhost:3000';
  const testEmail = 'niloy@gmail.com';
  const testPassword = '123';

  try {
    // 1. Login
    await driver.get(baseUrl + '/login');
    await driver.wait(until.elementLocated(By.name('email')), 5000);
    await driver.findElement(By.name('email')).sendKeys(testEmail);
    await driver.findElement(By.name('password')).sendKeys(testPassword);
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.wait(until.urlContains('/dashboard'), 5000);
    console.log('✅ Login successful!');

    // 2. Dashboard main
    await driver.get(baseUrl + '/dashboard');
    await driver.wait(until.elementLocated(By.css('h1.dashboard-title')), 5000);
    console.log('✅ Dashboard loaded!');

    // 3. Projects tab
    await driver.get(baseUrl + '/dashboard/projects');
    await driver.wait(until.elementLocated(By.css('h2')), 5000);
    const projectsHeader = await driver.findElement(By.css('h2')).getText();
    if (projectsHeader.toLowerCase().includes('project')) {
      console.log('✅ Projects page loaded!');
    } else {
      throw new Error('Projects header not found');
    }

    // 3a. Create a new project and verify it appears in the list
    const uniqueProjectName = 'Selenium Test Project ' + Date.now();
    await driver.findElement(By.xpath("//button[contains(., '+ New Project')]")).click();
    await driver.wait(until.elementLocated(By.css('input[name="name"]')), 3000);
    await driver.findElement(By.css('input[name="name"]')).sendKeys(uniqueProjectName);
    await driver.findElement(By.css('textarea[name="description"]')).sendKeys('Created by Selenium automated test.');
    await driver.findElement(By.xpath("//button[contains(., 'Create Project') and not(@disabled)]")).click();
    // Wait for modal to close and project to appear
    await driver.wait(until.elementLocated(By.xpath(`//h3[contains(., '${uniqueProjectName}')]`)), 5000);
    console.log('✅ Project creation and appearance in list verified!');

    // 4. Issues tab
    await driver.get(baseUrl + '/dashboard/issues');
    await driver.wait(until.elementLocated(By.css('h2')), 5000);
    const issuesHeader = await driver.findElement(By.css('h2')).getText();
    if (issuesHeader.toLowerCase().includes('issue')) {
      console.log('✅ Issues page loaded!');
    } else {
      throw new Error('Issues header not found');
    }

    // 4a. Create a new issue and verify it appears in the list
    const uniqueIssueTitle = 'Selenium Test Issue ' + Date.now();
    await driver.findElement(By.xpath("//button[contains(., '+ New Issue')]")).click();
    await driver.wait(until.elementLocated(By.css('input[name="title"]')), 3000);
    await driver.findElement(By.css('input[name="title"]')).sendKeys(uniqueIssueTitle);
    await driver.findElement(By.css('textarea[name="description"]')).sendKeys('Created by Selenium automated test.');
    // Select the first project in the dropdown
    const projectSelect = await driver.findElement(By.css('select[name="project"]'));
    await projectSelect.findElement(By.css('option:not([value=""])')).click();
    // Set due date to today (default)
    // Submit the form
    await driver.findElement(By.xpath("//button[contains(., 'Create Issue') and not(@disabled)]")).click();
    // Wait for modal to close and issue to appear
    await driver.wait(until.elementLocated(By.xpath(`//div[contains(@class, 'card')]//h4[contains(., '${uniqueIssueTitle}')]`)), 5000);
    console.log('✅ Issue creation and appearance in list verified!');

    // 5. Register page (should redirect if logged in)
    await driver.get(baseUrl + '/register');
    await driver.wait(until.urlContains('/dashboard'), 5000);
    console.log('✅ Register route redirects to dashboard when logged in!');

    // 6. Root route (should redirect to dashboard)
    await driver.get(baseUrl + '/');
    await driver.wait(until.urlContains('/dashboard'), 5000);
    console.log('✅ Root route redirects to dashboard when logged in!');

    // 7. Invalid route (should redirect to dashboard)
    await driver.get(baseUrl + '/not-a-real-route');
    await driver.wait(until.urlContains('/dashboard'), 5000);
    console.log('✅ Invalid route redirects to dashboard when logged in!');

    // 8. Logout and check login redirect
    await driver.get(baseUrl + '/dashboard');
    await driver.wait(until.elementLocated(By.css('button.btn-danger')), 5000);
    await driver.findElement(By.css('button.btn-danger')).click();
    await driver.wait(until.urlContains('/login'), 5000);
    console.log('✅ Logout successful, redirected to login!');

  } catch (err) {
    console.error('❌ Test failed:', err.message);
  } finally {
    await driver.quit();
  }
})(); 