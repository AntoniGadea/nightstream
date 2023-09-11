import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getEvents, postSubscribe} from "@/redux/event/eventActions";
import {postLogin} from "@/redux/auth/authActions";
import {EventList} from "@/models/EventList";
import {useRouter} from "next/navigation";


interface EventState {
    events: EventList[]
}

const initialState: EventState = {
   events: []
};

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reeducers: {

    },
    extraReducers: {
        [getEvents.fulfilled]: (state: any, action: PayloadAction<EventList[]>) => {
            console.log('here');
            state.events = action.payload;
        },
        [postSubscribe.fulfilled]: (state: any, action: PayloadAction<any>) => {
            console.log(action.payload);
            const router = useRouter();
            router.push('/');
        },
    }
});

export const { } = eventSlice.actions;

export default eventSlice.reducer;