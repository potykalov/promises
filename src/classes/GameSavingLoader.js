import json from "../modules/parser.js";
import read from "../modules/reader.js";

class GameSavingLoader {
  static load() {
    return read().then((data) => {
      return json(data);
    });
  }
}

export default GameSavingLoader;
