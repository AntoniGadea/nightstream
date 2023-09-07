export interface LoginData {
    Email: string;
    Password: string;
    Type: "streamer" | "business"; // Tipo de usuario: "streamer" o "business"
}