import { render } from '@testing-library/react';

import SomethingShared from './something-shared';

describe('SomethingShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SomethingShared />);
    expect(baseElement).toBeTruthy();
  });
});
