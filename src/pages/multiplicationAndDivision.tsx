import {AdditionAndDeductionExamplesCount} from "../constants.ts";
import {generateSimpleMultiplicationOperands} from "../utils/generateSimpleMultiplicationOperands.ts";
import {useEffect, useState} from "react";
import SingleMultiplication from "../components/singleMultiplication.tsx";
import {Operation} from "../enums.ts";
import styled from "styled-components";
import SingleDivision from "../components/singleDivision.tsx";

const OperationsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 120px;
`;
const SingleMultiplicationStyled = styled(SingleMultiplication)`
  margin: 12px;
`
const SingleDivisionStyled = styled(SingleDivision)`
  margin: 12px;
`;

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
    <OperationsContainer>
      <div>
        {operandsCollection.map(({first, second}, index) => (
            <SingleMultiplicationStyled key={index} first={first} second={second} operation={Operation.Multiplication} />
          )
        )}
      </div>
      <div>
        {operandsCollection.map(({first, second}, index) => (
            <SingleDivisionStyled key={index} first={first} second={second} operation={Operation.Division} />
          )
        )}
      </div>
    </OperationsContainer>
  );
}

export default MultiplicationAndDivision;
