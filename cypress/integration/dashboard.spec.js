describe("Dashboard page", () => {
  beforeEach(() => {
    cy.login("srinivas@9lessons.info", "123456");
  });
  it("should display the dashboard page", () => {
    cy.get("h1").contains("Dashboard");
    cy.get("h3").contains("Your email is srinivas@9lessons.info");
    //cy.logout();
  });
});
