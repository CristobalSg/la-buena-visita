import React, { CSSProperties } from 'react';
import { Card, Row, Col, Typography, Image, List } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

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
  marginBottom: "16px"
};

interface QuestionCardProps {
  title: string;
  imageUrl: string;
  description: string;
  additionalMessage: string;
  additionalImages: string[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  imageUrl,
  description,
  additionalMessage,
  additionalImages,
}) => {
  const listItems = [
    { icon: <HeartOutlined />, text: '¿Cuál es la fecha de hoy? (Día-mes-año)' },
    { icon: <HeartOutlined />, text: '¿En qué día de la semana estamos?' },
    { icon: <HeartOutlined />, text: '¿En dónde estamos? (edificio, ciudad y comuna)' },
    { icon: <HeartOutlined />, text: '¿En qué estación estamos?' },
    { icon: <HeartOutlined />, text: '¿Cómo te llamas?' },
    { icon: <HeartOutlined />, text: '¿Cuántos años tienes?' },
    { icon: <HeartOutlined />, text: '¿En qué año naciste?' },
    { icon: <HeartOutlined />, text: '¿Dónde vive?' },
    { icon: <HeartOutlined />, text: '¿Con quién vive?' },
    { icon: <HeartOutlined />, text: '¿Cuáles son los familiares más cercanos?' }
  ];

  return (
    <Card style={{ ...cardStyle, background: "#FFE0E0" }}>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Title level={3} style={{ textAlign: 'center' }}>{title}</Title>
          <div style={{ height: '200px', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <img width="100%" height="100%" style={{ objectFit: 'contain' }} src={imageUrl} />
          </div>
          <Text style={{ fontSize: '1.25em' }}>{description}</Text>
        </Col>

        <Col xs={24} sm={12} md={12}>
          <Title level={3}>Por ejemplo</Title>
          <List
            itemLayout="horizontal"
            dataSource={listItems}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={item.icon}
                  title={<Text style={{ fontSize: '1.25em' }}>{item.text}</Text>}
                />
              </List.Item>
            )}
          />
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Row gutter={[8, 8]}>
            {additionalImages.map((url, index) => (
              <Col xs={12} sm={12} md={12} key={index}>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                  <img width="100%" height="100%" style={{ objectFit: 'contain' }} src={url} />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default QuestionCard;
