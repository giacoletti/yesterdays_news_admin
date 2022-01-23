import JtockAuth from "j-tockauth";
import apiURL from "./apiURL";

const auth = new JtockAuth({
  host: apiURL,
  debug: false,
});

export default auth;
