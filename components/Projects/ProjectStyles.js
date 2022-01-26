import styled from "styled-components";

export const ProjectsWrapper = styled.div`
	width: 100%;
	text-align: center;
	padding: 100px 50px;
	.projects_grid{
		column-count: 3;
  	column-gap: 10px;
	}

	@media (max-width: 768px) {
    .projects_grid{
			column-count: 2;
			column-gap: 10px;
		}
  }

	@media (max-width: 540px) {
    .projects_grid{
			column-count: 1;
			column-gap: 0px;
		}
  }


`


