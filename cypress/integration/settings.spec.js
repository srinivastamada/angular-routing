describe("Settings page", () => {
  beforeEach(() => {
    cy.login("srinivas@9lessons.info", "123456");
    cy.get("#settingsLink").click();
   
  });
 
  it("should display the settings page", () => {
    cy.wait(500);
    cy.get("h1").contains("Settings");
    //cy.logout();
  });
});

