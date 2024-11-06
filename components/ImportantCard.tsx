import React, { CSSProperties } from 'react';
import { Card, Col, Row, Image, Typography } from 'antd';

const { Title, Text, Paragraph} = Typography;

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
  // marginTop: "4rem",
  marginBottom: "4rem"
};

interface ImportantCardProps {
  title: string
  imageUrl: string
  subtitle: string
  paragraphText: string
}

const ImportantCard: React.FC<ImportantCardProps> = ({ title, imageUrl, subtitle, paragraphText}) => {
  return (
    <Card style={{ ...cardStyle, background: "#E0E0FF" }}>
      <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <img
              width="80px"
              height="80px"
              style={{ objectFit: 'contain' }}
              src={imageUrl}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Title level={2} style={{ textAlign: 'center',  fontFamily: 'Montserrat, sans-serif' }}>{title}</Title>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <img
              width="80px"
              height="80px"
              style={{ objectFit: 'contain' }}
              src={imageUrl}
            />
          </div>
        </Col>
      </Row>
      <div className="space-y-1" style={{textAlign: "center",}}>
        {subtitle && <Title level={2} className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.35em' }}>{subtitle}</Title>}
        {paragraphText && <Paragraph style={{ fontSize: '1.25em', fontFamily: 'Montserrat, sans-serif' }}>
          {paragraphText}
        </Paragraph>}
      </div>
    </Card>
  );
};

export default ImportantCard;
