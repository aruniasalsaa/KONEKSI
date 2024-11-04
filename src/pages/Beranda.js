import "../styles/beranda.css";
import NavigationBar from '../components/NavigationBar';
import BerandaNews from '../components/BerandaNews';
import BerandaProgramAlumni from '../components/BerandaProgramAlumni';
import Footer from '../components/Footer';
import { getEvents, getNews } from '../api/Api';
import { useState, useEffect } from 'react';
import BerandaSlide from '../components/BerandaSlide';
import BerandaAcara from "../components/BerandaAcara";
// import myImage1 from "../assets/images/photo1.jpeg";
// import myImage2 from "../assets/images/photo2.jpeg";
// import myImage3 from "../assets/images/photo3.jpeg";

function Beranda() {
    const [beritaBeranda, setBeritaBeranda] = useState([]);
    const [slidesData, setSlidesData] = useState([]); 
    const [eventsBeranda, setEventsBeranda] = useState([]); 

    useEffect(() => {
                const fetchSlide = async () => {
            try {
                const response = await getEvents(); // Ambil data events dari API
                console.log(response.data); // Cek data yang diterima dari API

                // Ambil data events dari respons API
                const slidesArray = response.data.data;

                if (Array.isArray(slidesArray)) {
                    // Ambil hanya 3 events terbaru
                    const slidesData = slidesArray.slice(0, 3).map(item => ({
                        src: item.image,
                        label: item.title,
                        caption: item.content
                    }));
                    setSlidesData(slidesData); // Update state dengan data events
                } else {
                    console.error("Data yang diterima bukan array:", slidesArray);
                }
            } catch (error) {
                console.error("Error fetching slide: ", error);
            }
        };
        fetchSlide();

        const fetchBerita = async () => {
            try {
                const response = await getNews(); // Ambil data berita dari API
                console.log(response.data); // Cek data yang diterima dari API

                // Ambil data berita dari respons API
                const beritaArray = response.data.data;

                if (Array.isArray(beritaArray)) {
                    // Ambil hanya 3 berita terbaru
                    const beritaData = beritaArray.slice(0, 3).map(item => ({
                        image: item.image,
                        authorId: item.authorId,
                        title: item.title,
                        content: item.content
                    }));
                    setBeritaBeranda(beritaData); // Update state dengan data berita
                } else {
                    console.error("Data yang diterima bukan array:", beritaArray);
                }
            } catch (error) {
                console.error("Error fetching news: ", error);
            }
        };
        fetchBerita();

        const fetchEvents = async () => {
            try {
                const response = await getEvents();
                console.log(response.data);
                const eventsArray = response.data.data;

                if (Array.isArray(eventsArray)) {
                    const eventsData = eventsArray.slice(0, 4).map(item => ({
                        image: item.image,
                        title: item.title,
                        createdAt: item.createdAt
                    }));
                    setEventsBeranda(eventsData);
                } else {
                    console.error("Data yang diterima bukan array:", eventsArray);
                }
            } catch (error) {
                console.error("Error fetching events: ", error);
            }
        };
        fetchEvents();
    }, []);

    const programAlumni = [
        {
            image: {
                src: "myImage2",
                alt: "Program Alumni-1"
            },
            penulis: "Author",
            judulEvents: "Judul Program Alumni 1",
            kontenEvents: "Konten Program Alumni 1"
        },
        {
            image: {
                src: "myImage1",
                alt: "Program Alumni-2"
            },
            penulis: "Author",
            judulEvents: "Judul Program Alumni 2",
            kontenEvents: "Konten Program Alumni 2"
        },
        {
            image: {
                src: "myImage1",
                alt: "Program Alumni-3"
            },
            penulis: "Author",
            judulEvents: "Judul Program Alumni 3",
            kontenEvents: "Konten Program Alumni 3"
        },
        
    ];

    
    return (
        <div >
            <NavigationBar />
            <BerandaSlide images={slidesData} /> 
            <BerandaNews berita={beritaBeranda} />
            <BerandaAcara acara={eventsBeranda}/>
            <BerandaProgramAlumni programAlumni={programAlumni} />
            <Footer />
        </div>
    );
}

export default Beranda;
