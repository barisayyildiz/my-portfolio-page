import { BrandLinkedin, BrandGithub, BrandMedium, World, FileText, Mailbox } from 'tabler-icons-react';

export default function Home() {
  const links = [
    {
      type: 'social',
      icon: <BrandLinkedin size={48} />,
      link: 'https://www.linkedin.com/in/barisayyildiz/'
    },
    {
      type: 'social',
      icon: <BrandGithub size={48} />,
      link: 'https://github.com/barisayyildiz'
    },
    {
      type: 'social',
      icon: <BrandMedium size={48} />,
      link: 'https://medium.com/@99ayyldzbaris99',
    },
    {
      type: 'social',
      icon: <World size={48} />,
      link: '/'
    },
    {
      type: 'file',
      icon: <FileText size={48}/>,
      link: '/Barış_Ayyıldız_CV.pdf/'
    },
    {
      type: 'email',
      icon: <Mailbox size={48} />,
      link: 'aayyildizbaris@gmail.com'
    },
  ]

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-20 md:px-6 lg:px-8 min-h-[75vh]">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl animation-left font-bold">Hello 👋</h1>
        <h2 className="text-4xl animation-right">My name is <span className="font-bold">Barış Ayyıldız</span></h2>
        <p className="text-2xl animation-left leading-relaxed">
          An enthusiastic 
          <span className="font-bold"> software engineer</span> living in 
          <span className="font-bold"> Istanbul, Turkey</span>
          <br />
          Feel free to contact with me
        </p>
        <ul className='flex'>
          {
            links.map(({type, link, icon}) => {
              if(type === 'social') {
                return (
                  <li className='cursor-pointer'>
                    <a href={link} target='_blank'>
                    {icon}
                    </a>
                  </li>
                );
              } else if(type === 'email') {
                return (
                  <li className='cursor-pointer'>
                    <a href={"mailto:" + link} target='_blank'>
                      {icon}
                    </a>
                  </li>
                )
              } else if(type === 'file') {
                return (
                  <li>
                    <a href={link} download={true}>
                      {icon}
                    </a>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    </main>
  )
}
