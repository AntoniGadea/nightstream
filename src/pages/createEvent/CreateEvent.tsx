import logo from "../../assets/logo.png";
import profileImage from "../../assets/default.png";
import React from "react";
import './CreateEvent.scss';

function CreateEvent() {
    return(
        <main>
            <div className={'event-header'}>
                <img className={'logo'} src={logo} alt="nightsream"/>
                <div className={'avatar-container'}>
                    <img src={profileImage} className={'avatar'}></img>
                    <span> Streamer</span>
                </div>
            </div>
            <div className="create-form">
                    <div className="mb-4">
                        <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} id="name" type="text" placeholder="Nombre"/>
                    </div>
                <div className="mb-4">
                    <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="name">
                        Tipo de campaña
                    </label>
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border rounded p-2">
                        <option value="">Selecciona un tipo de campaña</option>
                        <option value="publicidad">Publicidad</option>
                        <option value="redes-sociales">Redes Sociales</option>
                        <option value="email-marketing">Email Marketing</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                    <div className="mb-6">
                        <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="duration">
                           Duracion
                        </label>
                        <input className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} id="duration" type="text" placeholder=""/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="horario">
                            Rango horario
                        </label>
                        <input className={" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} id="horario" type="text" placeholder=""/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="cate">
                            Categorias del stream
                        </label>
                        <input className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} id="cate" type="text" placeholder=""/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="viewer">
                            Numero de viewers
                        </label>
                        <input className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} id="viewer" type="text" placeholder=""/>
                    </div>
                <div className="mb-6">
                    <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="viewer">
                        Numero de streamers
                    </label>
                    <input className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} id="viewer" type="text" placeholder=""/>
                </div>
                <div className="mb-6">
                    <button className={'create-event'}> Crear </button>
                </div>
            </div>
        </main>
    )
}

export default CreateEvent;