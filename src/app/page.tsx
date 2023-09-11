"use client"
import {useDispatch, useSelector} from "react-redux";
import SearchBar from "@/components/SearchBar/SearchBar";
import AuthGuard from "@/components/AuthGuard/AuthGuard";
import LoadLocalData from "@/components/LoadLocalData/LoadLocalData";
import style from './events.module.css';
import {useEffect, useState} from "react";
import {getEvents} from "@/redux/event/eventActions";
import EventCard from "@/components/EventCard/EventCard";
import {EventList} from "@/models/EventList";

function App() {
    const dispatch = useDispatch();
    let events: EventList[] = useSelector((state: any) => state.events.events)
    let [listEvents, setListEvents] = useState<EventList[]>([]);

    useEffect( () => {
        if (!events.length) dispatch(getEvents());
        setListEvents(events);
    }, [events])

    const search = (event: any) => {
        const text = event.target.value;
        if(!event.target.value) {
            setListEvents(events);
            return;
        }
        const results = events.filter( (event) => event.name.toLowerCase().includes(text.toLowerCase()));
        setListEvents(results);
    }

    return (
        <>
            <div className={style.cardswrapper}>
                <div className={style.filters}>
                    <span>Filtros:</span>
                    <p>Todos</p>
                    <p>Mis eventos</p>
                    <p>Favoritos</p>
                </div>
                <SearchBar func={search}></SearchBar>
                <div className={style.cardlist}>
                    { listEvents.length
                        ?
                        listEvents.map( (event: EventList) => ( event && <EventCard event={event}/>))
                        : <h1>Cargando Eventos</h1>
                    }
                </div>
            </div>
            <LoadLocalData/>
            <AuthGuard/>
        </>
    );

}

export default App;