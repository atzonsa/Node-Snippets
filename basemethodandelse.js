const sum = (num1,num2) => num1 + num2;
const name = 'Ankit';
const defaultBal = 10000;
class DemoClass{
    constructor()
    {
        console.log('Object created successfully');
    }
}

module.exports.sum = sum;
module.exports.name = name;
module.exports.defaultBal = defaultBal;
module.exports.DemoClass = DemoClass;