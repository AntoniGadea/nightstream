export interface EventList {
    id: number;
    name: string;
    description: string;
    brand: string;
    start_date: string;
    end_date: string;
    favourite: boolean;
    participating_status: string;
    is_my_event: boolean;
    profile_pics: string | null;
}
