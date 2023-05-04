import {Operation} from "../enums.ts";
import styled from "styled-components";

interface Args {
  first: number;
  second: number;
  operation: Operation;
  className?: string;
}

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`
const ResponseFieldStyled = styled.input`
  width: 50px;
  text-align: center;
`

const SingleDivision = ({first, second, operation, className}: Args) => {
  const multiplicationResult = first * second;

  return (
    <ContainerStyled className={className}>
      <div>{multiplicationResult}</div>
      <div>{operation}</div>
      <div>{first}</div>
      <div>=</div>
      <ResponseFieldStyled type={"number"} />
    </ContainerStyled>
  )
}

export default SingleDivision;
