import React, { useState, useEffect } from 'react';
import type { Course } from '../types/course';
import { useCart } from '../context/CartContext';
import PrecioDinamico from './PrecioDinamico';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const { 
    title, 
    description, 
    price, 
    image, 
    category, 
    level, 
    instructor, 
    duration,
    learningObjectives 
  } = course;

  useEffect(() => {
    setIsClient(true);
  }, []);

  let cart;
  try {
    cart = isClient ? useCart() : null;
  } catch (error) {
    console.error('Error al acceder al contexto del carrito:', error);
    cart = null;
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!cart?.addItem) return;

    try {
      setIsAdding(true);
      cart.addItem(course);
      setTimeout(() => {
        setIsAdding(false);
      }, 500);
    } catch (error) {
      console.error('Error al añadir al carrito:', error);
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700 shadow">
            {level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {category}
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4 pb-4 border-b">
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{instructor.name}</p>
            <p className="text-xs text-gray-500 line-clamp-1">{instructor.bio}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <PrecioDinamico precio={price} showSelector={false} />
            </div>
          </div>
          
          <div className="flex gap-2">
            {isClient && cart?.addItem && (
              <button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  isAdding 
                    ? 'bg-green-500 text-white cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5'
                }`}
              >
                {isAdding ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Añadiendo...</span>
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Añadir al Carrito</span>
                  </>
                )}
              </button>
            )}
            <a 
              href={`/curso/${course.id}`}
              className="flex-1 flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Ver Curso
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard; 