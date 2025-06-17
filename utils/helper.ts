import { Page } from '@playwright/test';

export class Helper {
    //Static method that takes a Page object as an argument, 
    // waits for the page to finish loading and returns the page url as a string

    static async getPageUrl(page: Page): Promise<string> {
        await page.waitForLoadState('load');
        return page.url().toString();
    }
}
