import create, { SetState } from 'zustand'
import { createCounterSlice, ICounterSlice } from './createCounterSlice';

export type StoreSlice<T extends object, E extends object = T> = (
    set: SetState<E extends T ? E : E & T>,
  ) => T;

export type TStoreState = ICounterSlice;

export const useStore = create<TStoreState>((set) => ({
  ...createCounterSlice(set)
}));
