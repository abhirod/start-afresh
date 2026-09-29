import type { Page } from '@playwright/test';
import { BASE_URL } from '../config/appUrls';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected frameUrl(path = '/'): string {
        if (path.startsWith('http')) {
            return path;
        }

        return new URL(path, BASE_URL).toString();
    }

    async goto(path = '/'): Promise<void> {
        await this.page.goto(this.frameUrl(path));
    }
}
