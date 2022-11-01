import { getData } from "./api.js";

function solution() {
  return getData().then(movies => console.log(movies));
}

solution();