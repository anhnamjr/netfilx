import styled from "styled-components/macro"
import {Link as ReactRouterLink} from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  margin: auto;
  max-width: 450px;
  width: 100%;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;
export const Title = styled.h1`
  color: #fff;
`;
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;
export const SmallText = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;
export const Base = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Input = styled.input`
  display: block;
  margin: 5px 0;
  min-height: 50px;
  border-radius: 4px;
  padding: 0 20px;
  border: 0;
  background: #333;
  color: #fff;
  
  &:last-of-type {
    margin-bottom: 30px;
  }

  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  min-height: 50px;
  background: #e50914;
  color: #fff;
  font-weight: bolder;
  border-radius: 4px;
  font-size: 16px;
  border: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;