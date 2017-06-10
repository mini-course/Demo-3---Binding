import { Project3Page } from './app.po';

describe('project3 App', () => {
  let page: Project3Page;

  beforeEach(() => {
    page = new Project3Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
