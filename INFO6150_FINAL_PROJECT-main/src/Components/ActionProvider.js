// ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const greetingMessage = this.createChatBotMessage("Hello! How can I assist you with your travel plans today?");
      this.setState(prev => ({ ...prev, messages: [...prev.messages, greetingMessage] }));
    }
  
    handleGeneralInquiry() {
      const message = this.createChatBotMessage("We offer a variety of trips including one-day, two-day, and long trips. Which are you interested in?");
      this.setState(prev => ({ ...prev, messages: [...prev.messages, message] }));
    }
  
    handleOneDayTrips() {
      const message = this.createChatBotMessage("Our one-day trips are perfect for quick getaways! Explore nearby destinations and make the most of your day.");
      this.setState(prev => ({ ...prev, messages: [...prev.messages, message] }));
    }
  
    handleTwoDayTrips() {
      const message = this.createChatBotMessage("Two-day trips allow for a deeper exploration. Perfect for a weekend adventure!");
      this.setState(prev => ({ ...prev, messages: [...prev.messages, message] }));
    }
  
    handleLongTrips() {
      const message = this.createChatBotMessage("Looking for something longer? Our extended trips offer an immersive experience into your chosen destination.");
      this.setState(prev => ({ ...prev, messages: [...prev.messages, message] }));
    }
  
    // You can customize these further for different responses
    handleServices() {
      const message = this.createChatBotMessage("We offer a range of services including trip planning, accommodation booking, and guided tours. How can I assist you further?");
      this.setState(prev => ({ ...prev, messages: [...prev.messages, message] }));
    }
  
    handlePricing() {
      const message = this.createChatBotMessage("Our prices vary depending on the destination, duration, and type of trip. Would you like to know more about specific trip pricing?");
      this.setState(prev => ({ ...prev, messages: [...prev.messages, message] }));
    }
    handleUnknownQuery() {
        const message = this.createChatBotMessage("I'm not sure how to respond to that. Can you try asking in a different way, or ask about our trips, services, or pricing?");
        this.setState(prev => ({ ...prev, messages: [...prev.messages, message] }));
      }
    // Helper function to update the state
    updateChatbotState(message) {
      this.setState(prev => ({ ...prev, messages: [...prev.messages, message] }));
    }
   
  }
  
  export default ActionProvider;
  