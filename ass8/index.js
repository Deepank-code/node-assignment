const event = require("events");
const eventEmitter = new event();

eventEmitter.on("subscribe", () => {
  console.log("User has successfully Subscribed to this channel");
});

eventEmitter.emit("subscribe");
