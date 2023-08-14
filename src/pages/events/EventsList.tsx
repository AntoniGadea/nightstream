import './EventList.scss';
import logo from '../../assets/logo.png';
import profileImage from '../../assets/default.png';
import EventCard from "./event-card/EventCard";
import mockData from "../../mockData/eventos";
import React  from "react";
import {useNavigate} from "react-router-dom";
function EventList() {
    let eventos = mockData;
    const navigate = useNavigate()
    const createEvent = () => {
        navigate("/create")
    }

    return(
        <main>
            <div className={'event-header'}>
                <img className={'logo'} src={logo} alt="nightsream"/>
                <div className={'avatar-container'}>
                    <img src={profileImage} className={'avatar'}></img>
                    <span> Streamer</span>
                </div>
            </div>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p className="font-bold">Atención</p>
                <p>Para poder participar en campañas tienes que rellenar mas datos.</p>
            </div>
            <div className={'toolbar'}>
                <button className={'create-event'} onClick={createEvent}>
                    Crear evento
                </button>
            </div>
            <div className={'card-list'}>
                { eventos?.map(evento => (
                    evento && <EventCard event={evento}/>
                ))}
            </div>

        </main>


    )
}

export default  EventList;