import { Ng2QuizPage } from './app.po';

describe('ng2-quiz App', function() {
  let page: Ng2QuizPage;

  beforeEach(() => {
    page = new Ng2QuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
