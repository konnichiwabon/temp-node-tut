const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
  console.log(`data received`)
}) //response is the name of the event 



customEmitter.emit('response')