import styled from "styled-components"

export const CardWrapper = styled.div`
	width: 100%;
	cursor: pointer;
	
	img{
		width: 100%;
	}

	a{
		text-decoration: none;
		color: white;
	}

	position: relative;

	&:hover{
		.project_info{
			opacity: 0.7;
		}
	}

	.project_info{
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: #222222;
		opacity: 0;
		transition: all 0.5s;
		padding-bottom: 50px;

		display: grid;
		justify-content: center;
		align-items: center;

		p{
			font-size:2em;
		}

		.links{
			font-size: 2em;
			a{
				margin: 0px 20px;
			}
		}

	}

`


