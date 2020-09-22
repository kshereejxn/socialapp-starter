import axios from "axios"
import {store } from "../../redux/"
class DataService {
    constructor (
        baseURL ="https://socialapp-api.herokuapp.com",
        client = axios.create()

    ){
        this.baseURL = baseURL  
        this.client = client
    }
    getUserName (){
        const loginData = JSON.parse(localStorage.getItem("login"))
        const {username} = loginData.result.username
    }
        getRecentMessages() {
            return this.client
            .get(this.baseURL + "/messages?limit=50")
            .then(response => {
                return response.data.messages
            })
        }
        postLike(messageId){
                const requestBody = {messageId}
                const config ={ 
                    headers: {
                        Authorization: `Bearer ${getToken()}`
                    }
                }
               return this.client
               .post(this.baseURL +"/likes", requestBody,config )
                .then(response => response.data.like)
        }
    }

export default DataService