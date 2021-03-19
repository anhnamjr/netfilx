import React from "react"
import {Container, Title, List, Item, Name, Picture} from "./styles/profile"

export default function Profile({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Profile.Title = function({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Profile.List = function({children, ...restProps}) {
  return <List {...restProps}>{children}</List>
}

Profile.User = function({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>
}

Profile.Name = function({children, ...restProps}) {
  return <Name {...restProps}>{children}</Name>
}

Profile.Picture = function({src, ...restProps}) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`} />
}