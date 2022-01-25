import React from 'react'

import { educations, experiences } from '../../data/constants'

import { ExperienceWrapper } from './ExperienceStyle'

import { ExperienceCard, EducationCard } from '../ExperienceCard'

function index(){
	return(
		<ExperienceWrapper id="resume">
			<h1>
				My Resume
			</h1>
			<div className='resume-lists'>
				<div>
					<ul>
						<li>
							<h2>Education</h2>
						</li>
						{
							educations.map(education => {
								return(
									<li>
										<EducationCard education={education} />
									</li>
								)
							})
						}
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<h2>Experience</h2>
						</li>
						{
							experiences.map(experience => {
								return(
									<li>
										<ExperienceCard experience={experience}/>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</ExperienceWrapper>
	)
}


export default index;
