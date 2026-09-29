import { test } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwrightHomePage';

test('has title', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await homePage.goto();
  await homePage.expectTitle();
});

test('get started link', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await homePage.goto();
  await homePage.openGetStarted();
  await homePage.expectInstallationHeadingVisible();
});
