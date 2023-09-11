import AuthGuard from "@/components/AuthGuard/AuthGuard";
import LoadLocalData from "@/components/LoadLocalData/LoadLocalData";
import NewEvent from "@/components/EditEvent/EditEvent";
import React from "react";

function EditEvent({ params }: { params: { id: string } }) {
    return(
        <div>
            <h1>Nuevo Evento</h1>
            <NewEvent/>
            <AuthGuard/>
            <LoadLocalData/>
        </div>
    )
}

export default EditEvent;