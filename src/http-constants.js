import axios from "axios";

let baseURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    baseURL = "https://c5650f126b98.ngrok.io/";
} else {
    baseURL = "http://api.example.com";
}

export const HTTP = axios.create({
    baseURL: baseURL,
});