import React, { FC, useEffect, useState } from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

// Estilo para el título principal con líneas decorativas
const titleWithLinesStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#333",
  marginBottom: "1rem"
};

// Estilo para el contenedor del componente
const containerStyle: React.CSSProperties = {
  // padding: "20px",

  textAlign: "center",
  maxWidth: "800px",
  margin: "1rem auto",
};

// Props para el componente
interface DynamicTitleProps {
  mainTitle?: string;
  subtitle?: string;
  paragraphText?: string;
}

// Componente principal
const DynamicTitle: FC<DynamicTitleProps> = ({ mainTitle, subtitle, paragraphText }) => {
  // Estado para manejar el tamaño de la fuente
  const [mainFontSize, setMainFontSize] = useState<string>("1.5em");
  const [subtitleFontSize, setSubtitleFontSize] = useState<string>("1.35em");
  const [paragraphFontSize, setParagraphFontSize] = useState<string>("1.25em");

  // Efecto para ajustar el tamaño de la fuente según el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Tamaño de pantalla móvil
        setMainFontSize("1.25rem"); // Tamaño fuente principal
        setSubtitleFontSize("1.075rem"); // Tamaño fuente subtítulo
        setParagraphFontSize("1rem"); // Tamaño fuente párrafo
      } else {
        setMainFontSize("1.5rem"); // Tamaño de fuente normal para el título principal
        setSubtitleFontSize("1.125rem"); // Tamaño de fuente normal para el subtítulo
        setParagraphFontSize("1rem"); // Tamaño de fuente normal para el párrafo 
      }
    };

    handleResize(); // Llama la función al cargar el componente
    window.addEventListener("resize", handleResize); // Escucha el cambio de tamaño de la ventana

    return () => window.removeEventListener("resize", handleResize); // Limpieza del efecto
  }, []);

  return (
    <div style={containerStyle}>
      {mainTitle && (
        <div style={{ ...titleWithLinesStyle, fontSize: mainFontSize }}>
          <span style={{ borderBottom: "1px solid #333", width: "20%" }}></span>
          <Title level={1} className="text-primary" style={{ margin: "0 10px", fontFamily: 'Montserrat, sans-serif', fontSize: mainFontSize }}>
            {mainTitle}
          </Title>
          <span style={{ borderBottom: "1px solid #333", width: "20%" }}></span>
        </div>
      )}

      <div className="space-y-1" style={{paddingTop: "1rem", paddingInline: "1rem"}} >
        {subtitle && (
          <Title level={2} className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: subtitleFontSize }}>
            {subtitle}
          </Title>
        )}
        {paragraphText && (
          <Paragraph style={{ fontSize: paragraphFontSize, fontFamily: 'Montserrat, sans-serif' }}>
            {paragraphText}
          </Paragraph>
        )}
      </div>
    </div>
  );
};

export default DynamicTitle;
