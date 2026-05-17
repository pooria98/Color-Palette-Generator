import { create } from "zustand";

interface StoreState {
  method:
    | "analogous"
    | "complementary"
    | "triad"
    | "square"
    | "shades"
    | "tones";
  setMethod: (
    value:
      | "analogous"
      | "complementary"
      | "triad"
      | "square"
      | "shades"
      | "tones",
  ) => void;
  palette: string[];
  setPalette: (value: string[]) => void;
}

const useStore = create<StoreState>((set) => ({
  method: "analogous",
  setMethod: (value) => set({ method: value }),
  palette: [],
  setPalette: (value) => set({ palette: value }),
}));

export default useStore;
