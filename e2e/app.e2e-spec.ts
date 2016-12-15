import { JoshandamaraPage } from './app.po';

describe('joshandamara App', function() {
  let page: JoshandamaraPage;

  beforeEach(() => {
    page = new JoshandamaraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
