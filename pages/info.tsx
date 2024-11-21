import React, { useState } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import DynamicTitle from '@/components/TitleWithLinesStyle';

const { Title } = Typography;

const cardColors = ['#FFE0E0', '#E0FFE0', '#E0E0FF', '#E0F7FA'];
const cardStyle = (index: number, isHovered: boolean) => ({
  background: cardColors[index % cardColors.length],
  boxShadow: isHovered ? '0 4px 16px rgba(0, 0, 0, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.05)', // Cambia la sombra según el hover
  borderRadius: '8px',
  marginBottom: '24px',
  // height: '100%', // Establece una altura fija para las tarjetas
});

// Datos para los recursos adicionales
const resources = [
  {
    title: 'Estimulación polisensorial',
    imgSrc: 'https://media-public.canva.com/oIBOU/MAGMeooIBOU/1/tl.png',
    href: "https://www.canva.com/design/DAGUnM9at5g/iuFgUrjFqPzUHWT-ngcsKA/view?utm_content=DAGUnM9at5g&utm_campaign=designshare&utm_medium=link&utm_source=editor"
  },
  {
    title: 'Ejercicios de movilidad',
    imgSrc: 'https://media-public.canva.com/qaBcU/MAF-OUqaBcU/1/tl.png',
    href: "https://www.canva.com/design/DAGVEcaSHC8/mv9ByQrPfmIw6_gdedslhA/view?utm_content=DAGVEcaSHC8&utm_campaign=designshare&utm_medium=link&utm_source=editor#1"
  },
  {
    title: 'Estimulación cognitiva',
    imgSrc: 'https://media-public.canva.com/YOF4c/MAGLwaYOF4c/1/tl.png',
    href: "https://www.canva.com/design/DAGU0hq73N0/vZ6V1lVJaCkJ2j9UxyIdaQ/view?utm_content=DAGU0hq73N0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
  },
  {
    title: 'Actividades básicas de la vida diariactividades básicas de la vida diaria',
    imgSrc: 'https://media-public.canva.com/WTBu0/MAFHpMWTBu0/1/tl.png',
    href: "https://www.canva.com/design/DAGS6e2_NkY/nZe_rUvLnyKBSivrPbWTMQ/view?utm_content=DAGS6e2_NkY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
  },
];

const SalePage = () => {
  return (
    <>
      <DynamicTitle
        mainTitle="¿Qué ejercicios y actividades puedo hacer con mi familiar durante la visita?"
        subtitle="Según indicación médica, puedes realizar ejercicios de movilidad en cama, completar cuadernillos de estimulación cognitiva, o alguna otra actividad."
        paragraphText="A continuación ¡te enseñamos cuáles!"
      />
      <Row gutter={[16, 16]} justify="center">
        {resources.map((resource, idx) => {
          const [isHovered, setIsHovered] = useState(false); // Estado para el hover
          
          return (
            <Col key={idx} xs={24} sm={12} md={8} lg={6}>
              <a href={resource.href} target="_blank" rel="noopener noreferrer">
                <Card
                  style={cardStyle(idx, isHovered)} // Pasamos el estado de hover a la función de estilo
                  onMouseEnter={() => setIsHovered(true)} // Cambiamos el estado al pasar el mouse
                  onMouseLeave={() => setIsHovered(false)} // Restauramos el estado al salir el mouse
                  hoverable
                >
                  {/* Contenedor de la imagen con altura fija */}
                  <div style={{ height: '200px', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    <img
                      width={"100%"}
                      height={"100%"}
                      style={{ objectFit: 'contain' }}
                      src={resource.imgSrc}
                    />
                  </div>
                  <Title style={{fontSize: "1.25rem" ,textAlign: 'center', textTransform: 'uppercase', textDecoration: 'underline' }}>
                    {resource.title}
                  </Title>
                </Card>
              </a>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default SalePage;
