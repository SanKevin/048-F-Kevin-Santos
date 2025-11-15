// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  timeout: 30000,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },
  reporter: [['list'], ['html', { open: 'never' }]],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ]
};
