import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Divider } from 'antd';

const { Footer } = Layout;

// Estilos personalizados para el footer y sus elementos
const style_footer: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#2f2f2f',
  color: '#ffffff',
  opacity: 0,  // Inicia invisible para la transición
  transform: 'translateY(20px)',  // Inicia desplazado para la animación
  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',  // Duración y tipo de transición
};

const style_leftColumn: React.CSSProperties = {
  padding: '10px',
};

const style_rightColumn: React.CSSProperties = {
  backgroundColor: '#424242',
  padding: '10px',
  borderRadius: '8px',
};

const style_boldText: React.CSSProperties = {
  fontWeight: 'bold',
};

const CustomFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activar la transición una vez que el componente está montado
    setIsVisible(true);
  }, []);

  return (
    <Footer
      style={{
        ...style_footer,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <Row>
        <Col xs={24} sm={12} style={style_leftColumn}>
          <p>Complejo Asistencial Padre Las Casas</p>
          <p>(CAPLC) {new Date().getFullYear()}</p>
        </Col>
        <Col xs={24} sm={12}>
        <div style={style_rightColumn}>
          <p style={style_boldText}>Creado por:</p>
          <p>Krishna Pavez T.</p>
          <p>Pia Maldonado B.</p>
          <p>Natalia Fuentealba S.</p>
          <p>Terapeutas Ocupacional</p>
        </div>
        <Divider style={{marginBlock: "1rem"}}></Divider>
        <div style={style_rightColumn}>
          <p style={style_boldText}>Desarrollado por:</p>
          <p>Cristóbal Sandoval G.</p>
          <p>Ingeniero Civil en Informática</p>
        </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
