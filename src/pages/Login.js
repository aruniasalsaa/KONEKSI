import { Container, Button, Form, InputGroup, Nav } from 'react-bootstrap';
import "../styles/login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alerts from '../components/Alerts';
import {login} from '../api/Api'

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [peringatanInvalid, setPeringatanInvalid] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        if (!username || !password) {
            setPeringatanInvalid("Username dan Kata Sandi tidak boleh kosong");
            return;
        } else {
            setPeringatanInvalid("");
        }

        try {
            const response = await login(username, password);  
            console.log(response.data);
            navigate('/dashboard-alumni');
        } catch (error) {
            const errorMessage = error.response?.data?.message;
            console.error("Error Login: ", errorMessage) 
            setPeringatanInvalid("Login gagal. Periksa Username dan Kata Sandi Anda!");
        }
    };

    return (
        <Container fluid className='login-container'>
            <Container className='form-container'>
                <h1 className='header-login'>KONEKSI</h1>
                <div className='text-center mx-4'>
                    <h5>Selamat datang di Sistem Informasi Alumni Universitas YARSI</h5>
                    <p className='mb-5'>Masukkan detail Anda untuk masuk ke akun Anda</p>
                </div>
                {peringatanInvalid && <Alerts peringatan={peringatanInvalid} />} 
                <Form>
                    <Form.Group className="mb-3 mx-4" controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            className='label-login'
                            type="text"
                            placeholder="Masukkan Username"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 mx-4" controlId="formGroupPassword">
                        <Form.Label>Kata Sandi</Form.Label>
                        <InputGroup>
                            <Form.Control
                                className='label-login'
                                type={showPassword ? "text" : "password"}
                                placeholder="Masukkan Kata Sandi"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <InputGroup.Text
                                onClick={togglePasswordVisibility}
                                style={{ cursor: 'pointer' }}
                            >
                                <i className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Nav.Link className='ubah-password mb-4 mx-4' onClick={() => navigate('/ubah-kata-sandi')}> Ubah Kata Sandi</Nav.Link>
                </Form>
                <div className="d-flex justify-content-center mt-20">
                    <Button size="sm" className='w-50' onClick={handleLogin}>
                        Masuk
                    </Button>
                </div>
            </Container>
        </Container>
    );
}
export default Login;
