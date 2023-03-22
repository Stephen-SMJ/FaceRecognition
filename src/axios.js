import axios from "axios";
import router from "./router";
import Element from "element-ui"
//https://pdf.xuyijie.icu/faceRec
//http://127.0.0.1:8089
axios.defaults.baseURL = "https://pdf.xuyijie.icu/";

const request = axios.create({
    timeout: 15000,
    headers: {
        'Content-Type': "application/json; charset=utf-8"
    }
})

request.interceptors.request.use(config => {
    config.headers['faceToken'] = localStorage.getItem("faceToken");
    console.log("faceToken in axios",config.headers)
    return config
})

request.interceptors.response.use(
    response => {
        if (response.data.code === 200 || response.data.code === 201){
            return response
        }else {
            Element.Message.error(response.data.msg, {duration: 3000})
            return Promise.reject(response.data.msg)
        }
    },
    error => {
        Element.Message.error(error.msg, {duration: 3000})
        return Promise.reject(error)
    }
)

export default request