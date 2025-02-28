import { ref, set } from 'firebase/database';
import { db } from '../firebase/config';
import { sampleCourses } from '../data/sampleCourses';

async function loadSampleData() {
  try {
    // Cargar los cursos
    const coursesRef = ref(db, 'courses');
    await set(coursesRef, sampleCourses.reduce((acc, course) => {
      acc[course.id] = course;
      return acc;
    }, {} as Record<string, any>));

    console.log('Datos de ejemplo cargados exitosamente en Firebase');
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}

// Ejecutar la carga de datos
loadSampleData(); 