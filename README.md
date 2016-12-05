### osx-telegram

```js
const telegram = require('osx-telegram');

telegram.getStatus().then(status => {
  console.log(status.isRunning);
  console.log(status.currentChatName);
});
```
