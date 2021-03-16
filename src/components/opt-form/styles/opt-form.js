import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const Input = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 450px;
  border: 0;
  height: 70px;
  box-sizing: border-box;
`;

export const Button  = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  border: none;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 26px;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
  }

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    margin-left: 10px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: #fff;
  text-aligh: center;
  
  @media (max-width: 680px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
