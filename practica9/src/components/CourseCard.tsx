import React, { useState } from 'react';
import type { Course } from '../types/course';
import { useCart } from '../context/CartContext';
import PrecioDinamico from './PrecioDinamico';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isAdding, setIsAdding] = useState(false);
  
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

  let addItem: ((course: Course) => void) | undefined;
  try {
    const cart = useCart();
    addItem = cart.addItem;
  } catch (error) {
    console.error('Error al acceder al contexto del carrito:', error);
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (addItem) {
      try {
        setIsAdding(true);
        addItem(course);
        setTimeout(() => {
          setIsAdding(false);
        }, 500);
      } catch (error) {
        console.error('Error al añadir al carrito:', error);
        setIsAdding(false);
      }
    } else {
      console.error('La función addItem no está disponible');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl relative group">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-contain bg-gray-50 p-4" 
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`
            text-sm font-medium px-2 py-1 rounded-full
            ${level === 'Principiante' ? 'bg-green-100 text-green-700' : ''}
            ${level === 'Intermedio' ? 'bg-yellow-100 text-yellow-700' : ''}
            ${level === 'Avanzado' ? 'bg-red-100 text-red-700' : ''}
          `}>
            {level}
          </span>
          <span className="text-sm text-gray-500">• {duration}</span>
        </div>

        <h3 className="text-xl font-bold mb-2 line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-4">
          <h4 className="text-sm font-semibold text-gray-700">Aprenderás:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {learningObjectives.slice(0, 2).map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="line-clamp-1">{objective}</span>
              </li>
            ))}
          </ul>
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
                <PrecioDinamico precio={course.price} /> {/* Aquí se muestra el precio convertido */}
              </div>
            </div>
          
          <div className="flex gap-2">
            {addItem && (
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