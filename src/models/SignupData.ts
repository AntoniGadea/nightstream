export interface SignupData {
    Type: "streamer" | "business";
    Email: string;
    Name: string;
    RepeatPassword: string;
    Newsletter: boolean;
    LoginTwitch: string;
    Password: string;
}