import React, { useState, ChangeEvent, FormEvent } from 'react';
import './SignUp.scss'; // Asegúrate de importar tu archivo SCSS
import { useNavigate } from 'react-router-dom';
import { signup } from '../../_core/_services/SignupService';
import {SignupData} from "../../_core/_models/SignupData"; // Asegúrate de importar el servicio adecuado para el registro

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<SignupData>({
        Type: 'streamer',
        Name: '',
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

    const handleChange = (e: ChangeEvent<any>) => {
        const { name, value, type } = e.target;

        // Maneja el valor de la casilla de verificación "newsletter" por separado
        let newValue = type === 'checkbox' ? e.target.checked : value;
        newValue = name === 'Password' ? value : parseInt(value);
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Llama a la función signup para manejar la lógica de registro
            const response = await signup(formData);

            // Verifica si la respuesta contiene un error
            if ('error' in response) {
                throw new Error(response.error);
            }

            // El registro se completó con éxito, redirige a la página de inicio de sesión
            navigate('/login');
        } catch (error) {
            console.error(`Error al registrarse: ${(error as Error).message}`);
            // Puedes manejar el error de acuerdo a tus necesidades
        }
    };

    return (
        <main>
            {/* Tu contenido del formulario de registro */}
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
                    <label htmlFor="zipCode">Código Postal</label>
                    <input
                        type="text"
                        id="zipCode"
                        name="ZipCode"
                        defaultValue={formData.ZipCode}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="city">Ciudad</label>
                    <input
                        type="text"
                        id="city"
                        name="City"
                        defaultValue={formData.City}
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
                    <label htmlFor="password">DNI o CIF</label>
                    <input
                        type="text"
                        id="CIFOrDNI"
                        name="CIFOrDNI"
                        defaultValue={formData.CIFOrDNI}
                        onChange={handleChange}
                        required
                    />
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
                        checked={formData.Newsletter}
                        onChange={handleChange}
                    />
                </div>

                {/* Botón de registro */}
                <div>
                    <button type="submit">Registrarse</button>
                </div>
            </form>
        </main>
    );
}

export default Signup;
