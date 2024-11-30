import { MdWeb, MdDesktopMac, MdBrush, MdCode } from 'react-icons/md'
import { 
  SiNextdotjs, 
  SiReact, 
  SiSvelte, 
  SiThreedotjs,
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiTauri,
  SiTailwindcss,
  SiShadcnui,
  SiChakraui,
  SiBootstrap,
  SiBlockchaindotcom,
  SiSolidity,
  SiUnrealengine
} from 'react-icons/si'

export const skills = [
  {
    category: "Frontend",
    categoryIcon: MdWeb,
    description: "Building modern web applications with cutting-edge frameworks",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Svelte", icon: SiSvelte },
      { name: "Three.Js", icon: SiThreedotjs }
    ]
  },
  {
    category: "Backend & Desktop",
    categoryIcon: MdDesktopMac,
    description: "Developing robust server-side and desktop applications",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSql", icon: SiPostgresql },
      { name: "Electron/Tauri", icon: SiTauri }
    ]
  },
  {
    category: "UI Frameworks",
    categoryIcon: MdBrush,
    description: "Crafting beautiful user interfaces with modern CSS frameworks",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Bootstrap", icon: SiBootstrap }
    ]
  },
  {
    category: "Technologies",
    categoryIcon: MdCode,
    description: "Implementing advanced technical solutions",
    items: [
      { name: "Blockchain", icon: SiBlockchaindotcom },
      { name: "Smart Contracts", icon: SiSolidity },
      { name: "Unreal Engine", icon: SiUnrealengine },
    ]
  }
]
