"use client"
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "@/redux/auth/authSlice";
import {useEffect} from "react";

function LoadLocalData() {

    const dispatch = useDispatch();
    useEffect( () => {
        const token = localStorage.getItem('token');

        if (token) {
            dispatch(setToken(token));
        }
    })

    return(
        <></>
    );
}

export default LoadLocalData;