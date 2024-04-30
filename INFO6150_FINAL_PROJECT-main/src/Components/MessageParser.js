// MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("trips") || lowerCaseMessage.includes("trip")) {
        this.actionProvider.handleGeneralInquiry();
      } else if (lowerCaseMessage.includes("one") || lowerCaseMessage.includes("one day")) {
        this.actionProvider.handleOneDayTrips();
      } else if (lowerCaseMessage.includes("two")) {
        this.actionProvider.handleTwoDayTrips();
      } else if (lowerCaseMessage.includes("long")) {
        this.actionProvider.handleLongTrips();
      } else if (lowerCaseMessage.includes("services")) {
        this.actionProvider.handleServices();
      } else if (lowerCaseMessage.includes("price")||lowerCaseMessage.includes("pricing")) {
        this.actionProvider.handlePricing();
      }else{
        this.actionProvider.handleUnknownQuery();
      }
      // Further conditions can be added as needed
    }
  }
  
  export default MessageParser;