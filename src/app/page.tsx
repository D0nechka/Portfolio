'use client'
import { motion } from 'framer-motion'
import { ArrowIconOne } from '@/components/icons/ArrowIconOne'
import cls from '@/styles/page.module.scss'
import { PAGE_TRANSITION } from '@/constants'
import Link from 'next/link'

export default function Home() {
  return (
    <motion.section
      className={cls.section}
      variants={PAGE_TRANSITION}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <div className={cls.introduce}>
        <div className={cls.title}>Alekseev Danil</div>
        <div className={cls.text}>
          <p># I am a frontend developer with 1 year of experience</p>
          <p># Specializing on creating intuitive UI, application functionality and UX optimization</p>
        </div>

        <div className={cls.info}>
          <Link target='_blank' href='https://t.me/dani1ok'>t.me/dani1ok</Link>
          <Link target='_blank' href='https://github.com/D0nechka'>github.com/D0nechka</Link>
          <Link target='_blank' href='mailto:dani.3098@mail.ru'>dani.3098@mail.ru</Link>
          <Link target='_blank' href='https://ekaterinburg.hh.ru/resume/1db3a0a3ff0bd1584f0039ed1f41547162444e'>hh/resume</Link>
        </div>
      </div>

      <div className={cls.stack}>
        <div className={cls.top}>
          <span>
            I mostly write in TypeSript with React for UI development and Next.JS as main framework.
          </span>
          <span>For state management I use Context API, Redux & Zustand</span>
        </div>
        <h2 className={cls.title}>Technology Stack</h2>
      </div>

      <div className={cls.about}>
        <Link className={cls.link} href='/about'>
          <div className={cls.top}>
            <div className={cls.pretitle}>
              <span>discover</span>
              <span>my history</span>
            </div>
            <ArrowIconOne />
          </div>
          <h2 className={cls.title}>About Me</h2>
        </Link>
      </div>

      <div className={cls.portfolio}>
        <Link className={cls.link} href='/portfolio'>
          <div className={cls.top}>
            <div className={cls.pretitle}>
              <span>View</span>
              <span>my projects</span>
            </div>
            <ArrowIconOne />
          </div>
          <h2 className={cls.title}>Portfolio</h2>
        </Link>
      </div>
    </motion.section>
  )
}
