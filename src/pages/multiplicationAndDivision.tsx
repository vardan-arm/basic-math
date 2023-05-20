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
  gap: 20px;
`;
const SingleMultiplicationStyled = styled(SingleMultiplication)`
  margin: 12px;
`
const SingleDivisionStyled = styled(SingleDivision)`
  margin: 12px;
`;
const ButtonStyled = styled.button`
  margin-top: 24px;
  padding: 8px 24px;
  cursor: pointer;
  font-weight: 600;
`;

const MultiplicationAndDivision = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mulOperandsCollection, setMulOperandsCollection] = useState<{ first: number, second: number }[]>([]);
  const [divOperandsCollection, setDivOperandsCollection] = useState<{ first: number, second: number }[]>([]);

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

    setMulOperandsCollection([...tempArr]);

    tempArr.length = 0;

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

    setDivOperandsCollection([...tempArr]);
  }, []);

  const handleSubmit = () => {
    setIsSubmitted(true);
  }

  return (
    <div>
      <OperationsContainer>
        <div>
          {mulOperandsCollection.map(({first, second}, index) => (
              <SingleMultiplicationStyled key={index}
                                          first={first}
                                          second={second}
                                          operation={Operation.Multiplication}
                                          isSubmitted={isSubmitted}
              />
            )
          )}
        </div>
        <div>
          {divOperandsCollection.map(({first, second}, index) => (
              <SingleDivisionStyled key={index}
                                    first={first}
                                    second={second}
                                    operation={Operation.Division}
                                    isSubmitted={isSubmitted}
              />
            )
          )}
        </div>
      </OperationsContainer>
      <ButtonStyled onClick={handleSubmit}>Check</ButtonStyled>
    </div>
  );
}

export default MultiplicationAndDivision;
