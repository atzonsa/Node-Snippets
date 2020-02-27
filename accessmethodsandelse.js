const base = require('./basemethodandelse');
console.log(base.sum(400,600));
console.log(base.name);
console.log(base.defaultBal);
console.log("Mr." + base.name + "'s default balance is " + base.defaultBal);
console.log(new base.DemoClass());