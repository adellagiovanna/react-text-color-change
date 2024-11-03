import React, { useState, useEffect } from "react";

function App() {
  const [textColor, setTextColor] = useState("#ffffff"); // Color inicial del texto

  useEffect(() => {
    // Función para generar un color aleatorio en formato hexadecimal
    const generateRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Cambiar el color del texto cada segundo
    const interval = setInterval(() => {
      setTextColor(generateRandomColor());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: textColor, fontSize: "3rem" }}>¡Hola Mundo!</h1>
    </div>
  );
}

export default App;
