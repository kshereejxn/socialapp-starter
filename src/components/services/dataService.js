import axios from "axios"

class DataService {
    constructor (
        baseURL ="https://socialapp-api.herokuapp.com",
        client = axios.create()

    ){
        this.baseURL = baseURL  
        this.client = client
    }
    
        getRecentMessages() {
            return this.client
            .get(this.baseURL + "/messages?limit=50")
            .then(response => {
                return response.data.messages
            })
        }
    }

export default DataService