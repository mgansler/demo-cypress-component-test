import { render } from '@testing-library/react';

import ButThisIsJustAsSimple from './but-this-is-just-as-simple';

describe('ButThisIsJustAsSimple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButThisIsJustAsSimple />);
    expect(baseElement).toBeTruthy();
  });
});
