import './EventList.scss';
import logo from '../../assets/logo.png';
import EventCard from "./event-card/EventCard";
import mockData from "../../mockData/eventos";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideMenu from "../../components/SideMenu/SideMenu";
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

    function openNav() {
       let  navSize = window.innerWidth < 900 ? '60%' : '30%';
        document.getElementById("mySidenav")!.style.width = navSize;
        document.getElementById("sidenavBackdrop")!.style.width = "100%";
    }

    return(
        <main>
            <SideMenu></SideMenu>
            <div className={'event-header'}>
                <FontAwesomeIcon onClick={openNav} className={'icon'} icon={solid("bars")} />
                <img className={'logo'} src={logo} alt="nightsream"/>
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