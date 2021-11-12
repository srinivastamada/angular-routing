describe("Login page", () => {
  const baseUrl = Cypress.config().baseUrl;
  context("Mobile/Ipad view", () => {
    beforeEach(() => {
      cy.viewport(550, 750);
      cy.visit(baseUrl);
    });
    it("should verify page labels for mobile/ipad view", () => {
      cy.visit("http://localhost:4200");
      cy.get("h1").contains("Login");
      cy.get("#forgotLink").contains("Forgot password?");
      cy.get("#loginButton").contains("Login");
      cy.get(".navbar-burger").should("be.visible");
    });
  });
  context("Desktop", () => {
    beforeEach(() => {
      cy.visit(baseUrl);
    });
    it("should display the login page", () => {
      cy.url().should("include", "/login");
      cy.get("h1").contains("Login");
    });

    it("should verify page labels", () => {
      cy.get("h1").contains("Login");
      cy.get("#forgotLink").contains("Forgot password?");
      cy.get("#loginButton").contains("Login");
      cy.get("#signupMenuLink").contains("Signup");
      cy.get("#loginMenuLink").contains("Login");
      cy.get(".navbar-burger").should("not.visible");
    });

    it("should verify login validation", () => {
      cy.get("#loginButton").click();
      cy.get(".has-text-danger").contains("Please give valid data");
    });

    it("should check with invalid login inputs", () => {
      cy.get("#loginEmail").focus().clear().type("srinivas");
      cy.get("#loginPassword").focus().clear().type("12345");
      cy.get("#loginButton").click();
      cy.get(".has-text-danger").contains("Please give valid data");
    });

    it("should check with valid login inputs", () => {
      cy.login("srinivas@9lessons.info", "123456");
    });

    it("should navigate to dashboard page", () => {
      cy.get("h1").contains("Dashboard");
     // cy.logout();
    });
  });
});
