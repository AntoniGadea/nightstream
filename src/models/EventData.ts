export interface EventData {
    name: string;
    description: string;
    brand: string;
    sector: string;
    location: string;
    start_date: string;
    end_date: string;
    budget: string;
    categories_streamed_by_streamers: string[];
    number_of_streamers_est: number;
    price_per_click: number;
    price_per_view: number;
    send_product: boolean;
    price_product: number;
}