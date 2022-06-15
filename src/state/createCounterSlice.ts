import { StoreSlice } from './useStore';

export interface ICounterSlice {
  count: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
}

export const createCounterSlice: StoreSlice<ICounterSlice> = (set, get) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
  decrease: (by) => set((state) => ({ count: state.count - by }))
});
