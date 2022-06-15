import { render, screen } from 'test-utils';
import { useStore } from './state/useStore';
import userEvent from '@testing-library/user-event';
import App from './App';

const initialStoreState = useStore.getState();
describe('App', () => {
  beforeEach(() => {
    useStore.setState(initialStoreState, true);
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
