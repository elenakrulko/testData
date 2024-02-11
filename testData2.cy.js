describe('Parameterized test', () => {
  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Light Theme"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
  });

  const testCases = [
    { position: 'top-right', type: 'primary', title: 'Test Title 1', content: 'Test Content 1', color: 'rgb(51, 102, 255)', justifyContent: 'flex-end', alignItems: 'flex-start'},
    { position: 'top-left', type: 'success', title: 'Test Title 2', content: 'Test Content 2', color: 'rgb(0, 214, 143)',justifyContent: 'flex-start', alignItems: 'flex-start'},
    { position: 'bottom-right', type: 'info', title: 'Test Title 3', content: 'Test Content 3', color: 'rgb(0, 149, 255)', justifyContent: 'flex-end', alignItems: 'flex-end'},
    { position: 'bottom-left', type: 'danger', title: 'Test Title 4', content: 'Test Content 4', color: 'rgb(255, 61, 113)', justifyContent: 'flex-start', alignItems: 'flex-end'}
   ];
  testCases.forEach(({ position, type, title, content, color, justifyContent, alignItems }) => {
    it(`should display a ${type} toast at ${position}`, () => {
      cy.get('.position-select').find('button').click();
      cy.get(`nb-option[ng-reflect-value="${position}"]`).click();
      cy.get('[name="title"]').clear().type(title);
      cy.get('[name="content"]').clear().type(content);
      cy.get('.select-button').eq(7).click();
      cy.get(`nb-option[ng-reflect-value="${type}"]`).click();
      cy.get('[name="timeout"]').clear().type(200000);
      cy.get('.size-medium').contains('Show toast').click();
      cy.get('.content-container').should('contain', title);
      cy.get('.content-container').should('contain', content);
      cy.get('nb-toast').should('have.css', 'background-color', color);
      cy.get('.toastr-overlay-container.cdk-global-overlay-wrapper').should('have.css','justify-content', justifyContent).and('have.css', 'align-items', alignItems);
    });
  });
});
