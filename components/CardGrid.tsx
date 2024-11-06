import React, { CSSProperties } from 'react';
import { Card, Col, Row, Image, Typography } from 'antd';
import Paragraph from 'antd/es/skeleton/Paragraph';

const { Title, Text } = Typography;

// Estilo para centrar el título
const centeredTitleStyle: CSSProperties = {
  textAlign: "center",
  // fontSize: "2em",
  color: "#333",
  marginBottom: "16px",
};

// Definir un estilo para que todas las tarjetas mantengan la misma altura
const cardStyle: CSSProperties = {
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  borderRadius: '8px',
  background: "#ffffff",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "16px",
};

interface CardData {
  key: string;
  background: string;
  title: string;
  description: string;
  imgSrc: string;
}

interface CardGridProps {
  cardData: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ cardData }) => {
  return (
    <Row gutter={[16, 16]} justify="center">
      {cardData.map((card) => (
        <Col xs={24} sm={12} md={8} lg={8} key={card.key}>
          <Card style={{ ...cardStyle, background: card.background }}>
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                {/* Aquí podrías agregar iconos si los necesitas */}
              </div>
            </div>

            {/* Título centrado */}
            <Title level={3} style={centeredTitleStyle}>{card.title}</Title>

            {/* Contenedor de la imagen con altura fija */}
            <div style={{ height: '200px', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <img
                width={"100%"}
                height={"100%"}
                style={{ objectFit: 'contain' }}
                src={card.imgSrc}
              />
            </div>
            <Text style={{ fontFamily: 'Montserrat, sans-serif'}} className="text-sm">{card.description}</Text>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardGrid;
