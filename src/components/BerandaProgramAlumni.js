import { Button, Row, Col, Card, Container } from 'react-bootstrap';

function BerandaProgramAlumni({ programAlumni }) {
    return (
        <Container className="display-component">
            <h1 className='beranda-title'>
                Program Alumni
            </h1>
            <Row className="justify-content-center">
                {programAlumni.map((program, i) => (
                    <Col md={4} className='beranda-card d-flex justify-content-center' key={i}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={program.image.src} alt={program.image.alt} />
                            <Card.Body>
                                <p>{program.penulis}</p>
                                <Card.Title>{program.judulEvents}</Card.Title>
                                <Card.Text>
                                    {program.kontenEvents}
                                </Card.Text>
                                <Button className='button-card'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BerandaProgramAlumni;
