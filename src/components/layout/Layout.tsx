'use client'
import { FC, PropsWithChildren } from 'react'
import cls from './Layout.module.scss'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id='__layout' className={cls.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
