import "core-js";
import GameSavingLoader from "./classes/GameSavingLoader.js";

console.log(GameSavingLoader.load());

GameSavingLoader.load().then(
  (saving) => {
    return saving;
  },
  (error) => {
    return error;
  },
);
