# Test Case Sheet: BugTrackPro

| Test Case ID | Endpoint & Method      | Description                        | Input Data                | Expected Result                | Status |
|--------------|-----------------------|------------------------------------|---------------------------|-------------------------------|--------|
| TC-01        | /api/register (POST)  | Register new user                  | username, email, password | 201 Created, success message  |        |
| TC-02        | /api/register (POST)  | Duplicate email registration       | existing email            | 409 Conflict, error message   |        |
| TC-03        | /api/login (POST)     | Login with valid credentials       | email, password           | 200 OK, JWT token             |        |
| TC-04        | /api/login (POST)     | Login with invalid credentials     | wrong email/password      | 401 Unauthorized, error       |        |
| TC-05        | /api/projects (GET)   | List all projects                  | -                         | 200 OK, project list          |        |
| TC-06        | /api/projects (POST)  | Create new project                 | name, createdBy           | 201 Created, project object   |        |
| TC-07        | /api/issues (POST)    | Create new issue                   | title, project, reportedBy| 201 Created, issue object     |        |
| TC-08        | /api/issues/:id (GET) | Get issue details                  | issueId                   | 200 OK, issue object          |        |
| TC-09        | /api/issues/:id (PUT) | Update issue status                | status                    | 200 OK, updated issue         |        |
| TC-10        | /api/issues/:id (DEL) | Delete issue                       | issueId                   | 200 OK, delete message        |        |
| TC-11        | /api/users/:id/issues | Get all issues by user             | userId                    | 200 OK, list of issues        |        | 