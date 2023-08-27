import './EventCard.scss';
import youtubeLogo from '../../../assets/logos/youtube.png';
import twitchLogo from '../../../assets/logos/twitch.png';
import userLogo1 from '../../../assets/logos/profile1.webp';
import userLogo2 from '../../../assets/logos/profile2.webp';
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useRef, useState} from "react";

function EventCard({event}: any) {
    const BUTTONS: any = {
        '': <button onClick={subscribe} className={'subscribe'}>Participar</button>,
        'pending': <button className={'pending'}>Pendiente de aprobación</button>,
        'subscribed':  <div>
            <button className={'complete'}>
                <span>Participando</span>
                <FontAwesomeIcon icon={solid("check")} />
            </button>
            <button onClick={cancelEvent} className={'cancel'}>Cancelar</button>
        </div>,
        'owner':  <button className={'edit'}>Editar</button>
    };

    let favourite: any = useRef(null);
    let [button, setButton]: any = useState(BUTTONS[event.status]);


    function saveEvent() {
        if( favourite.current)
        favourite.current.classList.toggle('selected')
    }

    function cancelEvent() {
        setButton(BUTTONS['']);
    }

   function subscribe() {
       setButton(BUTTONS['pending']);
   }

    return(
        <div className={`card ${event.status === 'owner' ? 'owner' : ''}`}>
        <div ref={favourite} className={'card-favorite'} onClick={saveEvent}>
                <FontAwesomeIcon  className={'unsaved'} icon={regular("star")} />
                <FontAwesomeIcon className={'saved'} icon={solid("star")} />
            </div>
            <div className={'card-header'}>
                <img src={twitchLogo}/>
                <img src={youtubeLogo}/>
            </div>
            <div className={'card-title'}>
                <p>{event.name}</p>
            </div>
            <div className={'card-description'}>
                <p>{event.description}</p>
            </div>
            <div className={'card-date'}>
                <div className={'left'}>
                    <FontAwesomeIcon className={'icon'} icon={solid("calendar")} style={{color: "#ffffff",}} />
                    <span>{event.date}</span>
                </div>
                <div className={'right'}>
                    <span>4/8</span>
                </div>
            </div>
            <div className={'card-loader'}>
                <div className={'line'}></div>
                <div className={'loaded'}></div>
            </div>
            <div className={'card-actions'}>
                {button}
                <div className={'users'}>
                    <img src={userLogo1}/>
                    <img src={userLogo2}/>
                    <span>2</span>
                </div>
            </div>
        </div>
    )
}

export default EventCard;