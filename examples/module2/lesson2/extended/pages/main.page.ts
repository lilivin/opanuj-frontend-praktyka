import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class MainPage {
  private readonly page: Page;
  private readonly url = URLs.MAIN_PAGE;
  readonly navigation: Locator;
  private readonly featuredArticleExcerpt: Locator;
  private readonly vectorMainMenuExcerpt: Locator;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigation = page.getByRole('navigation', {
      name: 'Personal tools',
    });

    this.featuredArticleExcerpt = page.locator('#mp-tfa');

    this.vectorMainMenuExcerpt = page.locator('#vector-main-menu');

    this.searchInput = page
      .getByRole('search')
      .getByRole('searchbox', { name: /Search Wikipedia/i });

    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  navigate() {
    return this.page.goto(this.url);
  }

  goToLoginPage() {
    return this.navigation.getByRole('link', { name: 'Log in' }).click();
  }

  async goToCommunityPortal() {
    const linkToCommunityPortal = this.vectorMainMenuExcerpt.getByRole('link', {
      name: 'Community portal',
    });

    const communityPortalHref = (await linkToCommunityPortal.getAttribute(
      'href'
    ))!;

    await linkToCommunityPortal.click();

    return this.page.waitForURL(`**${communityPortalHref}`);
  }

  async goToFeaturedArticle() {
    const linkToFeaturedArticle = this.featuredArticleExcerpt
      .getByRole('paragraph')
      .getByRole('link')
      .first();

    const articleHref = (await linkToFeaturedArticle.getAttribute('href'))!;

    await linkToFeaturedArticle.click();

    return this.page.waitForURL(`**${articleHref}`);
  }

  async searchFor(term: string) {
    return this.searchInput.fill(term);
  }

  getSearchResults() {
    return this.page.getByRole('listbox', { name: /Search results/i });
  }

  getFirstSearchResult() {
    return this.getSearchResults().getByRole('option').first();
  }

  clickFirstSearchResult() {
    return this.getSearchResults().getByRole('option').first().click();
  }

  getNavigation() {
    return this.navigation;
  }
}
