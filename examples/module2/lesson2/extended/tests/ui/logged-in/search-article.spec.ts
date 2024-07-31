import { expect, test } from '../../../fixtures';
import { setupSearchArticleMocks } from '../../../mocks/handlers/search';
import { ArticlePage } from '../../../pages/article.page';
import { MainPage } from '../../../pages/main.page';
import { URLs } from '../../../utils/constants';

test('search article', async ({ page }) => {
  const searchingTerm = 'playwright';
  await setupSearchArticleMocks(page);

  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.searchFor(searchingTerm);

  const firstResultTitle = await mainPage
    .getFirstSearchResult()
    .getAttribute('title');
  const resultTitleUrlVersion = firstResultTitle!.replace(' ', '_');

  await mainPage.clickFirstSearchResult();

  const articlePage = new ArticlePage(page);

  await expect(page).toHaveURL(
    `${URLs.ARTICLE_PAGE_BASE_URL}/${resultTitleUrlVersion}`
  );

  await expect(articlePage.getTitle()).toHaveText(firstResultTitle!);
});
