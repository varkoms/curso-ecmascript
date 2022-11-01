function solution(json1 = { name: "Mr. Michi", food: "Pescado" }, json2 = { age: 12, color: "Blanco" }) {
  return { ...json1, ...json2 };
}

// Should return default JSON objects merged
console.log(solution());

// Should return JSON objects merged
console.log(solution({ name: "Atena", food: "Leche" }, { age: 2, color: "Cafe" }));

// Should return JSON object merged with default JSON 2
console.log(solution({
  name: "Atena",
  food: "Leche"
}));

// Should return JSON object merged with default JSON 1
console.log(solution(undefined, { age: 2, color: "Cafe" }));