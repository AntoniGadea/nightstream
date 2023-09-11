import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { UserData } from "@/models/UserData";
import { LoginData } from "@/models/LoginData";
import { SignupData } from "@/models/SignupData";
import {getLogout, postLogin, postSignup} from "@/redux/auth/authActions";
import Swal from 'sweetalert2'
import {useRouter} from "next/navigation";

interface AuthState {
    isAuthenticated: boolean;
    userData?: UserData;
    loginData: LoginData;
    signupData: SignupData;
    token: string;
    role: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    loginData: {
        Email: "",
        Password: ""
    },
    signupData: {
        Type: "streamer",
        Email: "",
        Name: "",
        Password: "",
        RepeatPassword: "",
        Newsletter: false,
        LoginTwitch: "",
    },
    token: '',
    role: '',
    userData: undefined
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginFailure: (state, action: PayloadAction<string>) => {
            console.error(action.payload)
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userData = undefined;
        },
        setToken: (state,action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    },
    extraReducers: {
        [postLogin.rejected]:  (state: any, action) => {
            console.error(action.payload);
        },
        [postLogin.fulfilled]:  (state: any, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.userData = action.payload.user;
            console.log(action.payload)
            localStorage.setItem('token', state.token);
            localStorage.setItem('role', state.role);
            localStorage.setItem('user', JSON.stringify(state.userData));
        },
        [postSignup.fulfilled]: () => {
            Swal.fire(
                'Cuenta creada!',
                'Porfavor revise su correo para validar su cuenta',
                'success',
            ).then( (e: any) => {
                window.location.href = '/login'

            });

        },
        [getLogout.fulfilled]: (state: any, action: any) => {
            state = initialState;
            localStorage.removeItem('token');

        },
        [getLogout.rejected]: (state: any, action: any) => {
            state = initialState;
            localStorage.removeItem('token');
        }
    }
});

export const {  setToken, logout, loginFailure } = authSlice.actions;

export default authSlice.reducer;
