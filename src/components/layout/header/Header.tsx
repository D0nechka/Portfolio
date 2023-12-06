import { FC } from 'react'
import cls from './Header.module.scss'
import { NavLink } from '@/components/common/NavLink/NavLink'
import { navLinks } from '@/mock/router'

export const Header: FC = () => {
  return (
    <header className={cls.header}>
      <div className={cls.wrap}>
        <div className={cls.label}>Frontend Developer</div>
        <nav className={cls.nav}>
          {navLinks.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </nav>
      </div>
    </header>
  )
}
