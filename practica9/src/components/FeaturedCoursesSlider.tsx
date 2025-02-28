import React, { useState, useEffect } from 'react';
import type { Course } from '../types/course';

interface FeaturedCoursesSliderProps {
  courses: Course[];
}

const FeaturedCoursesSlider: React.FC<FeaturedCoursesSliderProps> = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === courses.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [courses.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {courses.map((course, index) => (
        <div
          key={course.id}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
            <h2 className="text-4xl font-bold text-white mb-2">{course.title}</h2>
            <p className="text-white text-lg mb-4">{course.description}</p>
            <div className="flex items-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Ver Curso
              </button>
              <span className="text-white text-xl">${course.price}</span>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/70"
        aria-label="Anterior"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/70"
        aria-label="Siguiente"
      >
        →
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {courses.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCoursesSlider; 