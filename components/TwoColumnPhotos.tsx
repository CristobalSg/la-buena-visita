import React from 'react';
import { Row, Col } from 'antd';
// import 'antd/dist/reset.css';

interface TwoColumnPhotosProps {
  photos: string[]; // Lista de URLs de fotos
}

const TwoColumnPhotos: React.FC<TwoColumnPhotosProps> = ({ photos }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        {photos.map((photo, index) => (
          <Col key={index} xs={24} md={12}>
            <img
              src={photo}
              alt={`Foto ${index + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TwoColumnPhotos;
