import React, { useState } from 'react';
import type { Course } from '../types/course';

interface VideoDialogProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

const VideoDialog: React.FC<VideoDialogProps> = ({
  course,
  isOpen,
  onClose,
}) => {
  const [selectedLesson, setSelectedLesson] = useState({
    moduleIndex: 0,
    lessonIndex: 0
  });

  if (!isOpen) return null;

  const currentVideo = course.syllabus[selectedLesson.moduleIndex]?.lessons[selectedLesson.lessonIndex]?.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{course.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Video Player */}
        <div className="aspect-video mb-6 bg-black rounded-lg overflow-hidden">
          <iframe
            src={currentVideo}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Información de la lección actual */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            {course.syllabus[selectedLesson.moduleIndex]?.lessons[selectedLesson.lessonIndex]?.title}
          </h3>
          <p className="text-gray-600">
            Módulo {selectedLesson.moduleIndex + 1}: {course.syllabus[selectedLesson.moduleIndex]?.title}
          </p>
        </div>

        {/* Temario */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Temario del Curso</h3>
          {course.syllabus.map((module, moduleIndex) => (
            <div key={moduleIndex} className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">
                Módulo {moduleIndex + 1}: {module.title}
              </h4>
              <ul className="space-y-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li
                    key={lessonIndex}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                      moduleIndex === selectedLesson.moduleIndex && 
                      lessonIndex === selectedLesson.lessonIndex
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedLesson({ moduleIndex, lessonIndex })}
                  >
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full text-sm ${
                      moduleIndex === selectedLesson.moduleIndex && 
                      lessonIndex === selectedLesson.lessonIndex
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {lessonIndex + 1}
                    </span>
                    <span>{lesson.title}</span>
                    <span className="text-sm text-gray-500 ml-auto">
                      {lesson.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDialog; 