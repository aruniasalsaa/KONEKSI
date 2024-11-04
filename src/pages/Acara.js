import NavigationBar from "../components/NavigationBar";
import "../styles/beritaAcaraProgram.css"
import BeritaAcaraProgramCards from "../components/BeritaAcaraProgramCards";
import myImage1 from '../assets/images/photo1.jpeg';
import myImage2 from '../assets/images/photo2.jpeg';
import myImage3 from '../assets/images/photo3.jpeg';

function Acara() {
    const acara = [
        {
            image: {
                src: myImage2,
                alt: "Acara-1"
            },
            penulis: "Author",
            judulBerita: "Judul acara 1",
            kontenBerita: "Konten acara 1",
            tanggalUpload: "Tanggal berita di post"
        },

        {
            image: {
                src: myImage1,
                alt: "Acara-2"
            },
            penulis: "Author",
            judulBerita: "Judul acara 2",
            kontenBerita: "Konten acara 2",
            tanggalUpload: "Tanggal acara di post"
        },

        {
            image: {
                src: myImage3,
                alt: "Acara-3"
            },
            penulis: "Author",
            judulBerita: "Judul acara 3",
            kontenBerita: "Konten acara 3",
            tanggalUpload: "Tanggal acara di post"
        },    
    ];

    return (
        <>
            <NavigationBar />
            <BeritaAcaraProgramCards beritaAcaraProgram={acara} columnCount={3}/>
        </>
    )
}
export default Acara;