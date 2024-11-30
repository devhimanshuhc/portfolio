import { SiGithub, SiLinkedin, SiInstagram, SiX } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

export const contactMethods = [
  {
    name: 'GitHub',
    href: 'https://github.com/devhimanshuhc',
    icon: SiGithub,
    color: 'hover:text-[#2ea44f]'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/himanshu-chauhan-3b47a7220/',
    icon: SiLinkedin,
    color: 'hover:text-[#0077b5]'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hiimanshu.chauhan/',
    icon: SiInstagram,
    color: 'hover:text-[#e4405f]'
  },
  {
    name: 'Twitter',
    href: 'https://x.com/devhimanshuhc',
    icon: SiX,
    color: 'hover:text-neutral-50'
  },
  {
    name: 'Email',
    href: 'mailto:devhimanshuhc@gmail.com',
    icon: MdEmail,
    color: 'hover:text-[#ea4335]'
  }
]
