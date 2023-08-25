import './EventCard.scss';
import youtubeLogo from '../../../assets/logos/youtube.png';
import twitchLogo from '../../../assets/logos/twitch.png';
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useRef} from "react";

function EventCard({event}: any) {
    let favourite: any = useRef(null);
    function saveEvent() {
        if( favourite.current)
        favourite.current.classList.toggle('selected')
    }

    return(
        <div className={'card'}>
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
                    <span>2/4</span>
                </div>
            </div>
            <div className={'card-loader'}>
                <div className={'line'}></div>
                <div className={'loaded'}></div>
            </div>
            <div className={'card-actions'}>
                <button className={'subscribe'}>Participar</button>
                <button className={'complete'}>
                    <span>Participando</span>
                    <FontAwesomeIcon icon={solid("check")} />
                </button>
                <button className={'cancel'}>Cancelar</button>
            </div>
        </div>
    )
}

export default EventCard;