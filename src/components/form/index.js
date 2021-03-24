import React from 'react'
import { Base, Container, Error, Input, Link, SmallText, Submit, Text, Title } from './styles/form'

export default function Form({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({children, ...restProps}) {
  return <Base {...restProps}>{children}</Base>
}
Form.Title = function FormTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}
Form.Error = function FormError({children, ...restProps}) {
  return <Error {...restProps}>{children}</Error>
}

Form.Text = function FormText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Form.SmallText = function FormSmallText({children, ...restProps}) {
  return <SmallText {...restProps}>{children}</SmallText>
}

Form.Input = function FormInput({children, ...restProps}) {
  return <Input {...restProps} />
}

Form.Link = function FormLink({to, ...restProps}) {
  return <Link to={to} {...restProps} />
}

Form.Submit = function FormSubmit({children, ...restProps}) {
  return <Submit {...restProps}>{children}</Submit>
}
