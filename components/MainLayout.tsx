"use client";

import React, { useState, useEffect } from 'react';
import { Layout, Button, Drawer, Row, Col } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [selected, setSelected] = useState('');
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); // Estado para el Drawer
  const [isTransitioning, setIsTransitioning] = useState(false);  // Estado para controlar la transición

  const handleSelect = (value: string) => {
    setIsTransitioning(true);  // Activar transición
    setIsDrawerVisible(false)
    setSelected(value);
  };

  const handleDrawerOpen = () => setIsDrawerVisible(true);
  const handleDrawerClose = () => setIsDrawerVisible(false);

  // UseEffect para manejar la transición
  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false);  // Desactivar la transición después de un tiempo
      }, 290);  // Debe coincidir con la duración de la transición (en milisegundos)
    }
  }, [selected, isTransitioning]);


  return (
    <Layout>
      <Header style={headerStyle}>
        <div className="logo" style={logoStyle}>
          <img src="https://media-public.canva.com/-1js8/MAEq6P-1js8/1/s.svg" alt="Cuidado del paciente" style={logoImageStyle} />
          <span className="header-title">LA BUENA VISITA</span>
        </div>

        <nav className="nav-buttons" style={navStyle}>
            <Link href="/" passHref>
              <Button
                type="link"
                style={{
                  fontWeight: selected === 'home' ? 'bold' : 'normal',
                  textDecoration: selected === 'home' ? 'underline' : 'none',
                  color: 'black',
                  fontSize: '1.25em',
                }}
                onClick={() => handleSelect('home')}
              >
                INICIO
              </Button>
            </Link>
            <Link href="/quehacer" passHref>
              <Button
                type="link"
                style={{
                  fontWeight: selected === 'quehacer' ? 'bold' : 'normal',
                  textDecoration: selected === 'quehacer' ? 'underline' : 'none',
                  color: 'black',
                  fontSize: '1.25em',
                }}
                onClick={() => handleSelect('quehacer')}
              >
                ¿QUÉ HACER?
              </Button>
            </Link>
            <Link href="/info" passHref>
              <Button
                type="link"
                style={{
                  fontWeight: selected === 'info' ? 'bold' : 'normal',
                  textDecoration: selected === 'info' ? 'underline' : 'none',
                  color: 'black',
                  fontSize: '1.25em',
                }}
                onClick={() => handleSelect('info')}
              >
                ACTIVIDADES
              </Button>
            </Link>
          </nav>

        <Button type="text" icon={<MenuOutlined />} className="menu-button" onClick={handleDrawerOpen} /> {/* Menú hamburguesa */}
        
        <Drawer title="LA BUENA VISITA" placement="right" onClose={handleDrawerClose} open={isDrawerVisible}>
          <Row>
            <Col xs={24}>
              <Link  href="/"passHref><Button className='drawer-link' type="link" icon={<HomeOutlined />} onClick={() => handleSelect('home')}>INICIO</Button></Link>
            </Col>
            <Col xs={24}>
              <Link href="/quehacer" passHref><Button className='drawer-link' type="link" icon={<InfoCircleOutlined />} onClick={() => handleSelect('quehacer')}>¿QUÉ HACER?</Button></Link>
            </Col>
            <Col xs={24}>
              <Link href="/info" passHref><Button className='drawer-link' type="link" icon={<InfoCircleOutlined />} onClick={() => handleSelect('info')}>ACTIVIDADES</Button></Link>
            </Col>
          </Row>
        </Drawer>
      </Header>

      <Content style={{ ...contentStyle, opacity: isTransitioning ? 0 : 1}}>
         {selected === 'home' && (
            <img
              className="img-caplc"
              width="100%"
              height="100%"
              style={{
                maxHeight: "100%",
                objectFit: "cover",
                // filter: "blur(0.1px)", // Aplica un desenfoque suave de 4px
              }}
              src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/W7NHXNFA2RCNXHZ7MRS2ZTSICE.jpg"
            />
          )}
          <div className="cont-style" style={contentContainerStyle}>
            {children}
          </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <Row>
          <Col xs={12} md={12} sm={12}>
            <p>Complejo Asistencial Padre Las Casas</p>
            <p>(CAPLC) {new Date().getFullYear()}</p>
          </Col>
          <Col xs={12} md={12} sm={12}>
            <p style={{ fontWeight: 'bold' }}>Creado por:</p>
            <p>Krishna Pavez T.</p>
            <p>Pia Maldonado B.</p>
            <p>Natalia Fuentealba S.</p>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

// Estilos en variables para mayor claridad
const headerStyle = {
  fontFamily: 'Montserrat, sans-serif',
  background: '#fff',
  padding: '0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const logoStyle = {
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: '#006D5B',
  display: 'flex',
  alignItems: 'center',
};

const logoImageStyle = {
  height: "30px",
  marginRight: '10px',
};

const navStyle = {
  // display: 'flex',
  gap: '10px',
};

const contentStyle = {
  minHeight: '100vh',
  background: '#F0F8FF',
  fontSize: '1.25em',
  transition: 'opacity 0s ease-in-out',  // Agregar transición
  transitionDuration: '290ms',
  opacity: 1,
  // padding: "0 40px"
};

const contentContainerStyle = {
  marginBlock: 20,
  background: 'white',
  minHeight: 280,
  padding: 24,
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
};

export default MainLayout;
