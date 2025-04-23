# Playwright Automation exercise

# Prerequisites
- Node.js (http://nodejs.org/en/download/)
- Visual Studio Code (https://code.visualstudio.com/download) (or any other code editor of your choice)
- GIT (https://git-scm.com/downloads)

# Getting Started
1. Clone the git repository: " "
2. Install the dependencies: 
    - run: 
        npm init
            Filed out values:
            package name: <hit enter>
            version: (1.0.0)<hit enter>
            description: <your choice>
            entry point: (index.js) <hit enter>
            test command: <hit enter>
            git repository:
            keywords: <hit enter>
            author: <your Name>
            license: (ISC) <hit enter>
            Is this OK? (yes) <yes>

        npm install @playwright/test
        npx playwright install
3. install Faker for test data generations:
    -run 
        npm install --save-dev @faker-js/faker
4. install eslint:
    -run 
        npm install --save-dev eslint
        npx eslint --init
    check all relevant files:
        npx eslint . 
    check and fix all relevant files:
        npx eslint . --fix




    
# Useful commands: 
1. npx playwright test
    Runs the end-to-end tests.

2. npx playwright test --ui
    Starts the interactive UI mode.

3. npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

4. npx playwright test example
    Runs the tests in a specific file.

5. npx playwright test --debug
    Runs the tests in debug mode.

6. npx playwright codegen
    Auto generate tests with Codegen.
# api-automation-exercise
