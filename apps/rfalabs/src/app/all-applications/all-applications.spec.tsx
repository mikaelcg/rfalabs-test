import { render } from '@testing-library/react';

import AllApplications from './all-applications';

describe('AllApplications', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllApplications />);
    expect(baseElement).toBeTruthy();
  });
});
