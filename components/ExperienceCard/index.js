import React from 'react'
import { Date } from '../SocialMediaIcons'

import { EducationCardWrapper } from './ExperienceStyle'

export function ExperienceCard({experience}){
	return(
		<EducationCardWrapper>
			<div>
				<Date/>
				<p>{experience.date}</p>
			</div>
			<div className='header'>
				<p>{experience.company}</p>
			</div>
			<div className='info'>
				<p>{experience.title}</p>
			</div>
			<div className='info'>
				<p>{experience.info}</p>
			</div>
		</EducationCardWrapper>
	)
}

export function EducationCard({education}){
	return(
		<EducationCardWrapper>
			<div>
				<Date/>
				<p>{education.date}</p>
			</div>
			<div className='header'>
				<p>{education.school}</p>
			</div>
			<div className='info'>
				<p>{education.major}</p>
			</div>
			<div className='info'>
				<p>{education.info}</p>
			</div>
		</EducationCardWrapper>
	)
}
