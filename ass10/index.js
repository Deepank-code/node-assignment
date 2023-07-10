const event = require("events");

const eventEmitter = new event();
const listner = (channel) => {
  console.log("subscribed to " + channel + " this channel");
};
eventEmitter.addListener("subscribe", listner);
eventEmitter.emit("subscribe");

console.log(eventEmitter.getMaxListeners());
console.log(eventEmitter.setMaxListeners(5));
console.log(`our eventEmitter is now set to ${eventEmitter.getMaxListeners()}`);
