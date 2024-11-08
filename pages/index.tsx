import Link from 'next/link';
import React from 'react';
import { Row, Col, Typography, Button, Card, Image } from 'antd';
import type { NextPage } from 'next';

const { Paragraph } = Typography;

const Home: NextPage = () => {
  return (
    <>
            <div
        className="cont-img-home"
        style={{
          display: "flex",
          justifyContent: "center",
           marginTop: "-120px", // Ajusta el valor según lo necesites
        }}
      >
        <Image
          width={"400px"}
          height={"100%"}
          style={{
            objectFit: "cover",
            filter: "drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.3))"
          }}
          src="/images/logo-manual-buean-visita.png"
          alt="Manual de la Buena Visita Logo"
        />
      </div>
        
      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={16}>
          <Card>
            {/* <Paragraph style={{ fontSize: '1.25em', fontFamily: 'Montserrat, sans-serif'}}>
              Esta página está creada con la finalidad de entregar información que guie a los 
              familiares de los pacientes hospitalizados, en relación a como realizar, una  visita
               enriquecedora para el proceso de rehabilitación, y así mismo alcanzar un optimo 
               potencial en las habilidades necesarias para participar de las actividades de la vida diaria. 
            </Paragraph> */}
            <Paragraph style={{ fontSize: '1.25em', fontFamily: 'Montserrat, sans-serif'}}>
              Esta página brinda información para que familiares de pacientes hospitalizados puedan 
              realizar visitas que favorezcan su rehabilitación y apoyen el desarrollo de habilidades 
              para la vida diaria. 
            </Paragraph>
            {/* Contenedor flexible para el botón */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="/quehacer" passHref>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: '#C4B5A6',
                    borderColor: '#C4B5A6',
                    borderRadius: '9999px',
                    marginTop: '16px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Sombra suave
                  }}
                  onClick={() => console.log('Navegando a la siguiente página')}
                >
                  SIGUIENTE
                </Button>

              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Row gutter={[16, 16]}>
            <Col xs={12} md={12}>
              <div style={{ height: '100%', position: 'relative' }}>
                <img
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: 'cover' }}
                  src="https://media-public.canva.com/MADAoil0KKc/1/thumbnail_large-1.jpg"
                  alt="Profesional médico con paciente"
                />
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div style={{ height: '100%', position: 'relative' }}>
                <img
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: 'cover' }}
                  src="https://media-public.canva.com/MADewbrgSE4/1/thumbnail_large.jpg"
                  alt="Manos cuidadoras"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
