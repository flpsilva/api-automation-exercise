# Playwright Automation exercise

# Prerequisites
- Node.js (http://nodejs.org/en/download/)
- Visual Studio Code (https://code.visualstudio.com/download) (or any other code editor of your choice)
- GIT (https://git-scm.com/downloads)

# Getting Starting:

# Getting the Latest Code

1. Visit https://github.com/flpsilva/api-automation-exercise
2. Clone the project using the web URL
 click "Code" >  select HTTPS > copy to clipboard
3. Open your command line terminal in a folder of your choice
 run: git clone {paste project link}
 access the the new directory, run "dir" to check folder's name, then "cd Playwright-Automation"
 

# Setting Up the Environment
1. Install all project dependencies listed in package.json/package-lock.json:
 npm ci
2. install Playwright browsers:
 npx playwright install --with-deps

3. Create a file ".env" and add environment variables:
 Template
  #PlaceOrter Tests
  TEST_USER_PASSWORD= <value>
  #API Tests
  INV_USER_EMAIL=<value>
  INV_USER_PWD=<value>
  #PW Config file
  BASE_URL=https://automationexercise.com/
  SECONDARY_BASE_URL=https://test.utomationexercise.com/

# How to run the tests

Run ui tests only:
 npm run test:e2e
Run api tests only:
 npm run test:api
Run debug mode:
 npm run test:debug
Run test on target browser:
 npm run test:chromium
 npm run test:firefox
 npm run test:webkit
Run all tests:
 npm run test:all
Run headed mode:
 npm run test:headed
Run tests in interactive UI mode:
 npm run test
Run a specific test, for example:
 npx playwright test testsuite/placeOrder.spec.ts -g "User creates an account before place an order "
Run tests with 2 workers
 npx playwright test --workers=2