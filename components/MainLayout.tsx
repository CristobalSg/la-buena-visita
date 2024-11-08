"use client";

import React, { useState, useEffect } from 'react';
import { Layout, Button, Drawer, Row, Col } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomFooter from './Footer';

const { Header, Content, Footer } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); 
  const [isTransitioning, setIsTransitioning] = useState(false);  

  const handleDrawerOpen = () => setIsDrawerVisible(true);
  const handleDrawerClose = () => setIsDrawerVisible(false);

  useEffect(() => {
    setSelected(pathname);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);  
    }, 290);
  }, [pathname]);

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
                fontWeight: selected === '/' ? 'bold' : 'normal',
                textDecoration: selected === '/' ? 'underline' : 'none',
                color: 'black',
                fontSize: '1.25em',
              }}
            >
              INICIO
            </Button>
          </Link>
          <Link href="/quehacer" passHref>
            <Button
              type="link"
              style={{
                fontWeight: selected === '/quehacer' ? 'bold' : 'normal',
                textDecoration: selected === '/quehacer' ? 'underline' : 'none',
                color: 'black',
                fontSize: '1.25em',
              }}
            >
              ¿QUÉ HACER?
            </Button>
          </Link>
          <Link href="/info" passHref>
            <Button
              type="link"
              style={{
                fontWeight: selected === '/info' ? 'bold' : 'normal',
                textDecoration: selected === '/info' ? 'underline' : 'none',
                color: 'black',
                fontSize: '1.25em',
              }}
            >
              ACTIVIDADES
            </Button>
          </Link>
        </nav>

        <Button type="text" icon={<MenuOutlined />} className="menu-button" onClick={handleDrawerOpen} />
        
        <Drawer title="LA BUENA VISITA" placement="right" onClose={handleDrawerClose} open={isDrawerVisible}>
          <Row>
            <Col xs={24}>
              <Link href="/" passHref>
                <Button className="drawer-link" type="link" icon={<HomeOutlined />} onClick={handleDrawerClose}>INICIO</Button>
              </Link>
            </Col>
            <Col xs={24}>
              <Link href="/quehacer" passHref>
                <Button className="drawer-link" type="link" icon={<InfoCircleOutlined />} onClick={handleDrawerClose}>¿QUÉ HACER?</Button>
              </Link>
            </Col>
            <Col xs={24}>
              <Link href="/info" passHref>
                <Button className="drawer-link" type="link" icon={<InfoCircleOutlined />} onClick={handleDrawerClose}>ACTIVIDADES</Button>
              </Link>
            </Col>
          </Row>
        </Drawer>
      </Header>

      <Content style={{ ...contentStyle, opacity: isTransitioning ? 0 : 1 }}>
        {selected === '/' && (
          <img
            className="img-caplc"
            width="100%"
            height="100%"
            style={{
              maxHeight: "100%",
              objectFit: "cover",
            }}
            src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/W7NHXNFA2RCNXHZ7MRS2ZTSICE.jpg"
          />
        )}
        <div className="cont-style" style={contentContainerStyle}>
          {children}
        </div>
      </Content>

      <CustomFooter />
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
  gap: '10px',
};

const contentStyle = {
  minHeight: '100vh',
  background: '#F0F8FF',
  fontSize: '1.25em',
  transition: 'opacity 0s ease-in-out',  
  transitionDuration: '290ms',
  opacity: 1,
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
