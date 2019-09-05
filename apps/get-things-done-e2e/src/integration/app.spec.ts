import { getGreeting } from '../support/app.po';

describe('get-things-done', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to get-things-done!');
  });
});
