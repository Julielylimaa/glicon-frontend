import { HistoryItem } from "@components/HistoryBox";
import { create } from "zustand";

export type HistoryProps = HistoryItem 

type StateProps = {
    historyList: HistoryProps[]
    add: (history: HistoryItem) => void
}

export const useHistoryList = create<StateProps>((set) => ({
    historyList: [],
    add: (history: HistoryItem) => set((state) => {
        //console.log(...state.historyList)
        const existinghistory = state.historyList.find(p => p.id === history.id)
        if (existinghistory) {
            return {
                historyList: state.historyList.map(p =>
                    p.id === history.id ? { ...p} : p
                    
                )
                
            }
        }
        //console.log(...state.historyList)
        return { historyList: [...state.historyList, { ...history}] }
    }),
}));
