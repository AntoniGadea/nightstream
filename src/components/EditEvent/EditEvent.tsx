"use client"
import logo from "../../assets/logo.png";
import profileImage from "../../assets/default.png";
import React, {useState} from "react";
import './EditEvent.css';
import {useRouter} from "next/navigation";
import {FaBagShopping, FaSackDollar} from "react-icons/fa6";
import {useDispatch} from "react-redux";
import {postEvent} from "@/redux/event/eventActions";
import {func} from "prop-types";
import {EventData} from "@/models/EventData";

function NewEvent() {
    const [option, setOption] = useState('money');
    const router = useRouter();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<EventData>({
        name: "",
        description: "",
        brand: "Unknow",
        sector: "Publicidad",
        location: "España",
        start_date: new Date().toISOString(),
        end_date: '',
        budget: "1000",
        categories_streamed_by_streamers: ["Categoría 1", "Categoría 2"],
        number_of_streamers_est: 0,
        price_per_click: 1,
        price_per_view: 1,
        send_product: false,
        price_product: 100,
    });

    const back = () => {
        router.back();
    }

    function setEndDate({ target }: any) {
        let days = target.value;
        const today = new Date();
        const tomorrow = new Date(today);
        days = isNaN(days) ? 0 : parseInt(days);

        tomorrow.setDate(today.getDate() + days);
        formData.end_date = tomorrow.toISOString();
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

    const handleInputChange = (e: any) => {
        let { name, value } = e.target;
        if (name === 'number_of_streamers_est') value = parseInt(value);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        dispatch(postEvent(JSON.stringify(formData)));
    };

    return(

            <div className={'create-container'}>
                <div className="create-form">
                    <div className="mb-4">
                        <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            defaultValue={formData.name}
                            onChange={handleInputChange}
                    />                    </div>
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
                            Duracion (en dias)
                        </label>
                        <input onInput={setEndDate} id="duration" type="number" placeholder="2"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="horario">
                            Rango horario
                        </label>
                        <input id="horario" type="text" placeholder=" De 12:00 a 15:00"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="cate">
                            Categorias del stream
                        </label>
                        <input id="cate" type="text" placeholder=""/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="viewer">
                            Numero de viewers
                        </label>
                        <input
                               onChange={handleInputChange}
                               name={''}
                               id="viewer"
                               type="text"
                               placeholder="2000"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-neutral-50 text-sm font-bold mb-2" htmlFor="viewer">
                            Numero de streamers
                        </label>
                        <input defaultValue={formData.number_of_streamers_est}
                               onChange={handleInputChange}
                               name={'number_of_streamers_est'}
                               type="number"
                               placeholder="3"/>
                    </div>
                    <div className="mb-6">
                        <button className={'create-event'} onClick={handleSubmit}> Crear </button>
                        <button className={'cancel mr-2'} onClick={back}>Cancelar</button>
                        <button className={'primary'} onClick={back}>Guardar borrador</button>
                    </div>
                </div>
                <div className={'presupuesto'}>
                    <h2>Presupuesto</h2>
                    <div className={'options'}>
                        <button id={'money'} onClick={setActive} className={'case selected'}>
                            <FaSackDollar/>
                        </button>
                        <button id={'items'} onClick={setActive} className={'case'}>
                            <FaBagShopping/>
                        </button>
                        <button id={'mix'} onClick={setActive} className={'case'}>
                            <FaSackDollar/>
                            <span>+</span>
                            <FaBagShopping/>
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

    )
}

export default NewEvent;