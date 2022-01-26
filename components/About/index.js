import React from 'react';

import { user } from '../../data/constants.js'
import { AboutWrapper, Button } from './AboutStyle'

function About(){
	return(
		<AboutWrapper id="about">
			<div class="div1">
				<h1>
					About Me
				</h1>
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
