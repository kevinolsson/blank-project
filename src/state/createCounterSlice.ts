import { StoreSlice } from './useStore';

export interface ICounterSlice {
  count: number;
  increaseCount: (by: number) => void;
  decreaseCount: (by: number) => void;
}

export const createCounterSlice: StoreSlice<ICounterSlice> = (set) => ({
  count: 0,
  increaseCount: (by) => set((state) => ({ count: state.count + by })),
  decreaseCount: (by) => set((state) => ({ count: state.count - by }))
});
