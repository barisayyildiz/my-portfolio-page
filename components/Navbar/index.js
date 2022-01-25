import Link from 'next/link'
import React from 'react'

import { Navbar } from './NavbarStyles'

function NavBar(){
	return(
		<Navbar>
			<ul>
				<li>
					<Link href="#home">Home</Link>
				</li>
				<li>
					<Link href="#projects">Projects</Link>
				</li>
				<li>
					<Link href="#resume">Resume</Link>
				</li>
				<li>
					<Link href="#about">About</Link>
				</li>
			</ul>
		</Navbar>
	)

}

export default NavBar
