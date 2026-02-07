**Playwright Automation Framework**

A professional,scalable,maintainable and CI-ready Playwright automation framework which is designed to demonstrate real-world automation best practices including Page Object Model, cross-browser testing, and robust reporting.

**Why This Framework?**
1. This framework is built to showcase mine automation engineering skills, not just automation scripts.
2. Implements Page Object Model (POM) for clean separation of UI and test logic.
3. Supports cross-browser testing (Chromium, Firefox, WebKit).
4. Generates HTML/Allure reports with screenshots, videos.
5. Designed to run in CI/CD pipelines.

**Framework Architecture**

**Page Objects** (Pages/) – All UI interactions encapsulated in classes
**Tests** (tests/) – Test scenarios using Playwright test runner
**Test Data** (TestData/) – Centralized input data for tests
**Playwright Config** (playwright.config.js) – Browser settings, retries, reporters
**Reports** (HTML report/allure-report) – Captures HTML reports, Allure reports, screenshots, videos.

**Design decisions:**
POM improves maintainability and reduces duplicate code
<pre>Project Structure 
  
├──.github\workflows    # GitHub Actions CI/CD workflows
├──allure-report        # Generated Allure test reports after test execution
├──Pages                # Page Object Model (POM) classes for different pages and different methods
├──TestData             # Test data files (JSON Format)
├──tests                # Playwright test scripts
├──.gitignore            # Git ignore files
├──package-lock.json 
├──package.json         # Node.js project dependencies and scripts
└──playwright.config.js # Playwright configuration (browsers, reporters, retries)
  
<pre></pre>
**Getting Started(Ensure you have the following installed)**
1. Node.js (v16+)
2. npm (comes with Node)
3. A modern code editor (VS Code recommended)
   
**Setup**
Install Playwright via following command
npm init playwright@latest

**Download or clone the repository:**
**https://github.com/vishnudutta22/Playwright-Automation**

**Execution**
A. Run test suite with HTML report
Execute the test suite using the following NPM script.
This will run all tests and generate the Playwright HTML report.

**npm run test**
After execution, open the HTML report using:
**npx playwright show-report**

B. Run test suite with Allure report
Execute the test suite using the following NPM script.
This will run all tests and generate the Allure report.

**npm run test:allure**
After execution, the Allure report will be generated and will open automatically.

**Reporting**
1.Allure report after every test run (if executed via Allure command mentioned above)
2.HTML report after every test run (if executed via HTML command mentioned above)
2.Screenshots/videos captured on every test execution.

**Skills Demonstrated**
Playwright test automation
Page Object Model (POM)
Test architecture & design decisions
Cross-browser testing
Test reporting 
CI/CD workflow readiness
Git & GitHub workflow

📝 If you find my work interesting please don't forget to give a Star ⭐ & Follow me 


