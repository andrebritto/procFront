import { ProcFrontPage } from './app.po';

describe('proc-front App', () => {
  let page: ProcFrontPage;

  beforeEach(() => {
    page = new ProcFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
