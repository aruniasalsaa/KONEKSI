import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='main-footer py-3'>
      <Container fluid className='footer-style'>

        <Row>
          <Col lg={{ span: 4, offset: 1 }}><h4>KONEKSI</h4>
            <p>KONEKSI memungkinkan alumni YARSI untuk mengakses data mereka secara real-time. Sistem ini menghubungkan fitur-fitur seperti pusat karier, tracer study, dan penggalangan dana</p>
          </Col>
          <Col lg={{ span: 4, offset: 3 }}>
            <h6>Dikembangkan oleh Millicent</h6>
            <p > <i className="fa-solid fa-globe"></i> www.yarsi.ac.id</p>
            <p> <i className="fa-solid fa-envelope"></i> millicent.tales@gmail.com</p></Col>

        </Row>


        {/* Footer Bottom */}
        <div className='footer-bottom text-center mt-5'>
          <p className='text-xs-center'>
            &copy;{new Date().getFullYear()} KONEKSI - All Right Reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
