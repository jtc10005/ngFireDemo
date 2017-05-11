import { NgfirePage } from './app.po';

describe('ngfire App', () => {
  let page: NgfirePage;

  beforeEach(() => {
    page = new NgfirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
