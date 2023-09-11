"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import './SignUp.css';
import {useDispatch} from "react-redux";
import {postSignup} from "@/redux/auth/authActions"; // Asegúrate de importar tu archivo SCSS

function Signup() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        Type: 'streamer',
        Name: '',
        Username: '',
        Email: '',
        Password: '',
        Phone: '',
        ZipCode: '',
        City: '',
        Newsletter: false,
        LoginTwitch: '',
        Sector: '',
        Web: '',
        CIFOrDNI: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        if(name === 'Phone') value = parseInt(value)
        if(name === 'Newsletter') value = !!value
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(postSignup(formData));
    };

    return (
            <div className={'wrapper'}>
                <form onSubmit={handleSubmit}>
                    {/* Campos de entrada para el formulario */}
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="Name"
                            defaultValue={formData.Name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Nombre de usuario</label>
                        <input
                            type="text"
                            name="Username"
                            defaultValue={formData.Username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            defaultValue={formData.Email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="text"
                            id="phone"
                            name="Phone"
                            defaultValue={formData.Phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="type">Tipo de Usuario</label>
                        <select
                            id="type"
                            name="Type"
                            defaultValue={formData.Type}
                            onChange={handleChange}
                            required
                        >
                            <option value="streamer">Streamer</option>
                            <option value="business">Business</option>
                        </select>
                    </div>


                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="Password"
                            defaultValue={formData.Password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="repeatPassword">Repetir Contraseña</label>
                        <input
                            type="password"
                            id="repeatPassword"
                            name="RepeatPassword"
                            required
                        />
                    </div>

                    {formData.Type === 'streamer' && (
                        <div>
                            <label htmlFor="loginTwitch">Nombre de usuario de Twitch</label>
                            <input
                                type="text"
                                id="loginTwitch"
                                name="LoginTwitch"
                                defaultValue={formData.LoginTwitch}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    {formData.Type === 'business' && (
                        <>
                            <div>
                                <label htmlFor="sector">Sector</label>
                                <input
                                    type="text"
                                    id="sector"
                                    name="Sector"
                                    defaultValue={formData.Sector}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="web">Sitio web</label>
                                <input
                                    type="text"
                                    id="web"
                                    name="Web"
                                    defaultValue={formData.Web}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}

                    {/* Campo de entrada para la casilla de verificación "newsletter" */}
                    <div>
                        <label htmlFor="newsletter">Recibir boletín de noticias</label>
                        <input
                            type="checkbox"
                            id="newsletter"
                            name="Newsletter"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Botón de registro */}
                    <div>
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
            </div>

    );
}

export default Signup;
