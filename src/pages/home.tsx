import {Link} from "react-router-dom";
import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;
const ButtonStyled = styled.button`
  font-size: 24px;
  padding: 8px 16px;
  cursor: pointer;
`;
const Home = () => {
  return (
    <ContainerStyled>
      <Link to={'/category1'}>
        <ButtonStyled>Start</ButtonStyled>
      </Link>
    </ContainerStyled>
  )
}

export default Home;
