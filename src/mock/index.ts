import { Project } from '@/types'

export const aboutInfo = [
  {
    number: '01',
    title: '# Tech Stack',
    description: 'Write in TypeScript and utilize React to craft interactive user interfaces, employing Redux for effective state management. Additionally, I incorporate technologies such as Zustand and Next.js to enhance the overall development experience.',
  },
  {
    number: '02',
    title: '# Often use',
    description:
      'These are the libraries, technologies and tools that I use a lot in projects.             Next.js / Redux / Zustand / SASS  / Tailwind / Webpack / Typescript / Axios / JavaScript  / Git',
  },
  {
    number: '03',
    title: '# Skills',
    description:
      'Specialize in SPA development using React and NextJS. I am confident in JavaScript and TypeScript, and my knowledge of React 18 covers basic and advanced concepts of the technology. I know how to write unit tests, optimize applications, interact with remote api services via HTTP, AJAX, Websockets providing data processing.',
  },
  {
    number: '04',
    title: '# Learning',
    description:
      "I have a keen interest for frontend and backend development. Creating intuitive user interfaces using modern technologies is something I find truly engaging. Additionally, I've been exploring mobile development, eager to further develop my skills in this area. Beyond development.",
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cloud store',
    stack: ['TypeScript', 'NextJs', 'Redux'],
    description: 'A cloud store where you can collect your files.',
    // demo: 'https://snapgram-13.vercel.app/',
    code: 'https://github.com/D0nechka/cloud-storage',
  },
  {
    id: 2,
    title: 'Kanban board',
    stack: ['TypeScript', 'NextJS 14', 'Zustand'],
    description: 'A project where you can create tasks and filter by boards.',
    demo: 'https://kanban-board-d0nechka.vercel.app/',
    code: 'https://github.com/D0nechka/Kanban-board',
  },
  {
    id: 3,
    title: 'Step form',
    stack: ['TypeScript', 'React', 'Redux-toolkit', 'React-hook-form', 'yup'],
    description: 'Step form for submiting on server.',
    code: 'https://github.com/D0nechka/cloud',
  },
  {
    id: 4,
    title: 'Music App',
    stack: ['TypeScript', 'React', 'Redux-toolkit'],
    description: 'A project where you can listen to music.',
    code: 'https://github.com/D0nechka/Diploma',
  }
]
