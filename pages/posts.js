import Link from 'next/link'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Projects from '../components/Projects'
import ResumeLayout from '../components/ResumeLayout'
import About from '../components/About'

export default function Posts(){
	return (
		<>
			<Navbar></Navbar>
			<Home></Home>
			<Projects></Projects>
			<ResumeLayout></ResumeLayout>
			<About></About>
		</>
	)
}

