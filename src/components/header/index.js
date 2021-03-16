import React from 'react'

import { Container, Background, Logo, ButtonLink } from "./styles/header"
import { Link as ReactRouterLink } from "react-router-dom"

export default function Header({bg = true, children, ...restProps}) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Header.ButtonLink = function({to, children, ...restProps}) {
  return <ButtonLink to={to} {...restProps}>{children}</ButtonLink>
}

Header.Logo = function({to, ...restProps}) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}
