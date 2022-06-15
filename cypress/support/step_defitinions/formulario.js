When(`digito nome`, () => {
    const name = cy.faker.name.firstName();
    expect(name).toString();
    cy.get('[name="user[name]"]').type(name);
})

When(`digito nome {string}`, (name) => {
    cy.get('[name="user[name]"]').type(name);
})

When(`digito ultimo nome`, () => {
    const lastName = cy.faker.name.lastName();
    expect(lastName).toString();
    cy.get('[name="user[lastname]"]').type(lastName);
})

When(`digito ultimo nome`, (lastName) => {
    cy.get('[name="user[lastname]"]').type(lastName);
})

When(`digito email`, () => {
    const email = cy.faker.internet.email();
    expect(email).toString();
    cy.get('[name="user[email]"]').type(email);
})

When(`digito email {string}`, (email) => {
    cy.get('[name="user[email]"]').type(email);
})

When(`digito endereco`, () => {
    const address = cy.faker.address.streetName();
    expect(address).toString();
    cy.get('[name="user[address]"]').type("R " + address);
})

When(`digito universidade`, () => {
    const university = cy.faker.lorem.word();
    expect(university).toString();
    cy.get('[name="user[university]"]').type(university);
})

When(`digito profissao`, () => {
    const profession = cy.faker.address.streetName();
    expect(profession).toString();
    cy.get('[name="user[profile]"]').type(profession);
})

When(`digito genero`, () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const gender = ['F', 'M']
    cy.get('[id="user_gender"]').type(gender[random(0, gender.length)]);
    console.log("batata", gender[random(0, gender.length)]);
})

When(`digito idade`, () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    cy.get('[id="user_age"]').type(random(18, 70));
})

When(`clico no botao Criar`, () => {
    cy.get('.waves-effect > input').click();
})

Then(`retorna a mensagem {string}`, (message) => {
    cy.get('[id="notice"]').contains(message);
})

Then(`retorna a mensagem de erro {string}`, (message) => {
    cy.get('[id="error_explanation"]').contains(message);
})