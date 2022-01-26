import Link from 'next/link'
import React from 'react'
import { projects } from '../../data/constants'
import { Code, Demo } from '../SocialMediaIcons';
import Card from '../ProjectCard'
import { ProjectsWrapper } from './ProjectStyles'

import { Header } from '../../styles/GlobalStyles'

function Projects(){
	return(
		<ProjectsWrapper id="projects">
			<Header>Projects</Header>
			<div className='projects_grid'>
				{
					projects.map((project) => {
						return(
							<Card project={project}></Card>		
						)
					})
				}
			</div>
		</ProjectsWrapper>
	)
}

export default Projects
