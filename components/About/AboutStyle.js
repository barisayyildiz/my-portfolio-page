import styled from "styled-components"

export const Button = styled.a`
	width: 100%;
	background-color: #BAC964;
	margin: 40px auto;
	padding: 15px;
	font-size: 1.5em;
	border-radius: 10px;
	display: block;
	color: #000;
	cursor: pointer;
	text-decoration: none;

`

export const AboutWrapper = styled.div`
	width: 60%;
	text-align: center;
	padding: 100px 0px;
	margin: 0px auto;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(1, 2fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;

	.div1 { 
		grid-area: 1 / 1 / 2 / 4;
		padding-bottom: 100px;
		h1{
			font-size: 36px;
			font-weight: 400;
		}
	}
	.div2 { 
		grid-area: 2 / 1 / 3 / 2;
		img{
			width: 80%;
		}
	}
	.div3 { 
		grid-area: 2 / 2 / 3 / 4;
		p{
			font-size: 1.7em;
			margin: 0px;
			text-align: left;
		}
	}

`

