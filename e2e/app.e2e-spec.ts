import { CodeSheetPage } from './app.po';

describe('code-sheet App', () => {
  let page: CodeSheetPage;

  beforeEach(() => {
    page = new CodeSheetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
