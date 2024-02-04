describe('Parameterized form', () => {
  const testData = [
    {
      firstName: "Olena",
      lastName: "Krulko",
      email: "test.krulko@gmail.com",
      website: "lala.com",
      password: "123456789",
      passwordConfirmation: "123456789",
      message: "test 3",
      subject: "test 2",
      recipients: "test",
    },
  ];

  testData.forEach(({firstName, lastName, email, website, password, message, subject, recipients}) => {
    it('passes', () => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
      cy.get('[alt="Light Theme"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('.menu-title.ng-tns-c141-11').click();
      cy.get('[placeholder="Jane Doe"]').type(firstName + " " + lastName);
      cy.get('.ng-valid>[placeholder="Email"]').type(email);
      cy.get('.custom-checkbox').first().click();
      cy.get('.appearance-filled.size-medium.shape-rectangle.status-primary.nb-transition').first();
      cy.get('#inputEmail1').type(email);
      cy.get('#inputPassword2').type(password);
      cy.get('.inner-circle').eq(0).click();
      cy.get('.inner-circle').eq(1).click();//если хотим передумать и выбрать второй вариант.
      cy.get('.appearance-filled.size-medium.shape-rectangle.status-primary.nb-transition').last();
      cy.get('#exampleInputEmail1').type(email);
      cy.get('#exampleInputPassword1').type(password);
      cy.get('.custom-checkbox').eq(1).click();
      cy.get('[status="danger"]');
      cy.get('[placeholder="Recipients"]').type(recipients);
      cy.get('[placeholder="Subject"]').type(subject);
      cy.get('[placeholder="Message"]').type(message);
      cy.get('[status="success"]');
      cy.get('#inputFirstName').type(firstName);
      cy.get('#inputLastName').type(lastName);
      cy.get('#inputEmail').type(email);
      cy.get('#inputWebsite').type(website);
      cy.get('nb-card-body > button');
      cy.get('#inputEmail3').type(email);
      cy.get('#inputPassword3').type(password);
      cy.get('.custom-checkbox').last().click();
      cy.get('[status="warning"]');
    });
  });
});