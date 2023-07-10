const event = require("events");

const eventEmitter = new event();

let listnermsg = (msg) => {
  console.log("User has successfully Subscribed to " + msg + " channel");
};
eventEmitter.addListener("subscribe", listnermsg);

eventEmitter.emit("subscribe", "pw wallah");
console.log("after removing emitter");
eventEmitter.removeListener("subscribe", listnermsg);

eventEmitter.emit("subscribe", "deepank");

// const EventEmitter = require("events");

// const eventEmitter = new EventEmitter();

// const subscribeMessage = (channelName) => {
//   console.log(`Thanks For Subscribing to ${channelName}`);
// };

// eventEmitter.addListener("subscribe", subscribeMessage);

// console.log("Calling event listner before removing the event.");
// eventEmitter.emit("subscribe", "College Wallah");

// console.log("Calling event listner after removing the event.");
// eventEmitter.removeListener("subscribe", subscribeMessage);

// eventEmitter.emit("subscribe", "College Wallah");
