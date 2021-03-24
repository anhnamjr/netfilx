import React, { useState } from "react";

import {
  Container,
  Background,
  Logo,
  ButtonLink,
  Feature,
  Link,
  Text,
  FeatureCallOut,
  Group,
  Dropdown,
  Picture,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton
} from "./styles/header";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink ({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Feature = function  HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Group = function HeaderGroup ({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink ({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut ({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search Films and Series"
        active={searchActive}
      />
    </Search>
  );
};

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}
