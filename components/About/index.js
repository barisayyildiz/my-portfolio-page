import React from 'react';

import { user } from '../../data'
import { AboutWrapper, Button } from './AboutStyle'

import { Header } from '../../styles/GlobalStyles'

function About(){
	return(
		<AboutWrapper id="about">
			<div class="div1">
				<Header>
					About Me
				</Header>
			</div>
			<div class="div2">
				<img src="/baris.jpg/"></img>
			</div>
			<div class="div3">
				<p>
					{user.motivation}
				</p>
				<Button href="/mycv.pdf/" download={true}>
					Download CV
				</Button>
			</div>
		</AboutWrapper>
	)
}

export default About;
