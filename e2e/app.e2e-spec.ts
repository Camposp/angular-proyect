import { AngularProyectPage } from './app.po';

describe('angular-proyect App', () => {
  let page: AngularProyectPage;

  beforeEach(() => {
    page = new AngularProyectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
