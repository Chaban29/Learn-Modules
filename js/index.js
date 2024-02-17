import months, { names } from './variables.js';
import { show, hi, bye } from './functions.js';
import * as vars from './variables.js';
import { User } from './classes.js';
import animalName from './functions.js';

console.log(names);

console.log(show(names[0]));

console.log(vars.isMarried);

console.log(hi());
console.log(bye());

const showUserInfo = new User('Roman', 'Chaban', 23);

console.log(showUserInfo);

console.log(months);

animalName('Nick');
