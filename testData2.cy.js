describe('Parameterized test', () => {
  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Light Theme"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
  });

  const testCases = [
    { position: 'top-right', type: 'primary', title: 'Test Title 1', content: 'Test Content 1', color: 'rgb(33, 150, 243)' },
    { position: 'top-left', type: 'success', title: 'Test Title 2', content: 'Test Content 2', color: 'rgb(76, 175, 80)' },
    { position: 'bottom-right', type: 'info', title: 'Test Title 3', content: 'Test Content 3', color: 'rgb(23, 162, 184)' },
    { position: 'bottom-left', type: 'warning', title: 'Test Title 4', content: 'Test Content 4', color: 'rgb(255, 193, 7)' }
  ];
  testCases.forEach(({ position, type, title, content, color }) => {
    it(`should display a ${type} toast at ${position}`, () => {
      cy.get('div:nth-child(1) > div:nth-child(1)> nb-select > button > nb-icon > svg > g > g > rect').click();
      cy.get(`nb-option[ng-reflect-value="${position}"]`).click();
      cy.get('[name="title"]').clear().type(title);
      cy.get('[name="content"]').clear().type(content);
      cy.get('div:nth-child(2) > div.form-group > nb-select > button > nb-icon > svg > g > g > rect').click();
      cy.get(`nb-option[ng-reflect-value="${type}"]`).click();
      cy.get('.size-medium').contains('Show toast').click();
    });
  });
});