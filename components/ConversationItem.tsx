import React from 'react';
import { Row, Col, Image, Typography } from 'antd';

const { Paragraph } = Typography;

interface ConversationItemProps {
  imageSrc: string;
  text: string;
  reverse?: boolean; // Optional prop to reverse the order of image and text
}

// Estilos generales
const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto', // Centra el contenedor
  padding: '16px', // Añade padding alrededor del contenedor
  maxWidth: '800px', // Ancho máximo para el contenedor
};

const columnStyle: React.CSSProperties = {
  padding: '0 16px', // Añade margen entre las columnas
};

const ConversationItem: React.FC<ConversationItemProps> = ({ imageSrc, text, reverse }) => {
  return (
    <Row style={rowStyle}>
      {reverse ? (
        <>
          <Col xs={18} sm={18} md={18} lg={18} xl={18} style={columnStyle}>
            <Paragraph style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '1.25em', fontFamily: 'Montserrat, sans-serif' }}>
              {text}
            </Paragraph>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'flex-start', ...columnStyle }}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Image
                width="80px"
                height="80px"
                style={{ objectFit: 'contain' }}
                src={imageSrc}
              />
            </div>
          </Col>
        </>
      ) : (
        <>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'flex-end', ...columnStyle }}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Image
                width="80px"
                height="80px"
                style={{ objectFit: 'contain' }}
                src={imageSrc}
              />
            </div>
          </Col>
          <Col xs={18} sm={18} md={18} lg={18} xl={18} style={columnStyle}>
            <Paragraph style={{ fontSize: '1.25em', fontFamily: 'Montserrat, sans-serif'}}>
              {text}
            </Paragraph>
          </Col>
        </>
      )}
    </Row>
  );
};

export default ConversationItem;
