import { create } from "zustand";

interface AppState {
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
    value: number;
    setValue: (value: number) => void;
    time: string;
    setTime: (time: string) => void;
    resetFields: () => void;
  }

export const useAddHistory = create<AppState>((set) => ({
    title: '',
    setTitle: (title) => set({ title }),
    description: '',
    setDescription: (description) => set({ description }),
    value:0,
    setValue: (value) => set({ value }),
    time: '',
    setTime: (time) => set({ time }),
    resetFields: () => set({ title: '', description: '', value: 0 , time: '' })
}));
  