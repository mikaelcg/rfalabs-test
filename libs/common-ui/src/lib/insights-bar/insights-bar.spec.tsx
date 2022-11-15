import { render } from '@testing-library/react';

import InsightsBar from './insights-bar';

describe('InsightsBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InsightsBar />);
    expect(baseElement).toBeTruthy();
  });
});
