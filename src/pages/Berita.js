import NavigationBar from '../components/NavigationBar';
import "../styles/beritaAcaraProgram.css"
import BeritaAcaraProgramCards from '../components/BeritaAcaraProgramCards';
import myImage1 from '../assets/images/photo1.jpeg';
import myImage2 from '../assets/images/photo2.jpeg';
import myImage3 from '../assets/images/photo3.jpeg';

function Berita() {
    const beritaCards = [
        {
            image: {
                src: myImage1,
                alt: "Berita-1"
            },
            penulis: "Author",
            judulBerita: "Judul berita 1",
            kontenBerita: "Konten Berita 1",
            tanggalUpload: "Tanggal berita di post"
        },

        {
            image: {
                src: myImage2,
                alt: "Berita-2"
            },
            penulis: "Author",
            judulBerita: "Judul berita 2",
            kontenBerita: "Konten Berita 2",
            tanggalUpload: "Tanggal berita di post"
        },

        {
            image: {
                src: myImage3,
                alt: "Berita-3"
            },
            penulis: "Author",
            judulBerita: "Judul berita 3",
            kontenBerita: "Konten Berita 3",
            tanggalUpload: "Tanggal berita di post"
        },
        {
            image: {
                src: myImage1,
                alt: "Berita-4"
            },
            penulis: "Author",
            judulBerita: "Judul berita 4",
            kontenBerita: "Konten Berita 4",
            tanggalUpload: "Tanggal berita di post"
        },

        {
            image: {
                src: myImage2,
                alt: "Berita-5"
            },
            penulis: "Author",
            judulBerita: "Judul berita 5",
            kontenBerita: "Konten Berita 5",
            tanggalUpload: "Tanggal berita di post"
        },

        {
            image: {
                src: myImage3,
                alt: "Berita-6"
            },
            penulis: "Author",
            judulBerita: "Judul berita 6",
            kontenBerita: "Konten Berita 6",
            tanggalUpload: "Tanggal berita di post"
        },
        {
            image: {
                src: myImage1,
                alt: "Berita-7"
            },
            penulis: "Author",
            judulBerita: "Judul berita 7",
            kontenBerita: "Konten Berita 7",
            tanggalUpload: "Tanggal berita di post"
        },

        {
            image: {
                src: myImage2,
                alt: "Berita-8"
            },
            penulis: "Author",
            judulBerita: "Judul berita 8",
            kontenBerita: "Konten Berita 8",
            tanggalUpload: "Tanggal berita di post"
        },

        {
            image: {
                src: myImage3,
                alt: "Berita-9"
            },
            penulis: "Author",
            judulBerita: "Judul berita 9",
            kontenBerita: "Konten Berita 9",
            tanggalUpload: "Tanggal berita di post"
        },
        {
            image: {
                src: myImage1,
                alt: "Berita-10"
            },
            penulis: "Author",
            judulBerita: "Judul berita 10",
            kontenBerita: "Konten Berita 10",
            tanggalUpload: "Tanggal berita di post"
        },

        {
            image: {
                src: myImage2,
                alt: "Berita-11"
            },
            penulis: "Author",
            judulBerita: "Judul berita 11",
            kontenBerita: "Konten Berita 11",
            tanggalUpload: "Tanggal berita di post"
        },

        {
            image: {
                src: myImage3,
                alt: "Berita-12"
            },
            penulis: "Author",
            judulBerita: "Judul berita 12",
            kontenBerita: "Konten Berita 12",
            tanggalUpload: "Tanggal berita di post"
        },
        {
            image: {
                src: myImage3,
                alt: "Berita-13"
            },
            penulis: "Author",
            judulBerita: "Judul berita 13",
            kontenBerita: "Konten Berita 13",
            tanggalUpload: "Tanggal berita di post"
        },
    ];


    return (
        <>
            <NavigationBar />
            <BeritaAcaraProgramCards beritaAcaraProgram={beritaCards} columnCount={2} />
        </>

    );
}

export default Berita;