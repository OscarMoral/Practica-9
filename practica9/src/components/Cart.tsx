import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, removeItem, total, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Botón flotante del carrito */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        🛒 {items.length > 0 && <span className="ml-2">({items.length})</span>}
      </button>

      {/* Panel del carrito - Asegurar que no rompe el layout */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-end z-50 bg-black bg-opacity-50">
          <div className="w-96 bg-white shadow-lg p-6 h-screen overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Carrito de Compras</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-600 text-xl">✖</button>
            </div>

            {items.length === 0 ? (
              <p className="text-gray-500 mt-4">El carrito está vacío.</p>
            ) : (
              <ul className="mt-4">
                {items.map((item) => (
                  <li key={item.course.id} className="flex justify-between items-center border-b py-2">
                    <span>{item.course.title} ({item.quantity})</span>
                    <button 
                      onClick={() => removeItem(item.course.id)} 
                      className="text-red-500 text-lg"
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button 
              onClick={clearCart} 
              className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 