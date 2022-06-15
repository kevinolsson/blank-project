import { render, screen, resetGlobalState } from 'test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    resetGlobalState();
  });

  it('should render', () => {
    render(<App />);
  });

  it('should increase the count when + is pressed', async () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('0');

    const user = userEvent.setup();
    await user.click(screen.getByText('+'));
    expect(screen.getByRole('heading')).toHaveTextContent('1');
  });

  it('should decrease the count when - is pressed', async () => {
    render(<App />);
    expect(screen.getByRole('heading')).toHaveTextContent('0');

    const user = userEvent.setup();
    await user.click(screen.getByText('-'));
    expect(screen.getByRole('heading')).toHaveTextContent('-1');
  });
});
