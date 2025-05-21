# Playwright Automation exercise

## Prerequisites
- Node.js (http://nodejs.org/en/download/)
- Visual Studio Code (https://code.visualstudio.com/download) (or any other code editor of your choice)
- GIT (https://git-scm.com/downloads)

## Get Starting

1. Visit https://github.com/flpsilva/api-automation-exercise
2. Clone the project using the web URL
 - Click "Code" >  select HTTPS > copy to clipboard
3. Open your command line terminal in a folder of your choice
 - Run: ```git clone``` {paste project link}
 - Access the new directory, run ```dir``` to check folder's name, then
   ```
    cd Playwright-Automation
   ```
 
## Setting up the environment
1. Install all project dependencies listed in package.json/package-lock.json:
```
  npm ci
```
3. install Playwright browsers:
```
 npx playwright install --with-deps
```
5. Create a file ".env" and add environment variables:
 - Template
   ```
   #PlaceOrter Tests
   TEST_USER_PASSWORD= <value>
   #API Tests
   INV_USER_EMAIL=<value>
   INV_USER_PWD=<value>
   #PW Config file
   BASE_URL=https://automationexercise.com/
   SECONDARY_BASE_URL=https://test.utomationexercise.com/

## How to run the tests

**To run UI tests only:**
  ```bash
  npm run test:e2e
  ```
**To run API tests only:**
  ```bash
  npm run test:api
  ```
**To run tests in debug mode:**
  ```bash
  npm run test:debug
  ```
**To run tests on a specific target browser:**
  - For Chromium:
    ```bash
    npm run test:chromium
    ```
  - For Firefox:
    ```bash
    npm run test:firefox
    ```
  - For WebKit:
    ```bash
    npm run test:webkit
    ```
**To run all tests:**
  ```bash
  npm run test:all
  ```
**To run tests in headed mode (shows the browser UI):**
  ```bash
  npm run test:headed
  ```
**To run tests in Playwright's interactive UI mode:**
  ```bash
  npm run test
  ```
**To run a specific test file or a test with a specific title (grep):**
  For example, to run tests in `testsuite/placeOrder.spec.ts` that match the title "User creates an account before placing an order":
  ```bash
  npx playwright test testsuite/placeOrder.spec.ts -g "User creates an account before place an order "
  ```
**To run tests with a specific number of parallel workers:**
  For example, to run tests with 2 workers:
  ```bash
  npx playwright test --workers=2
  ```
