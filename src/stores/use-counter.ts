import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = create(
  persist<CounterStore>(
    (set) => ({
      count: 1,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    { name: 'counter-storage' },
  ),
)