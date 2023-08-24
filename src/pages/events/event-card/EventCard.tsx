import './EventCard.scss';
import youtubeLogo from '../../../assets/logos/youtube.png';
import twitchLogo from '../../../assets/logos/twitch.png';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EventCard({event}: any) {
    return(
        <div className={'card'}>
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
        </div>
    )
}

export default EventCard;