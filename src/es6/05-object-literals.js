// ENHANCED OBJECT LITERALS

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    uId
  }
}

console.log(newUser("Cesar", 33, "MX", 1));