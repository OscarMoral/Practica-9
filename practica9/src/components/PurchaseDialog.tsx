import React, { useState, useEffect } from 'react';
import type { Course } from '../types/course';

interface PurchaseDialogProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const PurchaseDialog: React.FC<PurchaseDialogProps> = ({
  course,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [purchaseStatus, setPurchaseStatus] = useState<'initial' | 'processing' | 'success'>('initial');

  useEffect(() => {
    console.log("📌 Estado de PurchaseDialog:", isOpen);
    if (!isOpen) {
      setPurchaseStatus('initial');
    }
  }, [isOpen]);

  useEffect(() => {
    console.log("📌 Estado de compra:", purchaseStatus);
  }, [purchaseStatus]);

  const handleConfirm = async () => {
    console.log("🔹 Iniciando confirmación de compra");
    setPurchaseStatus('processing');
    try {
      await onConfirm();
      console.log("🔹 Compra confirmada exitosamente");
      setPurchaseStatus('success');
    } catch (error) {
      console.error("❌ Error en la confirmación de compra:", error);
      setPurchaseStatus('initial');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        {purchaseStatus === 'initial' && (
          <>
            <h2 className="text-2xl font-bold mb-4">Confirmar Compra</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Instructor:</span>
                <span>{course.instructor.name}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Duración:</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Nivel:</span>
                <span>{course.level}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Precio Total:</span>
                <span className="text-green-600">${course.price}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirmar Compra
              </button>
            </div>
          </>
        )}

        {purchaseStatus === 'processing' && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Procesando Compra</h2>
            <p className="text-gray-600">Por favor, espera un momento...</p>
          </div>
        )}

        {purchaseStatus === 'success' && (
          <div className="text-center py-8">
            <div className="text-green-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">¡Compra Exitosa!</h2>
            <p className="text-gray-600 mb-4">Has comprado el curso exitosamente.</p>
            <p className="text-gray-600 mb-6">El video tutorial estará disponible en un momento.</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseDialog; 