import { useRouter } from "next/router"

export const Navbar = () => {
  const router = useRouter();  
  const tabs = [
    {
      label: 'About',
      link: '/'
    },
    {
      label: 'Projects',
      link: '/projects'
    },
    {
      label: 'Resume',
      link: '/resume'
    }
  ]
  
  return (
    <nav className="flex justify-center py-3">
      <ul className="flex gap-7">
        {tabs.map(({link, label}) => (
          <li className={`
            text-xl 
            cursor-pointer
            border-transparent
            ${router.pathname === link ? 'border-b-yellow-300' : ''}
            border-2
            hover:border-b-yellow-300 
            hover:border-2
            transition-all
          `}>
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
