import { createAsyncThunk } from '@reduxjs/toolkit';
import {LoginData} from "@/models/LoginData";
import {SignupData} from "@/models/SignupData";

export const signupRequest = createAsyncThunk(
    'auth/signupRequest',
    async (formData: SignupData, { rejectWithValue }) => {
        try {
            const response = await fetch(`${process.env.apiUrl}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error en el registro. Inténtalo de nuevo.');
            }

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Error en el registro. Inténtalo de nuevo.');
        }
    }
);
