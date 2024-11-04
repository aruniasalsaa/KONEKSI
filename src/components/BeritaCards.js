import { Card, Col, Row, Container } from 'react-bootstrap';

function BeritaAcaraProgramCards({ berita, columnCount }) {
    return (
        <Container>
            <Row xs={1} md={columnCount} className="g-4 mt-5">
                {berita.map((displayBerita, index) => ( 
                    <Col key={idx}>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={displayBerita.image.src} alt={displayBerita.image.alt} />
                            <Card.Body className='body-card'>
                                <p className='text-end'>{displayBerita.tanggalUpload}</p>
                                <Card.Title>{displayBerita.judulBerita}</Card.Title>
                                <Card.Text>
                                    {displayBerita.kontenBerita}
                                </Card.Text>
                                <p className='text-end'>{displayBerita.penulis}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BeritaAcaraProgramCards;
