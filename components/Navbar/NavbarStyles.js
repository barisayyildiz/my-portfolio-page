import styled from 'styled-components'


export const Navbar = styled.header`
	width:100%;
	background-color: #222222;
	font-size: 24px;
	margin: 0px;
	padding: 1px;
	font-weight: 100;

	a{
		text-decoration: none;
		color: #ffffff;

		&:hover{
			color: #dddddd;
		}

	}

	ul{
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;

		li{
			margin: 0px 50px;
		}

	}

	@media (max-width: 540px) {
    display: none;
  }


`


