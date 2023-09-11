import {createAction, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {LoginData} from "@/models/LoginData";
import {UserData} from "@/models/UserData";

export const postLogin = createAsyncThunk(
    'auth/loginRequest',
    async (formData: LoginData, { rejectWithValue }) => {
        try {
            const response = await fetch(`${process.env.login}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData.error);
            }

            const userData = await response.json();
            return userData;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const postSignup = createAsyncThunk(
    'auth/signup',
    async (formData: any, { rejectWithValue }) => {
        try {
            const response = await fetch(`${process.env.login}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData.error);
            }

            const userData = await response.json();
            return userData;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const getLogout = createAsyncThunk(
    'auth/logout',
    async () => {
        const token = localStorage.getItem('token'); // Obtén el token de localStorage u otra fuente
        try {
            const response = await fetch(`${process.env.login}/logout`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                }
            });

            if (!response.ok) {
                const errorData = await response.json();

            }

            const userData = await response.json();
            return userData;
        } catch (error: any) {

        }
    }
);
