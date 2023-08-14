import './EventCard.scss';

function EventCard({event}: any) {
    console.log(event.event);
    return(
        <div className={'event-card'}>
            <div className={'card-header'}>
                <div className={'event-info'}>
                <span className={'event-name'}>
                    {event.name}
                </span>
                    <span className={'brand-name'}>
                    Marca X
                </span>
                    <span className={'event-hour'}>
                    {event.date}
                </span>
                </div>
                <div className={event.active ? 'event-status-active' : 'event-status-inactive'}>
                    <span>{event.active ? "Activo" : "Inactivo"}</span>
                </div>
            </div>
            <div className={'card-description'}>
                <p>
                    {event.description}
                </p>
                <div className={'card-inscription'}>
                    <div>0/20</div>
                    <button>Apuntarme</button>
                </div>
            </div>

        </div>
    )
}

export default EventCard;