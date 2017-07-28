import { HttpClientStarterPage } from './app.po';

describe('http-client-starter App', () => {
  let page: HttpClientStarterPage;

  beforeEach(() => {
    page = new HttpClientStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
