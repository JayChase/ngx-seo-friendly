import { NgxSeoFriendlyPage } from './app.po';

describe('ngx-seo-friendly App', () => {
  let page: NgxSeoFriendlyPage;

  beforeEach(() => {
    page = new NgxSeoFriendlyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
