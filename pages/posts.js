import Link from 'next/link'

export default function Posts(){
	return (
		<>
			<ul>
					<li>Post-1</li>
					<li>Post-2</li>
					<li>Post-3</li>
				</ul>
				<Link href="/">
					Home Page
				</Link>
		</>
	)
}

