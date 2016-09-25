import { Angular2UniversityDomainListPage } from './app.po';

describe('angular2-university-domain-list App', function() {
  let page: Angular2UniversityDomainListPage;

  beforeEach(() => {
    page = new Angular2UniversityDomainListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
