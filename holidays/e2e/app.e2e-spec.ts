import { HolidaysPage } from './app.po';

describe('holidays App', () => {
  let page: HolidaysPage;

  beforeEach(() => {
    page = new HolidaysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
