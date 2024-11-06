import React from 'react';
import { Button, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface NavigationButtonsProps {
  previousHref: string;
  nextHref: string;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ previousHref, nextHref }) => {
  return (
    <Row justify="space-between" style={{ width: '100%', marginTop: '16px' }}>
      {/* Botón de navegación hacia la página anterior */}
      <Col xs={12} sm={6}>
        <Link href={previousHref} passHref>
          <Button
            icon={<LeftOutlined />}
            type="primary"
            style={{
              backgroundColor: '#C4B5A6',
              borderColor: '#C4B5A6',
              borderRadius: '9999px',
            //   width: '100%',
            }}
          >
          </Button>
        </Link>
      </Col>

      {/* Botón de navegación hacia la siguiente página, pegado a la derecha */}
      <Col xs={12} sm={6} style={{ textAlign: 'right' }}>
        <Link href={nextHref} passHref>
          <Button
            icon={<RightOutlined />}
            type="primary"
            style={{
              backgroundColor: '#C4B5A6',
              borderColor: '#C4B5A6',
              borderRadius: '9999px',
            //   width: '100%',
            }}
          >
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default NavigationButtons;
