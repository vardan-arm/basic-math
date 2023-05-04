import {AdditionAndDeductionExamplesCount} from "../constants.ts";
import {generateSimpleMultiplicationOperands} from "../utils/generateSimpleMultiplicationOperands.ts";
import {useEffect, useState} from "react";
import SingleMulAndDiv from "../components/singleMulAndDiv.tsx";
import {Operation} from "../enums.ts";

const MultiplicationAndDivision = () => {
  const [operandsCollection, setOperandsCollection] = useState<{ first: number, second: number }[]>([]);

  useEffect(() => {
    const tempArr: { first: number, second: number }[] = [];

    while (tempArr.length < AdditionAndDeductionExamplesCount) {
      const {firstOperand, secondOperand} = generateSimpleMultiplicationOperands();
      const isPairAlreadyAdded = tempArr.some(({
                                                 first,
                                                 second
                                               }) => first === firstOperand && second === secondOperand);

      if (!isPairAlreadyAdded) {
        tempArr.push({first: firstOperand, second: secondOperand})
      }
    }
    setOperandsCollection(tempArr);
  }, []);

  return (
    <div>
      <div>Simple examples {AdditionAndDeductionExamplesCount}</div>
      {operandsCollection.map(({first, second}, index) => (
          <SingleMulAndDiv key={index} first={first} second={second} operation={Operation.Multiplication} />
        )
      )}
    </div>
  );
}

export default MultiplicationAndDivision;
