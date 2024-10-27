import { Col, Container, Row } from 'react-bootstrap';
import "../styles/beranda.css"
import NavigationBar from '../components/NavigationBar';
import BerandaNews from '../components/BerandaNews';
import BerandaImages from '../components/BerandaImages';
import BerandaEvents from '../components/BerandaEvents';
import BerandaProgramAlumni from '../components/BerandaProgramAlumni';
import Footer from '../components/Footer';
import "../styles/beranda.css"
import myImage1 from '../assets/images/photo1.jpeg';
import myImage2 from '../assets/images/photo2.jpeg';
import myImage3 from '../assets/images/photo3.jpeg';

const Beranda = () => {

    const beritaBeranda = [
        {
            image: {
                src: myImage1,
                alt: "Berita-1"
            },
            penulis: "Author",
            judulBerita: "Judul berita 1",
            kontenBerita: "Konten Berita 1"
        },

        {
            image: {
                src: myImage2,
                alt: "Berita-1"
            },
            penulis: "Author",
            judulBerita: "Judul berita 2",
            kontenBerita: "Konten Berita 2"
        },

        {
            image: {
                src: myImage3,
                alt: "Berita-1"
            },
            penulis: "Author",
            judulBerita: "Judul berita 3",
            kontenBerita: "Konten Berita 3"
        },
    ];

    const eventImages = [
        {
            src: myImage1,
            text: "First slide",
            label: "Judul event 1",
            caption: "Deskripsi singkat 1"
        },
        {
            src: myImage2,
            text: "Second slide",
            label: "Judul event 2",
            caption: "Deskripsi singkat 2"
        },
        {
            src: myImage3,
            text: "Third slide",
            label: "Judul event 3",
            caption: "Deskripsi singkat 3"
        }
    ];

    const programAlumni = [
        {
            image: {
                src: myImage2,
                alt: "Program Alumni-1"
            },
            penulis: "Author",
            judulEvents: "Judul Program Alumni 1",
            kontenEvents: "Konten Program Alumni 1"
        },

        {
            image: {
                src: myImage1,
                alt: "Program Alumni-2"
            },
            penulis: "Author",
            judulEvents: "Judul Program Alumni 2",
            kontenEvents: "Konten Program Alumni 2"
        },

        {
            image: {
                src: myImage1,
                alt: "Program Alumni-3"
            },
            penulis: "Author",
            judulEvents: "Judul Program Alumni 3",
            kontenEvents: "Konten Program Alumni 3"
        },
    ]

    return (
        <div>
            <NavigationBar />
            <div>
                <Container className="informasi-beranda">
                    <Row >
                        <Col sm={8}>
                            <div className='title-info'>
                                Visi
                            </div >
                            <div className='content-info'>
                                “Mewujudkan perguruan Tinggi Islam yang terpandang,
                                berwibawa, bermutu tinggi dan mampu bersaing dalam forum
                                nasional maupun Internasional”
                            </div>

                            <div className='title-info'>
                                Misi
                            </div >
                            <div className='content-info'>
                                “1. Mengembangkan ilmu pengetahuan, teknologi, dan seni, melalui pendidikan, pengajaran dan pembelajaran yang unggul dan bermutu tinggi sesuai Islam,
                                2. Mengembangkan ilmu pengetahuan, teknologi dan seni, melalui pengkajian, penelitian dan publikasi yang unggul dan bermutu tinggi sesuai Islam,
                                3. Mengembangkan ilmu pengetahuan, teknologi, dan seni, yang dapat menjawab masalah dan tantangan masyarakat dunia yang unggul dan bermutu tinggi sesuai Islam,
                                4. Mengembangkan sumberdaya manusia dan tata kelola yang dapat menjawab persoalan yang timbul di masyarakat serta memberi arah perubahan dalam rangka membangun masyarakat dunia, khususnya masyarakat Indonesia yang adil, makmur, merata dan beradab sesuai Islam.”
                            </div></Col>
                        <Col sm={4}>
                            <Row>
                                <BerandaImages />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <BerandaNews berita={beritaBeranda} />
            <BerandaEvents images={eventImages} />
            <BerandaProgramAlumni programAlumni={programAlumni} />
            <Footer />
        </div>
    )
}

export default Beranda