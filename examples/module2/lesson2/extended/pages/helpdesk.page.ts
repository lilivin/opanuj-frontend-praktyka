import { Locator, Page } from '@playwright/test';

export class HelpdeskPage {
  private readonly page: Page;
  private readonly searchButton: Locator;
  private readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    const searchForm = this.page.getByRole('cell', {
      name: 'Search the frequently asked',
    });

    this.searchInput = searchForm.getByRole('textbox');
    this.searchButton = searchForm.getByRole('button', {
      name: 'Search the frequently asked',
    });
  }

  async fillSearchForm(text: string) {
    await this.fillSearchInput(text);
    await this.searchButton.click();
    return this.page.waitForURL(
      `https://en.wikipedia.org/wiki/Special:Search?fulltext=Search+the+frequently+asked+questions&fulltext=Search&prefix=Wikipedia%3AFAQ&search=${text}&ns0=1`
    );
  }

  private fillSearchInput(text: string) {
    return this.searchInput.fill(text);
  }
}
