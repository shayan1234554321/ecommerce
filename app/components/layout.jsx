import React from 'react'
import Head from 'next/head' 
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <div className='leyout' >
      <Head>
        <title>Shayan Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container' >
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout