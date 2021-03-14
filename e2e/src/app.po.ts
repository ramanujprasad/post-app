import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root mat-toolbar')).getText();
  }

  getId() {
    return element(by.id('post5'));
  }

  async getTileText(): Promise<string> {
    return this.getId().getText();
  }
}
