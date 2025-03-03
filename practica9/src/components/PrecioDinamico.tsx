import { useState, useEffect } from "react";

interface PrecioDinamicoProps {
  precio: number;
  showSelector?: boolean;
}

const tasasDeCambio = {
  "$": 1,
  "€": 0.96,
  "£": 0.79,
};

export default function PrecioDinamico({ precio, showSelector = false }: PrecioDinamicoProps) {
  const [moneda, setMoneda] = useState<string>("$");
  const [precioConvertido, setPrecioConvertido] = useState<string>('0.00');

  const actualizarPrecio = (precioActual: number, simboloMoneda: string) => {
    if (typeof precioActual !== 'number' || isNaN(precioActual)) {
      console.error('Precio inválido:', precioActual);
      return;
    }

    const tasa = tasasDeCambio[simboloMoneda as keyof typeof tasasDeCambio] || 1;
    const precioCalculado = (precioActual * tasa).toFixed(2);
    setPrecioConvertido(precioCalculado);
  };

  useEffect(() => {
    // Obtener moneda inicial del localStorage
    const savedMoneda = localStorage.getItem("moneda") || "$";
    setMoneda(savedMoneda);
    actualizarPrecio(precio, savedMoneda);

    // Escuchar cambios en la moneda global
    const handleCurrencyChange = () => {
      const nuevaMoneda = localStorage.getItem("moneda") || "$";
      setMoneda(nuevaMoneda);
      actualizarPrecio(precio, nuevaMoneda);
    };

    window.addEventListener('currencyChange', handleCurrencyChange);
    
    return () => {
      window.removeEventListener('currencyChange', handleCurrencyChange);
    };
  }, [precio]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-semibold">
        {moneda}{precioConvertido}
      </span>
      {showSelector && (
        <select
          value={moneda}
          onChange={(e) => {
            const nuevaMoneda = e.target.value;
            setMoneda(nuevaMoneda);
            localStorage.setItem("moneda", nuevaMoneda);
            window.dispatchEvent(new Event("currencyChange"));
          }}
          className="border rounded p-1"
        >
          <option value="$">USD</option>
          <option value="€">EUR</option>
          <option value="£">GBP</option>
        </select>
      )}
    </div>
  );
}
