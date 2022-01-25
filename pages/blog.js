import { user, projects } from '../data/constants'

// posts will be populated at build time by getStaticProps()
function Blog({ projects }) {
  return (
    <>
			<ul>
			{
				projects.map(project => {
					return(
						<div>
							<li>{project.name}</li>
							<img src={project.image}></img>
						</div>
					)
				})
			}
			</ul>
		</>
  )
}

export async function getStaticProps(){
	return{
		props:{
			projects
		}
	}
}


export default Blog
