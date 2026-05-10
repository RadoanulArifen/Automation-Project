# SauceDemo Playwright Automation Project

This project contains automated end-to-end test scenarios for the SauceDemo website using Playwright with Page Object Model (POM) structure.

---

# Tech Stack

- Playwright
- JavaScript
- Node.js
- Allure Report
- Page Object Model (POM)

---

# Project Structure

Automation Project/
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── purchase.spec.js
│   └── filterPurchase.spec.js
│
├── allure-results/
├── allure-report/
├── playwright-report/
├── playwright.config.js
├── package.json
└── README.md

---

# Prerequisites

Before running the project, install the following:

## Install Node.js

Check installation:

```bash
node -v
npm -v
```

---

## Install Google Chrome

Check installation:

```bash
google-chrome --version
```

---

## Install Java

Check installation:

```bash
java -version
```

---

# Project Setup

## Clone Repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

---

## Open Project Folder

```bash
cd "Automation Project"
```

---

## Install Dependencies

```bash
npm install
```

---

# Install Playwright

```bash
npm install -D @playwright/test
```

---

# Install Allure Playwright Reporter

```bash
npm install -D allure-playwright
```

---

# Install Allure CLI

## Step 1

```bash
cd ~
```

## Step 2

```bash
wget https://github.com/allure-framework/allure2/releases/download/2.29.0/allure-2.29.0.tgz
```

## Step 3

```bash
tar -zxvf allure-2.29.0.tgz
```

## Step 4

```bash
sudo mv allure-2.29.0 /opt/allure
```

## Step 5

```bash
sudo ln -s /opt/allure/bin/allure /usr/bin/allure
```

## Verify Installation

```bash
allure --version
```

---

# Run Test Cases

## Run All Test Cases

```bash
npx playwright test
```

---

## Run Q1 Test Case Only

```bash
npx playwright test tests/login.spec.js
```

---

## Run Q2 Test Case Only

```bash
npx playwright test tests/purchase.spec.js
```

---

## Run Q3 Test Case Only

```bash
npx playwright test tests/filterPurchase.spec.js
```

---

# Playwright HTML Report

## Generate/Open HTML Report

```bash
npx playwright show-report
```

---

# Allure Report

## Generate Allure Report

```bash
allure generate allure-results --clean -o allure-report
```

---

## Open Allure Report

```bash
cd allure-report
python3 -m http.server 8080
```

Open browser and visit:

```text
http://localhost:8080
```

---

# Test Scenarios

## Q1 - Locked User Login Test

- Login with locked user
- Verify error message

---

## Q2 - Complete Purchase Flow

- Login with standard user
- Add multiple products
- Complete checkout process
- Verify successful order

---

## Q3 - Filter and Purchase Flow

- Login with performance glitch user
- Filter products from Z to A
- Add first product
- Complete checkout process
- Verify successful order

---

# Notes

- Tests are implemented using Page Object Model (POM)
- Reports are generated using Playwright HTML Reporter and Allure Reporter
- Google Chrome browser is used through Playwright configuration
- Each test case can run individually or all together sequentially

---

# Author

Radoanul Arifen
