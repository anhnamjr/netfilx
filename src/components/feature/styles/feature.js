import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 8px solid #222;
  padding: 165px 45px;
`;
export const Title = styled.p`
  color: #fff;
  font-size: 50px;
  font-weight: bolder;
  line-height: normal;
  margin: auto;
  max-width: 640px;

  @media (max-width: 640px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.p`
  color: #fff;
  line-height: normal;
  font-size: 26px;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;