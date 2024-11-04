import { Button, Row, Col, Card, Container } from 'react-bootstrap';

function BerandaProgramAlumni({ programAlumni }) {
    return (
        <Container className='beranda-container'>
            <h4 className='beranda-title'>
                PROGRAM ALUMNI
            </h4>
            <hr className='custom-hr'/>
            <Row className="justify-content-center mt-4" style={{ paddingTop: '10px' }}>
                {programAlumni.map((program, index) => (
                    <Col md={4} className='beranda-card d-flex justify-content-center' key={program.id || index}>
                        <Card style={{ width: '30rem' }} className='mt-4'>
                            <Card.Img variant="top" src={program.image.src} />
                            <Card.Body>
                                <p>{program.authorId}</p>
                                <Card.Title>{program.title}</Card.Title>
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
