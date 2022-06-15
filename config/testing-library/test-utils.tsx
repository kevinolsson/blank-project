import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { useStore } from '../../src/state/useStore';

const AllTheProviders = ({ children }: { children: React.ReactNode }): JSX.Element => {
  /* include all future providers here */
  return <>{children}</>;
};
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const initialStoreState = useStore.getState();
export const resetGlobalState = () => useStore.setState(initialStoreState, true);

export * from '@testing-library/react';
export { customRender as render };
