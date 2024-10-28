import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logoYarsi from '../assets/images/logo/logo-yarsi.jpeg';


function NavigationBar() {
    const navigate = useNavigate()
    return (
        <header>
            <Navbar expand="lg" className="navbar-style fixed-top">
                <Container>
                    <Navbar.Brand className="d-flex align-items-center">
                        <img
                            alt=""
                            src={logoYarsi}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2"
                        />
                        <h4 className='navbar-style mb-0'>KONEKSI</h4>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto'>
                            <Nav.Link href="#beranda" className='navbar-style'>Beranda</Nav.Link>
                            <Nav.Link href="#berita" className='navbar-style'>Berita</Nav.Link>
                            <Nav.Link href="#events" className='navbar-style'>Events</Nav.Link>
                            <Nav.Link href="#programalumni" className='navbar-style'>Program</Nav.Link>
                            <Nav.Link href="#tracerstudy" className='navbar-style'>TracerStudy</Nav.Link>
                        </Nav>
                        <div>
                            <Button onClick={() => navigate('/masuk')} variant="outline-light" size="sm" className="w-100 w-lg-auto mt-3 mt-lg-2 mb-3 mb-lg-2">Masuk</Button>{' '}
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>

    );
}

export default NavigationBar;