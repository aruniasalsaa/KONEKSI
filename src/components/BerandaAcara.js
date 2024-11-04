import { Container, Col, Row, Card } from 'react-bootstrap';

function BerandaAcara({ acara }) {
    return (
        <Container className='beranda-container'>
            <h4 className='beranda-title'>
                ACARA
            </h4>
            <hr className='custom-hr'/>
            <Row className='acara-card-row'>
                {acara.map((berandaAcara, index) => (
                    <Col xs={6} md={3} key={index}>
                        <Card className="text-white mt-4" >
                            <Card.Img src={berandaAcara.image} className="card-image"/>
                            <Card.ImgOverlay>
                                <Card.Title>{berandaAcara.title}</Card.Title>
                                <Card.Text>
                                    {berandaAcara.createdAt}
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BerandaAcara;
