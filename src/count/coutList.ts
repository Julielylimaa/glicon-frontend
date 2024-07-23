import { FoodItem } from "@components/FoodBox";
import { create } from "zustand";

export type ProductCartProps = FoodItem & {
    quantidade: number
}

type StateProps = {
    products: ProductCartProps[]
    add: (product: FoodItem) => void
}

export const useCartStore = create<StateProps>((set) => ({
    products: [],
    add: (product: FoodItem) => set((state) => {
        //console.log(...state.products)
        const existingProduct = state.products.find(p => p.id === product.id)
        if (existingProduct) {
            return {
                products: state.products.map(p =>
                    p.id === product.id ? { ...p, quantidade: p.quantidade + 1 } : p
                    
                )
                
            }
        }
        //console.log(...state.products)
        return { products: [...state.products, { ...product, quantidade: 1 }] }
    }),
}));