import './EventList.scss';
import logo from '../../assets/logo.png';
import profileImage from '../../assets/default.png';
import EventCard from "./event-card/EventCard";
import mockData from "../../mockData/eventos";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
function EventList() {
    const [searchResults, setSearchResults] = useState(mockData);
    const navigate = useNavigate()
    const createEvent = () => {
        navigate("/create")
    }

    const search = (event: any) => {
        const text = event.target.value;
        if(!event.target.value) {
            setSearchResults(mockData);
            return;
        }
        const results = mockData.filter( (event) => event.name.includes(text));
        setSearchResults(results);
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

            <div className={'cards-wrapper'}>
                <SearchBar func={search}></SearchBar>
                <div className={'card-list'}>
                    { searchResults.length && searchResults.map(evento => (
                        evento && <EventCard event={evento}/>
                    ))}
                </div>
            </div>

        </main>


    )
}

export default  EventList;