import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import "../styles/beranda.css"

function BerandaNews({berita}) {
    return (
        <Container className='display-component'>
            <h1 className='beranda-title'>
                Berita
            </h1>
            <Row className="justify-content-center" style={{ paddingTop: '10px' }}>
                {berita.map((berandaNews, i) => (
                    <Col md={4} className='beranda-card d-flex justify-content-center' key={i}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={berandaNews.image.src} alt={berandaNews.image.alt} />
                        <Card.Body className="card-body">
                            <p>{berandaNews.penulis}</p>
                            <Card.Title>{berandaNews.judulBerita}</Card.Title>
                            <Card.Text>
                                {berandaNews.kontenBerita}
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

export default BerandaNews;