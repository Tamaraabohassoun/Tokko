import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>

        <main className='pt-20'>
        {
            children
        }
        </main>
        <Footer/>
        
    </div>
  )
}

export default Layout