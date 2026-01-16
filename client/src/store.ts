import {create} from "zustand"
import { Cartitems } from "./types/Cartitems"

type CartStore = {
   cart: Cartitems[];
   addToCart: (product: Cartitems)=>void;
   clearCart: ()=>void;
}

export const useCartStore = create<CartStore>((set)=>({
    cart: [],
    addToCart: (product)=>set((state)=>({
        cart: [product , ...state.cart]
    })),
    clearCart: ()=>set(()=>({cart: []})),
}))