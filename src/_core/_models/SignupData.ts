export interface SignupData {
    Type: "streamer" | "business"; // Tipo de usuario: "streamer" o "business"
    Name?: string;
    Password?: string;
    RepeatPassword?: string,
    Email?: string;
    Newsletter?: boolean;
    LoginTwitch?: string;
    City?: string;
    ZipCode?: string;
    Phone?: string;
    Sector?: string;
    Web?: string;
    CIFOrDNI?: string;
}