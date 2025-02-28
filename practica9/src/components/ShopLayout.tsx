import React from 'react';
import { CartProvider } from '../context/CartContext';
import Cart from './Cart';

interface ShopLayoutProps {
  children: React.ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <div className="relative">
        <Cart />
        <div className="main-content">
          {children}
        </div>
      </div>
    </CartProvider>
  );
};

export default ShopLayout; 