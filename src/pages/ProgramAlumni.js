import NavigationBar from "../components/NavigationBar";
import BeritaAcaraProgramCards from "../components/BeritaAcaraProgramCards";
import myImage1 from '../assets/images/photo1.jpeg';
import myImage2 from '../assets/images/photo2.jpeg';
import myImage3 from '../assets/images/photo3.jpeg';

function ProgramAlumni() {
    const programAlumni = [
        {
            image: {
                src: myImage3,
                alt: "Program Alumni-1"
            },
            penulis: "Author",
            judulBerita: "Judul program alumni 2",
            kontenBerita: "Konten program alumni 1",
            tanggalUpload: "Tanggal program alumni di post"
        },

        {
            image: {
                src: myImage1,
                alt: "Program Alumni-2"
            },
            penulis: "Author",
            judulBerita: "Judul program alumni 2",
            kontenBerita: "Konten program alumni 2",
            tanggalUpload: "Tanggal program alumni di post"
        },

        {
            image: {
                src: myImage3,
                alt: "Program Alumni-3"
            },
            penulis: "Author",
            judulBerita: "Judul program alumni 3",
            kontenBerita: "Konten program alumni 3",
            tanggalUpload: "Tanggal program alumni di post"
        },
        {
            image: {
                src: myImage1,
                alt: "Program Alumni-4"
            },
            penulis: "Author",
            judulBerita: "Judul program alumni 4",
            kontenBerita: "Konten program alumni 4",
            tanggalUpload: "Tanggal program alumni di post"
        },

        {
            image: {
                src: myImage2,
                alt: "Program Alumni-5"
            },
            penulis: "Author",
            judulBerita: "Judul program alumni 5",
            kontenBerita: "Konten program alumni 5",
            tanggalUpload: "Tanggal program alumni di post"
        },
    ];


    return (
        <>
            <NavigationBar />
            <BeritaAcaraProgramCards beritaAcaraProgram={programAlumni} columnCount={4}/>
        </>
    )
}

export default ProgramAlumni;