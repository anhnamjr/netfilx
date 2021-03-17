import React from 'react'
import { Base, Container, Error, Input, Link, SmallText, Submit, Text, Title } from './styles/form'

export default function Form({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Form.Base = function({children, ...restProps}) {
  return <Base {...restProps}>{children}</Base>
}
Form.Title = function({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}
Form.Error = function({children, ...restProps}) {
  return <Error {...restProps}>{children}</Error>
}

Form.Text = function({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Form.SmallText = function({children, ...restProps}) {
  return <SmallText {...restProps}>{children}</SmallText>
}

Form.Input = function({children, ...restProps}) {
  return <Input {...restProps} />
}

Form.Link = function({to, ...restProps}) {
  return <Link to={to} {...restProps} />
}

Form.Submit = function({children, ...restProps}) {
  return <Submit {...restProps}>{children}</Submit>
}
