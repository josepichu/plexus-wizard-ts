import '@testing-library/cypress/add-commands';
import { resources as translations } from '../../src/locale';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const appLanguage = 'es';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const translate = (translationId = '') => {
  let t = translations?.[appLanguage]?.translation;

  const nestedTranslation = translationId.split('.');

  nestedTranslation.forEach(transLevel => {
    t = t[transLevel];
    if (!t) {
      throw new Error(`${translationId} has no translation in ${appLanguage} lang`);
    }
  });

  return t;
};

// eslint-disable-next-line no-undef
Cypress.Commands.add('findByTranslation', translationId => {
  try {
    return cy.findByText(translate(translationId));
  } catch (err) {
    throw new Error(`${translationId} has no translation in ${appLanguage} lang, error: ${err.message}`);
  }
});
