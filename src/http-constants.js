import axios from "axios";

let baseURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    baseURL = "https://390b5ecad7c4.ngrok.io/";
} else {
    baseURL = "http://api.example.com";
}

export const HTTP = axios.create({
    baseURL: baseURL,
});