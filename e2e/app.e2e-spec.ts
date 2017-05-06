import { ColmenaSiteNgPage } from './app.po';

describe('colmena-site-ng App', () => {
  let page: ColmenaSiteNgPage;

  beforeEach(() => {
    page = new ColmenaSiteNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
