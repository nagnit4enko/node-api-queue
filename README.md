# node-api-queue

## Usage

```JS
var Queue = require('node-api-queue');
var queue = new Queue({interval: 1000, name: "name this interval"});
```

## Execution
```JS
queue.addTask(function(){
  // call to api, mb some func
});
```
