import Link from 'next/link'
import React from 'react'

import { Hero } from './HomeStyles'
import { user } from '../../data/constants'
import { Linkedin, Github, Medium, CV } from '../SocialMediaIcons';

function Home(){
	return(
		<Hero>
			<p>Hello, I'm</p>
			<p>{user.firstname} {user.lastname}</p>
			<ul>
				<li>
					<Link href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-ayy%C4%B1ld%C4%B1z-627704174/">
						<a>
							<Linkedin/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://github.com/barisayyildiz">
						<a>
							<Github/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://medium.com/@99ayyldzbaris99">
						<a>
							<Medium/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="">
						<a>
							<CV/>
						</a>
					</Link>
				</li>
			</ul>
		</Hero>
	)

}

export default Home
