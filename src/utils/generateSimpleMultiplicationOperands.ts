import {generateRandomNumberBetweenTwoAndNine} from "./generateRandomNumberBetweenTwoAndNine.ts";

export const generateSimpleMultiplicationOperands = () => {
  const firstOperand = generateRandomNumberBetweenTwoAndNine();
  const secondOperand = generateRandomNumberBetweenTwoAndNine();

  return {firstOperand, secondOperand};
}
