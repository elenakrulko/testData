describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Light Theme"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('.menu-title.ng-tns-c141-11').click();
    cy.get('[placeholder="Jane Doe"]').type("Olena Krulko");
    cy.get('.ng-valid>[placeholder="Email"]').type("test.krulko@gmail.com");
    cy.get('.custom-checkbox').first().click();
    cy.get('.appearance-filled.size-medium.shape-rectangle.status-primary.nb-transition').first();
    cy.get('#inputEmail1').type("test.krulko@gmail.com");
    cy.get('#inputPassword2').type("123456789");
    cy.get('.inner-circle').eq(0).click();
    cy.get('.inner-circle').eq(1).click();//если хотим передумать и выбрать второй вариант.
    cy.get('.appearance-filled.size-medium.shape-rectangle.status-primary.nb-transition').last();
    cy.get('#exampleInputEmail1').type("test.krulko@gmail.com");
    cy.get('#exampleInputPassword1').type("123456789");
    cy.get('.custom-checkbox').eq(1).click();
    cy.get('[status="danger"]');
    cy.get('[placeholder="Recipients"]').type("test");
    cy.get('[placeholder="Subject"]').type("test 2");
    cy.get('[placeholder="Message"]').type("test 3");
    cy.get('[status="success"]');
    cy.get('#inputFirstName').type("Olena");
    cy.get('#inputLastName').type("Krulko");
    cy.get('#inputEmail').type("test.krulko@gmail.com");
    cy.get('#inputWebsite').type("lala.com");
    cy.get('nb-card-body > button');
    cy.get('#inputEmail3').type("test.krulko@gmail.com");
    cy.get('#inputPassword3').type("123456789");
    cy.get('.custom-checkbox').last().click();
    cy.get('[status="warning"]');
  })
})
