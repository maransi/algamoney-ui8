import { AlgamoneyUi8Page } from './app.po';

describe('algamoney-ui8 App', () => {
  let page: AlgamoneyUi8Page;

  beforeEach(() => {
    page = new AlgamoneyUi8Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
