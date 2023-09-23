import RepoCard from "react-repo-card";
import { repositories } from "@/constants";

export default function Projects(props: null) {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-20 md:px-6 lg:px-8 min-h-[75vh]">
      <div className='flex flex-col gap-2 animation-left flex-wrap'>
        <h1 className="text-2xl animation-left font-bold">Open Source Projects</h1>
        <div className='flex flex-col gap-1'>
          {
            repositories.map(repository => (
              <RepoCard username="barisayyildiz" repository={repository}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 28800, // re-render in each 8 hours
  }
}
