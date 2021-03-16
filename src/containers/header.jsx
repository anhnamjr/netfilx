import React from 'react'
import * as ROUTE from "../constants/routes"
import { Header } from "../components"

export function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTE.HOME} alt="Netflix" src="/images/logo.svg" />
        <Header.ButtonLink to={ROUTE.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
