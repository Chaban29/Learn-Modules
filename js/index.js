import { carsModels } from './vars.js';
import { BIRTHDAY_DATE } from './vars.js';
import { User } from './class.js';
import { sayBye, sayHi } from './vars.js';

console.log(sayHi('Hello'));
console.log(sayBye('Goodbye'));

carsModels.push('Fiat');
const user = new User('Roman', 23);
