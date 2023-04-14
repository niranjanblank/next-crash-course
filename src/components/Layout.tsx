import React, { FC } from 'react'
import { ReactNode } from 'react'
import Nav from './Nav'
import { Header } from './Header'
type Props = {
    children?: ReactNode
}

export const Layout: FC<Props> = ({children}) => {
  return (
    <div>
        <Nav/>
        <Header/>
        <div className='flex justify-center'>
           
            {children}
        </div>
    </div>
  )
}