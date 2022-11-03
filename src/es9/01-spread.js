// Spread de objetos

const user = {
  username: 'varkoms',
  edad: 33,
  country: 'MX'
};

// Propagando todas las propiedades del objeto 'user' en constantes
const { username, ...values } = user;
console.log(username);
console.log(values);