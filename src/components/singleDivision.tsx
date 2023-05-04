import {Operation} from "../enums.ts";
import styled from "styled-components";
import {useEffect, useState} from "react";

interface Args {
  first: number;
  second: number;
  operation: Operation;
  isSubmitted: boolean;
  className?: string;
}

// TODO: this component is very similar to `singleMultiplication`, combine them into one
const ContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`
const ResponseFieldStyled = styled.input`
  width: 50px;
  text-align: center;
  border: ${(props: Pick<Args, 'isSubmitted'>) => props.isSubmitted ? '1px solid red' : 'none'};
`
const CorrectAnswer = styled.div`
  width: 58px;
`;

const SingleDivision = ({first, second, operation, isSubmitted, className}: Args) => {
  const [multiplicationResult] = useState(first * second);

  const [answer, setAnswer] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    setIsAnswerCorrect(multiplicationResult / first === answer);
  }, [answer, first, multiplicationResult]);

  return (
    <ContainerStyled className={className}>
      <div>{multiplicationResult}</div>
      <div>{operation}</div>
      <div>{first}</div>
      <div>=</div>
      {isAnswerCorrect && isSubmitted
        ? <CorrectAnswer>{answer}</CorrectAnswer>
        : (<ResponseFieldStyled isSubmitted={isSubmitted}
                                type={"number"}
                                onChange={(e) => {
                                  setAnswer(parseInt(e.target.value));
                                }}
        />)
      }
    </ContainerStyled>
  )
}

export default SingleDivision;
