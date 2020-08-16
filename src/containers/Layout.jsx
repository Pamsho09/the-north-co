import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
const Layout = (    {children}) => {
    return (
        <div className='App'>   
          <Header/>
          {children}
            <Menu/>
       
        </div>
    )
}

export default Layout
