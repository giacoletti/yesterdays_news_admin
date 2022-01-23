import JtockAuth from "j-tockauth";

let hostURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  hostURL = "http://localhost:3000";
} else {
  hostURL = "https://yesterdays-news-api.herokuapp.com";
}

const auth = new JtockAuth({
  host: hostURL,
  prefixUrl: "/api",
  debug: false,
});

export default auth;
