import { Page } from 'playwright';

export async function setupSearchArticleMocks(page: Page) {
  await page.route('*/**/w/rest.php/v1/search/title**', async (route) => {
    const json = {
      pages: [
        {
          id: 74146978,
          key: 'Playwright_(software)',
          title: 'Playwright (software)',
          excerpt: 'Playwright (software)',
          matched_title: null,
          description: 'End-to-end testing framework',
          thumbnail: null,
        },
      ],
    };
    await route.fulfill({ json });
  });

  await page.route(
    'https://en.wikipedia.org/wiki/Playwright',
    async (route) => {
      await route.fulfill({
        contentType: 'text/html',
        body: `
         <html>
          <head><title>Playwright (software)</title></head>
          <body>
            <main>
              <h1>
                <span>Playwright (software)</span>
              </h1>
            </main>
          </body>
        </html>`,
      });
    }
  );
}
