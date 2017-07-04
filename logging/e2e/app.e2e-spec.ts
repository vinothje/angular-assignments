import { LoggingPage } from './app.po';

describe('logging App', () => {
  let page: LoggingPage;

  beforeEach(() => {
    page = new LoggingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
