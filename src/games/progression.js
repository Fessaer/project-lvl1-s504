import { makeGame } from '..';
import getRandomNum from '../helpers';

export default () => {
  // const getRandomProp = (object) => {
  //   const keys = Object.keys(object);
  //   return object[keys[getRandomNum(1, keys.length)]];
  // };

  // const makeProgression = (number1, number2) => {
  //   const progression = number1 - number2;
  //   const iter = (num1, num2, acc) => {
  //     if (acc.length === 10) {
  //       return acc;
  //     }
  //     const newAcc = acc.concat([num1, num2]);
  //     return iter(num1 + progression, num2 + progression, newAcc);
  //   };
  //   return iter(number1, number2, []);
  // };
  const makeProgression = (start, diff) => {
    const iter = (num, acc) => {
      if (acc.length === 10) {
        return acc;
      }
      const newAcc = acc.concat([num + diff]);
      return iter(newAcc[newAcc.length - 1], newAcc);
    };
    return iter(start + diff, [start]);
  };

  const gameData = () => {
    const { num1, num2, index } = {
      num1: getRandomNum(),
      num2: getRandomNum(),
      index: getRandomNum(0, 9),
    };

    const progression = makeProgression(num1, num2);
    const rightAnswer = progression[index];
    const expression = progression.map(el => (el === progression[index] ? '..' : el)).join(' ');
    return { expression, rightAnswer };
  };

  makeGame('What number is missing in the progression?', gameData);
};
