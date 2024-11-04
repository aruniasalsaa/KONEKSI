import NavigationBar from '../components/NavigationBar';
import "../styles/beritaAcaraProgram.css"
import BeritaAcaraProgramCards from '../components/BeritaAcaraProgramCards';
import { useState } from 'react';
import { getNews } from '../api/Api';

function Berita() {
    const [berita, setBerita] = useState([]);

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
                setBerita(beritaData); // Update state dengan data berita
            } else {
                console.error("Data yang diterima bukan array:", beritaArray);
            }
        } catch (error) {
            console.error("Error fetching news: ", error);
        }
    };
    fetchBerita();



    return (
        <>
            <NavigationBar />
            <Berita berita={berita} columnCount={2} />
        </>
    );
}

export default Berita;