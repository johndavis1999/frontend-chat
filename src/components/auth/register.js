import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalVariables';

function Register() {
    const { apiUrl } = useGlobalContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Limpiar posibles errores previos
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, { username, password });
            navigate('/login');
            console.log(response)
        } catch (err) {
            setError(err.response?.data?.message || 'Error al crear usuario');
        }
    };

    return (
        <div className="main-wrapper">
            <div className="page-wrapper full-page">
                <div className="page-content d-flex align-items-center justify-content-center">
                    <div className="row w-100 mx-0 auth-page">
                        <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-4 pe-md-0">
                                        <div className="auth-side-wrapper">
                                        </div>
                                    </div>
                                    <div className="col-md-8 ps-md-0">
                                        <div className="auth-form-wrapper px-4 py-5">
                                            <a href="#" className="nobleui-logo d-block mb-2">Chat<span>App</span></a>
                                            <h5 className="text-secondary fw-normal mb-4">Crear cuenta.</h5>
                                            <form className="forms-sample" onSubmit={handleLogin}>
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Usuario</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="username"
                                                        name="username"
                                                        placeholder="Usuario"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)} // Actualizar el estado
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        name="password"
                                                        placeholder="Contraseña"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)} // Actualizar el estado
                                                    />
                                                </div>
                                                {error && <div className="alert alert-danger">{error}</div>} {/* Mostrar el error si existe */}
                                                <button type="submit" className="btn btn-primary me-2 mb-2 mb-md-0 text-white">Crear Cuenta</button>
                                            </form>
                                            <Link to="/register" className="d-block mt-3 text-secondary">Iniciar Sesión</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
