import { Calendar } from 'tabler-icons-react';

const ResumeItem = () => {

}
const resume = {
  educations: [
    {
      date: "September 2019 - present",
      school: "Gebze Technical University",
      location: "Kocaeli, Turkey",
      major: "Computer Science and Engineering, Bachelor’s Degree",
      info: "GPA : 3.17",
    },
    {
      date: "February 2022 - June 2022",
      school: "Mendel University in Brno",
      location: "Brno, Czechia",
      major: "Computer Science and Engineering, Bachelor’s Degree",
      info: "Erasmus Exchange Student",
    }
  ],
  experiences: [
    {
      date: "July 2023 - October 2023",
      company: "NextLua",
      title: "Frontend Developer",
      location: "Istanbul, Turkey",
      info: "\
        Collaborated with the development team to create an interactive and dynamic admin dashboard using React.js and the KendoReact library for Minbee\
      ",
      keywords: [
        "React.js",
        "Redux",
        "CSS",
        "Tailwind",
        "Git",
        "Agile Methodologies",
        "Web Development",
      ],
    },
    {
      date: "August 2022 - May 2023",
      company: "Jotform",
      title: "Frontend Engineer",
      location: "Istanbul, Turkey",
      info: "\
        Reimplemented Jotform's old Import Data App using React.js, Redux, and Tailwind, resulting in improved performance and user interface\n\
        Collaborated with the Platform Team on Jotform's Wordpress and Salesforce integrations, utilizing React.js, Redux, CSS, PHP, and MySQL to achieve seamless integration and improve workflow\n\
        Conducted bug fixing and troubleshooting to ensure a smooth user experience\
      ",
      keywords: [
        "React.js",
        "Redux",
        "CSS",
        "Php",
        "MySQL",
        "Agile Methodologies",
        "Web Development",
      ],
    },
    {
      date: "February 2021 - October 2021",
      company: "TuvisAI",
      location: "Istanbul, Turkey",
      title: "FullStack Developer",
      info: "\
        Conducted fullstack development with React.js and Python with Django Rest Framework \n\
        Implemented CI/CD pipelines using GitHub Actions and AWS CodeDeploy, ensuring seamless deployments. \n\
        Leveraged AWS S3 and DynamoDB for storage and management. \n\
        Conducted unit and integration tests for REST APIs to maintain code quality and functionality \
      ",
      keywords: [
        "Python",
        "Django",
        "AWS",
        "DynamoDB",
        "Git",
        "SQL",
        "Agile Methodologies",
        "React.js",
        "Ant Design",
        "Web Development",
      ],
    },
    {
      date: "February 2021 - July 2021",
      company: "GTU AVES Team",
      title: "Software Team Member",
      info: "Worked as a fullstack developer, contributed to the\
        development of a live GPS navigation panel using React.js\
        and web sockets.\
        ",
      keywords: ["JavaScript", "WebSockets", "React.js", "Git", "Web Development"],
    },
    {
      date: "March 2021 - June 2021",
      company: "GTU C Laboratory",
      title: "Tutor",
      info: "Assisted freshman students in learning C programming",
      keywords: ["C"],
    },
    {
      date: "October 2020 - January 2021",
      company: "GTU BT",
      title: "JavaScript Tutor",
      info: "He gave JavaScript lessons from beginner level to moderate level.",
      keywords: ["JavaScript"],
    },
  ]
}

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
