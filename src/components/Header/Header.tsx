"use client"
import {AiOutlineMenu} from "react-icons/ai";
import Image from "next/image";
import logo from "../../../public/logo.png";
import style from "./header.module.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLogout} from "@/redux/auth/authActions";
import {useRouter} from "next/navigation";

function Header() {
    const dispatch = useDispatch();
    const router = useRouter();
    const token = useSelector((state: any) => state.auth.token);

    useEffect(() => {

    }, [token]);

    function openNav() {
        let  navSize = window.innerWidth < 900 ? '60%' : '30%';
        document.getElementById("mySidenav")!.style.width = navSize;
        document.getElementById("sidenavBackdrop")!.style.width = "100%";
    }

    function logOut() {
        dispatch(getLogout());
        window.location.href = '/login';
    }

    if (!token) {
        return (
            <div className={style.header}>
                <Image src={logo}
                       alt={'nightstream'}
                       sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                       style={{
                           width: '80%',
                           maxWidth: '420px',
                           height: 'auto',
                       }}/>
            </div>
        )
    } else {
        return (
            <div className={style.header}>
                <AiOutlineMenu className={style.icon} onClick={openNav} />
                <Image src={logo}
                       alt={'nightstream'}
                       sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                       style={{
                           width: '80%',
                           maxWidth: '420px',
                           height: 'auto',
                       }}/>
                <button className={style.logout} onClick={logOut}>
                   Cerrar sesión
                </button>
            </div>
        )
    }


}

export default Header;