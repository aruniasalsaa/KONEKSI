import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import {logout} from '../api/Api'

function DashboardAlumni() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await logout();
            console.log(response.data.message);
            toast.success("Berhasil Keluar!", {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            
            setTimeout(() => {
                navigate('/'); 
            }, 2000);
        } catch (error) {
            if (error.response) {
                console.error("Logout gagal:", error.response.data);
            } else {
                console.error("Logout gagal: Network Error", error);
            }
        }
    };

    return (
        <>
            <h1>Ini halaman Dasbor Alumni</h1>
            <Button variant="outline-danger" onClick={handleLogout}>
                Logout
            </Button>
            <ToastContainer />
        </>
    );
}

export default DashboardAlumni;
