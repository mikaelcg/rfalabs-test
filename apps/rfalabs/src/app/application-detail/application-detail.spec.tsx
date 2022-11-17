import { render } from '@testing-library/react';

import ApplicationDetail from './application-detail';

describe('ApplicationDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApplicationDetail />);
    expect(baseElement).toBeTruthy();
  });
});
