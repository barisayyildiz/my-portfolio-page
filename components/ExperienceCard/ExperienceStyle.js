import styled from "styled-components";

export const EducationCardWrapper = styled.div`
	width: 100%;
	background-color: #333333;
	border-radius: 10px;
	padding: 5px;
	cursor: pointer;
	border: 1px solid #333333;
	transition: all 0.2s ease;

	&:hover{
		border: 1px solid #BAC964;
	}

	div{
		display: flex;
		justify-content: start;
		align-items: center;
		margin: 20px 0px;

		*{
			margin: 0px 5px;
		}
	}

	.header{
		font-weight:bold;
	}

	.header,
	.info{
		color: #BAC964;
	}

`
