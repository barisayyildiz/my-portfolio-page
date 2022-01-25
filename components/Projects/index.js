import Link from 'next/link'
import React from 'react'
import { projects } from '../../data/constants'
import { Code, Demo } from '../SocialMediaIcons';
import Card from '../Card'
import { ProjectsWrapper } from './ProjectStyles'


function Projects(){
	return(
		<ProjectsWrapper id="projects">
			<h1>Projects</h1>
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
