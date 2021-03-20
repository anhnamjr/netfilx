import styled from "styled-components/macro"
import {Link as ReactRouterLink} from "react-router-dom"

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat; 

  @media (max-width: 1100px) {
    ${({dontShowOnSmallViewPort}) => (
      dontShowOnSmallViewPort && `background: none;`
    )}
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  width: 108px;
  height: 32px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    heigth: 45px;
    width: 167px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const FeatureCallOut = styled(Text)`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Link = styled.p`
  color: #fff;
  font-size: 20px;
  margin-right: 30px;
  font-weight: ${({active}) => (active ? "700" : "normal")};
  cursor: pointer;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.45);

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Picture = styled.button`
  background-image: url(${({src}) => src});
  background-size: contain;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 5px;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  width: 100px;
  top: 32px;
  right: 0;
  padding: 20px 10px;
  background-color: rgba(0,0,0,0.75);
  border: 1px solid #ccc;

  ${Picture} {
    margin-right: 10px;
  }

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  
  ${Group} {
    margin-bottom: 10px;
    
    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: center;
  position: relative;

  &:hover ${Dropdown} {
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
  }
`;

export const Search = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  position: relative;
  
  svg {
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  position: absolute;
  left: 10px;
  top: 5px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: none;

  img {
    filter: brightness(0) invert(1);
    width: 20px;
  }
`;

export const SearchInput = styled.input`
  margin-left: ${({active}) => active ? "10px" : "none"};
  padding: ${({active}) => active ? "0 10px 0 30px" : "0"};
  opacity: ${({active}) => active ? "1" : "0"};
  width: ${({active}) => active ? "200px" : "20px"};
  background: #44444459;
  color: white;
  border: 1px solid #fff;
  transition: width  0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 5px;
`;


