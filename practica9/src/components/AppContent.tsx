import React from 'react';
import { CartProvider } from '../context/CartContext';
import Cart from './Cart';

interface AppContentProps {
  children: React.ReactNode;
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {
  return (
    <CartProvider>
      <div className="relative min-h-screen flex flex-col">
        <Cart />
        <main className="flex-1 main-content">{children}</main>
      </div>
    </CartProvider>
  );
};

export default AppContent; 