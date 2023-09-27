"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { LoginData } from "@/models/LoginData";
import { postLogin } from "@/redux/auth/authActions";
import { useRouter } from "next/navigation";
import LoadLocalData from "@/components/LoadLocalData/LoadLocalData";

function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const token = useSelector((state: any) => state.auth.token);

    const [formData, setFormData] = useState<LoginData>({
        Email: "",
        Password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(postLogin(formData));
    }

    useEffect(() => {
        if (token) {
            router.push('/twitchButton');
        }
    }, [token]);

    return (
        <div className={'wrapper'}>
            <form onSubmit={handleSubmit}>
                <h1>Iniciar sesión</h1>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        defaultValue={formData.Email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        defaultValue={formData.Password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
                >
                    Acceso
                </button>
            </form>
            <div className="text-center">
                <p className="text-sm">¿No tienes una cuenta? <a href="/signup" className="text-cyan-600">Regístrate ahora</a></p>
            </div>
            <LoadLocalData />
        </div>
    );
}

export default Login;