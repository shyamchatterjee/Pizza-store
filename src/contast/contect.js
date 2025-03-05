import axios from "axios";

export    let contect= axios.create({
    baseURL : "http://localhost:3000"
})