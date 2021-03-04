import { translate } from '../support/commands';

describe('Password Manager', () => {
  beforeEach(() => {
    cy.visit('/');

    /************
     * STEP 1
     /************/
    cy.findByTranslation('pwdManager.info.title').should('exist');

    // check nav buttons
    cy.get('button.wizard-footer-cancel').should('be.disabled');
    cy.get('button.wizard-footer-next').should('be.disabled');
    cy.get('button.wizard-footer-back').should('be.disabled');
    cy.get('button.wizard-footer-close').should('not.be.visible');

    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').should('be.checked');

    // check nav buttons
    cy.get('button.wizard-footer-next').should('be.enabled');

    /************
      * STEP 2
      /************/
    cy.get('button.wizard-footer-next').click();
    cy.findByTranslation('pwdManager.form.title').should('exist');
    cy.get('span.error').first().contains(translate('common.form.required'));
    cy.get('span.error').first().contains(translate('common.form.password'));

    // not equal password
    cy.get('input[type="password"]').first().type('1234');
    cy.get('input[type="password"]').eq(1).type('12345');
    cy.get('span.error').first().contains(translate('common.form.equal'));

    // short password
    cy.get('input[type="password"]').first().clear();
    cy.get('input[type="password"]').eq(1).clear();
    cy.get('input[type="password"]').first().type('123');
    cy.get('input[type="password"]').eq(1).type('123');
    cy.get('span.error').first().contains(translate('common.form.password'));

    // password OK
    cy.get('input[type="password"]').first().clear();
    cy.get('input[type="password"]').eq(1).clear();
    cy.get('input[type="password"]').first().type('Prueba1');
    cy.get('input[type="password"]').eq(1).type('Prueba1');
    cy.get('span.error').should('not.exist');
    cy.get('button.wizard-footer-next').should('be.enabled');
  });

  it('password OK', () => {
    /************
     * STEP 3
     /************/
    cy.get('input[type="password"]').first().clear();
    cy.get('input[type="password"]').eq(1).clear();
    cy.get('input[type="password"]').first().type('Prueba1');
    cy.get('input[type="password"]').eq(1).type('Prueba1');
    cy.get('button.wizard-footer-next').click();
    cy.findByTranslation('wizard.successTitle').should('exist');
  });

  it('password KO', () => {
    /************
     * STEP 3
     /************/
    cy.get('input[type="password"]').first().clear();
    cy.get('input[type="password"]').eq(1).clear();
    cy.get('input[type="password"]').first().type('pruebaKO123');
    cy.get('input[type="password"]').eq(1).type('pruebaKO123');
    cy.get('button.wizard-footer-next').click();
    cy.findByTranslation('wizard.errorTitle').should('exist');
  });
});
