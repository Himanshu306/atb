class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet(){
      const message = this.createChatBotMessage(
        "Hi, Friend"
      );
      this.updateChatbotState(message);
    }

    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Javascript:",
        {
          widget : "javascriptLinks",
        }
      );
      this.updateChatbotState(message);
    }

    updateChatbotState(message){

      this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider;