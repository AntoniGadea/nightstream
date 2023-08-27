import './ManageEvent.scss';
import SideMenu from "../../components/SideMenu/SideMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import logo from "../../assets/logo.png";
import userPhoto from "../../assets/default.png";
import React from "react";
import {useNavigate} from "react-router-dom";

function ManageEvent() {
    function openNav() {
        let  navSize = window.innerWidth < 900 ? '60%' : '30%';
        document.getElementById("mySidenav")!.style.width = navSize;
        document.getElementById("sidenavBackdrop")!.style.width = "100%";
    }
    const navigate = useNavigate()
    function next () {
        navigate("/events")
    }
    return(
        <main>
            <SideMenu></SideMenu>
            <div className={'event-header'}>
                <FontAwesomeIcon onClick={openNav} className={'icon'} icon={solid("bars")} />
                <img className={'logo'} src={logo} alt="nightsream"/>
            </div>
            <div className={'dashboard'}>
                <div className={'column right'}>

                <h2 className={'title'}>
                    <FontAwesomeIcon onClick={next} className={'back'} icon={solid("arrow-left")} />
                    Participantes
                </h2>

                    <div className={'title-pending'}>
                        <h3>Pendientes de aprobación</h3>
                        <div className={'table-header'}>
                            <span>Foto</span>
                            <span>Nombre</span>
                            <span>Canal</span>
                            <span>Viewers de media</span>
                            <span>Acciones</span>
                        </div>
                        <div className={'list'}>
                            <div className={'user'}>
                                <img src={userPhoto}/>
                                <span>Jose</span>
                                <span>twitch/canalusuario</span>
                                <span>1k</span>
                                <button className={'complete'}>Aceptar</button>
                            </div>
                            <div className={'user'}>
                                <img src={userPhoto}/>
                                <span>Maria</span>
                                <span>twitch/canalusuario</span>
                                <span>1k</span>
                                <button className={'complete'}>Aceptar</button>
                            </div>
                            <div className={'user'}>
                                <img src={userPhoto}/>
                                <span>Miguel</span>
                                <span>twitch/canalusuario</span>
                                <span>1k</span>
                                <button className={'complete'}>Aceptar</button>
                            </div>
                        </div>
                    </div>
                    <h3 className={'title-accepted'}>Aprobados</h3>
                    <div className={'table-header'}>
                        <span>Foto</span>
                        <span>Nombre</span>
                        <span>Canal</span>
                        <span>Viewers de media</span>
                        <span>Acciones</span>
                    </div>
                    <div className={'list'}>
                        <div className={'user'}>
                            <img src={userPhoto}/>
                            <span>Mario</span>
                            <span>twitch/canalusuario</span>
                            <span>1k</span>
                            <button className={'cancel'}>Eliminar</button>
                        </div>
                        <div className={'user'}>
                            <img src={userPhoto}/>
                            <span>Rosa</span>
                            <span>twitch/canalusuario</span>
                            <span>1k</span>
                            <button className={'cancel'}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
        )

}

export default ManageEvent