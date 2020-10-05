import React from "react";

import DataService from "../services/dataService"
class DeleteMessage extends React.Component {
 
    constructor(props) {
   
    super(props);
    this.client = new DataService();
    this.state = {
      text: "",
      submitted: false
    };
  }
  handleDeleteMessage = (event) => {
    event.persist();
    const dataService = new DataService();
    const username = dataService.getUserName();

    const message = this.state.message.find((message) => message.username === username);
    if (!message) return;

    event.target.setAttribute("disabled", true);

    const onSuccess = (response) => {
      const handleState = (latestState) => ({
        message: latestState.message.filter((message) => message.id !== response.data.id),
      });

      const thenDo = () => event.target.removeAttribute("disabled");

      this.setState(handleState, thenDo);
    };

    const onError = (error) => event.target.removeAttribute("disabled");

    dataService.deleteLike(message.id).then(onSuccess).catch(onError);
  };
}
  export default DeleteMessage;