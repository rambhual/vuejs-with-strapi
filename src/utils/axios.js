import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://localhost:1337"
});

// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] = "";

export default instance;
