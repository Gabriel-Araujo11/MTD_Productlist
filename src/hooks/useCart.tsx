import { CartContext } from "@/context/useContext";
import { useContext } from "react";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Ops! Erro encontrado");
  }
  return context;
};
