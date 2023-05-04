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

const ContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
const ResponseFieldStyled = styled.input`
  width: 50px;
  text-align: center;
  border: ${(props: Pick<Args, 'isSubmitted'>) => props.isSubmitted ? '1px solid red' : 'none'};
`;
const CorrectAnswer = styled.div`
  width: 58px;
`;

const SingleMultiplication = ({first, second, operation, isSubmitted, className = ''}: Args) => {
  const [answer, setAnswer] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    setIsAnswerCorrect(first * second === answer);
  }, [answer, first, second]);

  return (
    <ContainerStyled className={className}>
      <div>{first}</div>
      <div>{operation}</div>
      <div>{second}</div>
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

export default SingleMultiplication;
