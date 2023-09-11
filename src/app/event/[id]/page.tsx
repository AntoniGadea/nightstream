function EditEvent({ params }: { params: { id: string } }) {
    return(
        <div>
            <h1>Evento {params.id}</h1>
        </div>
    )
}

export default EditEvent;