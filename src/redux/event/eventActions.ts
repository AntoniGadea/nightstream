import {createAsyncThunk} from "@reduxjs/toolkit";
import {EventList} from "@/models/EventList";

export const getEvents = createAsyncThunk(
    'event/getEvents',
    async (data,{ rejectWithValue }): Promise<EventList[]> => {
        try {
            const token = localStorage.getItem('token'); // Obtén el token de localStorage u otra fuente

            const response = await fetch(`${process.env.events}/listevents`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData.error);
            }

            const events = await response.json();
            return events;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const postSubscribe = createAsyncThunk(
    'event/postSubscribe', // Cambia el nombre de la acción si es necesario
    async (id: string, thunkAPI): Promise<any> => {
        try {
            const token = localStorage.getItem('token');

            const response = await fetch(`${process.env.events}/subscribetoevent/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                return thunkAPI.rejectWithValue(errorData.error);
            }

            const events = await response.json();
            return events;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const postEvent = createAsyncThunk(
    'event/postEvent', // Cambia el nombre de la acción si es necesario
    async (data: string, thunkAPI): Promise<any> => {
        try {
            const token = localStorage.getItem('token');

            const response = await fetch(`${process.env.events}/newevent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                },
                body: data
            });

            if (!response.ok) {
                const errorData = await response.json();
                return thunkAPI.rejectWithValue(errorData.error);
            }

            const events = await response.json();
            return events;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);