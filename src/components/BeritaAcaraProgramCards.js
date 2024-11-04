import { Card, Col, Row, Container } from 'react-bootstrap';

function BeritaAcaraProgramCards({ beritaAcaraProgram, columnCount }) {
    return (
        <Container>
            <Row xs={1} md={columnCount} className="g-4 mt-5">
                {beritaAcaraProgram.map((displayBeritaAcaraProgram, idx) => ( 
                    <Col key={idx}>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={displayBeritaAcaraProgram.image.src} alt={displayBeritaAcaraProgram.image.alt} />
                            <Card.Body className='body-card'>
                                <p className='text-end'>{displayBeritaAcaraProgram.tanggalUpload}</p>
                                <Card.Title>{displayBeritaAcaraProgram.judulBerita}</Card.Title>
                                <Card.Text>
                                    {displayBeritaAcaraProgram.kontenBerita}
                                </Card.Text>
                                <p className='text-end'>{displayBeritaAcaraProgram.penulis}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BeritaAcaraProgramCards;
