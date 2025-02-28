import React from 'react';
import { CartProvider } from '../context/CartContext';
import Cart from './Cart';

interface CartWrapperProps {
  children: React.ReactNode;
}

const CartWrapper: React.FC<CartWrapperProps> = ({ children }) => {
  return (
    <CartProvider>
      <Cart />
      {children}
    </CartProvider>
  );
};

export default CartWrapper; 