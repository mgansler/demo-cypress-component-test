import { render } from '@testing-library/react';

import AVerySimpleLib from './a-very-simple-lib';

describe('AVerySimpleLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AVerySimpleLib />);
    expect(baseElement).toBeTruthy();
  });
});
