import { Product } from "@/utils/types";
import { createContext, useState, ReactNode } from "react";

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItem) => [...prevItem, product]);
  };

  const removeFromCart = (productName: string) => {
    setCartItems((prevItem) =>
      prevItem.filter((item) => item.name !== productName)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
