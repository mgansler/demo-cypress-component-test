import { mount } from '@cypress/react';

import AVerySimpleLib from './a-very-simple-lib';

describe('AVerySimpleLib', () => {
  it('should render successfully', () => {
    mount(<AVerySimpleLib/>)

    cy.findByText('Welcome to a-very-simple-lib!').should('be.visible')
    cy.findByText('Welcome to something-shared!').should('be.visible')
  });
});
