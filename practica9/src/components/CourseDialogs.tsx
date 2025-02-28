import React, { useState, useEffect } from 'react';
import type { Course } from '../types/course';
import PurchaseDialog from './PurchaseDialog';
import VideoDialog from './VideoDialog';
import { ref, set, get } from 'firebase/database';
import { db } from '../firebase/config';

interface CourseDialogsProps {
  course: Course;
}

const CourseDialogs: React.FC<CourseDialogsProps> = ({ course }) => {
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [loading, setLoading] = useState(true);

  // Monitor de estado de compra
  useEffect(() => {
    console.log("🎥 Estado de isPurchased:", isPurchased);
    if (isPurchased) {
      console.log("✨ El curso ha sido comprado exitosamente");
      // Mostrar el video automáticamente cuando se confirma la compra
      const videoContainer = document.getElementById('videoContainer');
      if (videoContainer) {
        videoContainer.classList.remove('hidden');
        setTimeout(() => {
          videoContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [isPurchased]);

  // Verificar si el curso ya fue comprado
  useEffect(() => {
    const checkPurchaseStatus = async () => {
      try {
        console.log('🔍 Verificando estado de compra para el curso:', course.id);
        const purchaseRef = ref(db, `purchases/${course.id}`);
        const purchaseSnapshot = await get(purchaseRef);
        const purchased = purchaseSnapshot.exists();
        console.log('📌 Estado inicial de compra:', purchased ? 'Comprado' : 'No comprado');
        setIsPurchased(purchased);
      } catch (error) {
        console.error('❌ Error al verificar la compra:', error);
      } finally {
        setLoading(false);
      }
    };

    checkPurchaseStatus();
  }, [course.id]);

  const handlePurchaseConfirm = async () => {
    try {
      console.log('🔹 Iniciando proceso de compra:', course.id);
      const purchaseRef = ref(db, `purchases/${course.id}`);

      // Guardar la compra en Firebase
      await set(purchaseRef, {
        purchaseDate: new Date().toISOString(),
        status: 'completed',
        courseId: course.id,
        courseTitle: course.title,
        price: course.price
      });

      console.log('✅ Compra guardada exitosamente en Firebase');
      setIsPurchased(true);
      console.log('🔄 Estado de isPurchased actualizado');
      
      // Emitir evento de compra confirmada
      document.dispatchEvent(new CustomEvent('purchaseConfirmed'));
      console.log('📢 Evento purchaseConfirmed emitido');

      // Cerrar diálogo de compra
      setTimeout(() => {
        setIsPurchaseDialogOpen(false);
        console.log('🔒 Diálogo de compra cerrado');
      }, 2000);

    } catch (error) {
      console.error('❌ Error al procesar la compra:', error);
      alert('Error al procesar la compra. Por favor, inténtalo de nuevo.');
    }
  };

  const handleDialogClose = () => {
    console.log('🔒 Cerrando diálogos');
    setIsPurchaseDialogOpen(false);
    setIsVideoDialogOpen(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Verificando estado del curso...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {isPurchased ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded animate-fade-in">
          <p className="font-semibold">¡Ya tienes acceso a este curso!</p>
          <p className="text-sm">El video tutorial está disponible más abajo.</p>
        </div>
      ) : (
        <button 
          onClick={() => setIsPurchaseDialogOpen(true)}
          className="w-full py-3 px-6 rounded-lg text-white transition-colors bg-blue-600 hover:bg-blue-700"
        >
          Comprar Curso
        </button>
      )}
      
      <PurchaseDialog
        course={course}
        isOpen={isPurchaseDialogOpen}
        onClose={handleDialogClose}
        onConfirm={handlePurchaseConfirm}
      />
    </div>
  );
};

export default CourseDialogs; 