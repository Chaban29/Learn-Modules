const showUserName = (name) => {
  return `Hello ${name}!`;
};

const sayHi = () => 'Hi!';
const sayBye = () => "Bye!";

const animalName = (animalName) => alert(animalName);



export { showUserName as show };
export { sayHi as hi, sayBye as bye};
export { animalName as default};