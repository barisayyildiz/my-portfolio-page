import styled, { createGlobalStyle } from "styled-components";

export const Header = styled.h1`
	font-size: 36px;
	font-weight: 400;
`

const GlobalStyles = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
			Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
			sans-serif;
		background-color: #222222;
		color: #ffffff;
		scroll-behavior: smooth;
	}

	ul{
		list-style: none;
	}

	* {
		box-sizing: border-box;
	}
`

export default GlobalStyles
