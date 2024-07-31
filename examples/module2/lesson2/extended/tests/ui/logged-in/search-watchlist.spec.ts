import { expect, test } from '../../../fixtures';
import { CommunityPortal } from '../../../pages/community-portal.page';
import { HelpdeskPage } from '../../../pages/helpdesk.page';
import { MainPage } from '../../../pages/main.page';
import { SearchedValuePage } from '../../../pages/searched-value.page';

test('search question from frequently asked questions', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToCommunityPortal();

  const communityPortalPage = new CommunityPortal(page);
  communityPortalPage.goToHelpDesk();

  const helpdeskPage = new HelpdeskPage(page);
  const searchingText = 'watchlist';
  await helpdeskPage.fillSearchForm(searchingText);

  const searchedValuePage = new SearchedValuePage(page);
  const allItemsIncludesTerm =
    await searchedValuePage.everyListItemIncludesTerm(searchingText);

  await expect(searchedValuePage.getInput()).toHaveValue(searchingText);
  await expect(allItemsIncludesTerm).toBeTruthy();
});
