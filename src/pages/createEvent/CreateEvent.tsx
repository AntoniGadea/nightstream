import logo from "../../assets/logo.png";
import profileImage from "../../assets/default.png";
import React, {useState} from "react";
import './CreateEvent.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import SideMenu from "../../components/SideMenu/SideMenu";
import {useNavigate} from "react-router-dom";

function CreateEvent() {
    const navigate = useNavigate()
    const [option, setOption] = useState('money');
    const back = () => {
        navigate("/events")
    }

    function openNav() {
        let  navSize = window.innerWidth < 900 ? '60%' : '30%';
        document.getElementById("mySidenav")!.style.width = navSize;
        document.getElementById("sidenavBackdrop")!.style.width = "100%";
    }

    function setActive({ target }: any) {
        const cases = document.querySelectorAll('.case');

        cases.forEach(caseElement => {
            caseElement.classList.remove('selected');
        });

        let buttonElement = target instanceof HTMLButtonElement ? target : findParentButton(target);

        if (buttonElement) {
            buttonElement.classList.add('selected');
        }

        if (buttonElement?.id) {
            let container: HTMLElement | null = document.querySelector(`.${buttonElement.id}`);
            if (container) {
                container.style.display = 'block';
                let lastOption: HTMLElement | null = document.querySelector(`.${option}`);
                lastOption!.style.display = 'none';
                setOption(buttonElement.id);
            }
        }
    }

    function findParentButton(element: any) {
        let parentNode = element.parentNode;
        while (parentNode) {
            if (parentNode instanceof HTMLButtonElement) {
                return parentNode;
            }
            parentNode = parentNode.parentNode;
        }
        return null;
    }

    return(
        <main>
            <SideMenu></SideMenu>
            <div className={'event-header'}>
                <FontAwesomeIcon onClick={openNav} className={'icon'} icon={solid("bars")} />
                <img className={'logo'} src={logo} alt="nightsream"/>
            </div>
            <div className={'create-container'}>
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
                        <button className={'cancel mr-2'} onClick={back}>Cancelar</button>
                        <button className={'primary'} onClick={back}>Guardar borrador</button>
                    </div>
                </div>
                <div className={'presupuesto'}>
                    <h2>Presupuesto</h2>
                    <div className={'options'}>
                        <button id={'money'} onClick={setActive} className={'case selected'}>
                            <FontAwesomeIcon icon={solid("sack-dollar")} />
                        </button>
                        <button id={'items'} onClick={setActive} className={'case'}>
                            <FontAwesomeIcon icon={solid("bag-shopping")} />
                        </button>
                        <button id={'mix'} onClick={setActive} className={'case'}>
                            <FontAwesomeIcon icon={solid("sack-dollar")} />
                            <span>+</span>
                            <FontAwesomeIcon icon={solid("bag-shopping")} />
                        </button>
                    </div>
                    <div className="money case-container">
                        <label>Valor total</label>
                       <input/>
                    </div>
                    <div className="items case-container">
                        <label>Descripción del/los producto/s</label>
                        <textarea>4 cajas de nuestro producto...</textarea>
                    </div>
                    <div className="mix case-container">
                        <label>Valor total</label>
                        <input/>
                        <label>Descripción del/los producto/s</label>
                        <textarea>4 cajas de nuestro producto...</textarea>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CreateEvent;