import { Calendar } from 'tabler-icons-react';
import { resume } from '@/constants';

export default function Resume() {
  return (
    <main className="mx-auto px-4 py-10 md:px-6 lg:px-8 min-h-[75vh] animation-left">
      <div className="flex flex-col gap-2">
        <h1 className='text-3xl'>My Resume</h1>
        <div className="flex gap-4">
          <div className='flex flex-col gap-4 flex-1'>
            <h2 className='text-xl'>Education</h2>
            <ul className='flex flex-col mt-2 gap-2'>
              {
                resume.educations.map(education => (
                  <li className='flex flex-col gap-2 border rounded-large p-3 cursor-pointer hover:border-yellow-300 transition-all'>
                    <div className='flex gap-2'>
                      <Calendar/>
                      {education.date}
                    </div>
                    <div className='flex justify-between'>
                      <p>{education.school}</p>
                      <p>{education.location}</p>
                    </div>
                    <div>
                      {education.major}
                    </div>
                    <div>
                      {education.info}
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='flex flex-col gap-4 flex-1'>
            <h2 className='text-xl'>Experience</h2>
            <ul className='flex flex-col mt-2 gap-2'>
              {
                resume.experiences.map(experience => (
                  <li className='flex flex-col gap-2 border rounded-large p-3 cursor-pointer hover:border-yellow-300 transition-all'>
                    <div className='flex gap-2'>
                      <Calendar/>
                      {experience.date}
                    </div>
                    <div className='flex justify-between'>
                      <p>{experience.company}</p>
                      <p>{experience.location}</p>
                    </div>
                    <div>
                      {experience.title}
                    </div>
                    <div>
                      {experience.info}
                    </div>
                    <div>
                      <ul className='flex gap-2 flex-wrap'>
                        {experience.keywords.map(keyword => (
                          <li className="border p-2 rounded-2xl">{keyword}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
