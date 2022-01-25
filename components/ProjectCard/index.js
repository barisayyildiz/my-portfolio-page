import React from 'react';
import Link from 'next/link';
import { CardWrapper } from './CardStyles'
import { Code, Demo } from '../SocialMediaIcons'

function Card({project}){
	console.log(project)
	return(
		<CardWrapper>
			<img src={project.image}></img>
			<div className='project_info'>
				<p>{project.name}</p>
				<div className='links'>
					<Link href={project.code}>
						<a>Code</a>
					</Link>
					{
						project.demo && (
							<Link href={project.demo}>
								<a>Demo</a>
							</Link>
						)
					}
				</div>
			</div>
		</CardWrapper>
	)
}

export default Card
