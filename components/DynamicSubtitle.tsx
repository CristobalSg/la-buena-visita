import React, { FC, useEffect, useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

// Estilo para el contenedor del componente
const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "1rem auto",
};

// Props para el componente
interface DynamicSubtitleProps {
  subtitle: string;
  centered?: boolean; // Prop para controlar si el texto está centrado o no
}

// Componente principal
const DynamicSubtitle: FC<DynamicSubtitleProps> = ({ subtitle, centered = false }) => {
  // Estado para manejar el tamaño de la fuente del subtítulo
  const [subtitleFontSize, setSubtitleFontSize] = useState<string>("1.35em");

  // Efecto para ajustar el tamaño de la fuente según el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Tamaño de pantalla móvil
        setSubtitleFontSize("1.075rem"); // Tamaño fuente subtítulo para móviles
      } else {
        setSubtitleFontSize("1.35em"); // Tamaño fuente subtítulo para pantallas más grandes
      }
    };

    handleResize(); // Llama la función al cargar el componente
    window.addEventListener("resize", handleResize); // Escucha el cambio de tamaño de la ventana

    return () => window.removeEventListener("resize", handleResize); // Limpieza del efecto
  }, []);

  return (
    <div
      style={{
        ...containerStyle,
        textAlign: centered ? "center" : "left", // Cambiar alineación del texto según la prop
      }}
    >
      {subtitle && (
        <Title level={2} className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: subtitleFontSize }}>
          {subtitle}
        </Title>
      )}
    </div>
  );
};

export default DynamicSubtitle;
