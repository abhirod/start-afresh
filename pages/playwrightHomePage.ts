import { expect, type Locator, type Page } from '@playwright/test';
import { appUrls } from '../config/appUrls';
import { BasePage } from './basePage';

export class PlaywrightHomePage extends BasePage {
    readonly getStartedLink: Locator;

    constructor(page: Page) {
        super(page);
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    }

    async goto(): Promise<void> {
        await super.goto(appUrls.home);
    }

    async expectTitle(): Promise<void> {
        await expect(this.page).toHaveTitle(/Playwright/);
    }

    async openGetStarted(): Promise<void> {
        await this.getStartedLink.click();
    }

    async expectInstallationHeadingVisible(): Promise<void> {
        await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    }
}
