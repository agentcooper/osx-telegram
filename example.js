const telegram = require('./');

telegram.getStatus().then(status => {
  console.log(status.isRunning);
  console.log(status.currentChatName);
});
