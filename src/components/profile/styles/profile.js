import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  height: 70vh;
`;

export const Title = styled.h1`
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 48px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
`;

export const Picture = styled.img`
  max-width: 150px;
  width: 100%;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover {
    font-weight: bold;
    color: $e5e5e5;
  }
`;

export const Item = styled.li`
  text-align: center;
  max-width: 200px;
  max-height: 200px;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: #fff;
  } 

  &:last-of-type {
    margin-right: 0;
  }
`;

