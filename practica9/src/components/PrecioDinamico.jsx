import { useState, useEffect } from "react";

const tasasDeCambio = {
  "$": 1,
  "€": 0.96,
  "£": 0.79,
};

const PrecioDinamico = ({ precio }) => {
  const [moneda, setMoneda] = useState("$");
  const [precioConvertido, setPrecioConvertido] = useState(precio);

  useEffect(() => {
    const actualizarMoneda = () => {
      const savedMoneda = localStorage.getItem("moneda") || "$";
      setMoneda(savedMoneda);
      setPrecioConvertido((precio * tasasDeCambio[savedMoneda]).toFixed(2));
    };

    actualizarMoneda();
    window.addEventListener("currencyChange", actualizarMoneda);

    return () => {
      window.removeEventListener("currencyChange", actualizarMoneda);
    };
  }, [precio]);

  return (
    <span className="text-blue-600 text-lg font-semibold">
      {precioConvertido} {moneda}
    </span>
  );
};

export default PrecioDinamico;
