import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title Post', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toContain('Post');
  });

  it('Should display the userId onclick of Id', async () => {
    page.getId().click();
    expect(await page.getTileText()).toEqual('UserId: 1');
  });

  it('Should display the Id onclick of UserId', async () => {
    page.getId().click();
    expect(await page.getTileText()).toEqual('Id: 5');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
