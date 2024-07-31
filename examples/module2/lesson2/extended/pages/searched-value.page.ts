import { Locator, Page } from '@playwright/test';

export class SearchedValuePage {
  private readonly page: Page;
  private readonly input: Locator;
  private readonly resultsList: Locator;

  constructor(page: Page) {
    this.page = page;
    const contentWrapper = page.locator('#mw-content-text');
    this.input = contentWrapper.locator('form#search').getByRole('combobox');
    this.resultsList = contentWrapper.locator('ul').last();
  }

  getInput() {
    return this.input;
  }

  async everyListItemIncludesTerm(searchedTerm: string) {
    await this.resultsList.waitFor();
    const listItems = this.resultsList.locator('li');

    const everyLiIncludesTerm = await listItems.evaluateAll((items, term) => {
      return items.every((li) => li.textContent?.includes(term));
    }, searchedTerm);

    return everyLiIncludesTerm;
  }
}
