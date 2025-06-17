import { test as base, APIRequestContext } from '@playwright/test';

export const test = base.extend<{
  apiContext: APIRequestContext;
}>({
  apiContext: async ({ playwright }, use) => {
    const context = await playwright.request.newContext({
      baseURL: process.env.BASE_URL,
      extraHTTPHeaders: {
        // Add any default headers here
      },
    });
    await use(context);
    await context.dispose();
  },
});

export const expect = base.expect;