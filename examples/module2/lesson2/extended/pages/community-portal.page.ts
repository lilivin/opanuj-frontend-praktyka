import { Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class CommunityPortal {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToHelpDesk() {
    await this.page.getByRole('link', { name: 'Help desk' }).first().click();
    await this.page.waitForURL(URLs.HELPDESK_PAGE);
  }
}
