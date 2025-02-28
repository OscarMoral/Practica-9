import { useState, useEffect } from "react";

const tasasDeCambio = {
  "$": 1,
  "€": 0.96,
  "£": 0.79,
};

const CurrencySelector = () => {
  const [moneda, setMoneda] = useState("$");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMoneda = localStorage.getItem("moneda") || "$";
      setMoneda(savedMoneda);
    }
  }, []);

  const handleCurrencyChange = (nuevaMoneda) => {
    setMoneda(nuevaMoneda);
    localStorage.setItem("moneda", nuevaMoneda);
    window.dispatchEvent(new Event("currencyChange")); // Evento global para actualizar precios
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-black text-lg font-bold mb-2">Seleccionar Moneda</h2>
      <div className="flex flex-col space-y-2">
        {Object.keys(tasasDeCambio).map((symbol) => (
          <label key={symbol} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="currency"
              value={symbol}
              checked={moneda === symbol}
              onChange={() => handleCurrencyChange(symbol)}
              className="sr-only peer"
            />
            <div
              className={`w-6 h-6 border-2 rounded-full peer-checked:bg-blue-500 transition ${
                moneda === symbol ? "border-blue-500" : "border-gray-400"
              }`}
            ></div>
            <span className="ml-2 text-black text-lg">{symbol}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
