export interface UserData {
    Type: "streamer" | "business";
    Email: string;
    Name: string;
    RepeatPassword: string;
    Newsletter: boolean;
    LoginTwitch: string;
    Password: string;
    City?: string;
    ZipCode?: string;
    Phone?: string;
    Sector?: string;
    Web?: string;
    CIFOrDNI?: string;
}