const moment = require('moment');
var createdAt = 1234;
var date = moment(createdAt);
var someTimestamp = moment().valueOf();
console.log(someTimestamp);
date.add(1, 'year')
console.log(date.format("h:mm a"))

// 10:35 am