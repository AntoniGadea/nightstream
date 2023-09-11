"use client"
import youtubeLogo from '../../../assets/logos/youtube.png';
import twitchLogo from '../../../public/logos/twitch.png';
import defaultLogo from '../../../public/default.png';
import userLogo2 from '../../../assets/logos/profile2.webp';

import './EventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {EventList} from "@/models/EventList";
import {FaStar, FaRegStar, FaCalendar} from "react-icons/fa6";
import profile from "../../../public/default.png";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {postSubscribe} from "@/redux/event/eventActions";

function EventCard({ event }: { event: EventList }) {

    const dispatch = useDispatch();
    const [role, setRole] = useState('');

    const BUTTONS: any = {
        'no': <button onClick={subscribe} className={'subscribe'}>Participar</button>,
        'pending': <button className={'pending'}>Pendiente de aprobación</button>,
        'subscribed':  <div>
            <button className={'complete'}>
                <span>Participando</span>
                <FontAwesomeIcon icon={"check"} />
            </button>
            <button onClick={cancelEvent} className={'cancel'}>Cancelar</button>
        </div>,
        'owner': <div>
            <button className={'edit'}>Editar</button>
            <button onClick={next} className={'subscribe'}>Ver participantes</button>
        </div>
    };

    const router = useRouter()
    function next () {
        router.push("/event/1")
    }

    let favourite: any = useRef(null);
    let [button, setButton]: any = useState(BUTTONS[event.participating_status]);


    function saveEvent() {
        if( favourite.current)
            favourite.current.classList.toggle('selected')
    }

    function cancelEvent() {
        setButton(BUTTONS['']);
    }

    function subscribe() {
        dispatch(postSubscribe(event.id));
        setButton(BUTTONS['pending']);
    }

    useEffect( () => {
        setRole(localStorage.getItem('role') ?? '');
    })

    return(
        <div className={`card ${event.is_my_event} ? 'owner' : ''}`}>
            <div ref={favourite} className={'card-favorite'} onClick={saveEvent}>
                <FaStar className={'saved'} />
                <FaRegStar className={'unsaved'} />
            </div>
            <div className={'card-header'}>
                <Image src={twitchLogo}/>
            </div>
            <div className={'card-title'}>
                <p>{event.name}</p>
            </div>
            <div className={'card-description'}>
                <p>{event.description}</p>
            </div>
            <div className={'card-date'}>
                <div className={'left'}>
                    <FaCalendar className={'icon'}/>
                    <span>{new Date(event.start_date).toString()}</span>
                </div>
                <div className={'right'}>
                    <span></span>
                </div>
            </div>
            <div className={'card-loader'}>
                <div className={'line'}></div>
                <div className={'loaded'}></div>
            </div>
            <div className={'card-actions'}>
                { role != 'business' ?
                    button :
                    ''
                }
                <div className={'users'}>
                    <Image src={defaultLogo} alt={''}/>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
}

export default EventCard;