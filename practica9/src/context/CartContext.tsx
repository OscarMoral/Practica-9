import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Course } from '../types/course';

interface CartItem {
  course: Course;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (course: Course) => void;
  removeItem: (courseId: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcular el total cada vez que cambian los items
    const newTotal = items.reduce((sum, item) => sum + item.course.price * item.quantity, 0);
    setTotal(newTotal);
  }, [items]);

  const addItem = (course: Course) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.course.id === course.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.course.id === course.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { course, quantity: 1 }];
    });
  };

  const removeItem = (courseId: string) => {
    setItems(currentItems => currentItems.filter(item => item.course.id !== courseId));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
} 