import possibleWins from "../data/possibleWins";

const winChecker = (inputString) => {
  let won = false;
  for (let i = 0; i < possibleWins.length; i++) {
    won =
      inputString.includes(possibleWins[i][0]) &&
      inputString.includes(possibleWins[i][1]) &&
      inputString.includes(possibleWins[i][2]);

    if (won) {
      return won;
    }
  }
  return won;
};

export default winChecker;
