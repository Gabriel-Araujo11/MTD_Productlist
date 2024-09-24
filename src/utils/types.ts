export interface Product {
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  totalPrice: number;
  resetCart: () => void;
  isItemSelected: (name: string) => boolean;
}
export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
