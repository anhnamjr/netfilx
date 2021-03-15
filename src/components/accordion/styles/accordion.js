import styled from "styled-components/macro"

export const Title = styled.h1`
  font-size: 50px;
  color: white;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 815px;
  padding: 70px 45px;
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 4px;
  max-width: 670px;

  &:first-of-type {
    margin-top: 3em;
  }

`;

export const Header = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  background: #303030;
  margin-top: 5px;
  padding: 0.8em 2.2em 0.8em 1.2em;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  max-height: 1200px;
  transition: max-height .25s cubic-bezier(.5,0,.1,1);
  white-space: pre-wrap;
  user-select: none;
`;
