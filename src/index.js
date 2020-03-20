import React from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";
import { styled, createGlobalStyle } from "styled-components";
import "Styles/fonts.scss";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  vertical-align: top;
  outline: none;
}

body {
  margin: 0;
  font-family: Arial, Tahoma, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing:-1px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

fieldset{
  border: 0
}


`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById("root")
);
