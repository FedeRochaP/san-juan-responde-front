import React from 'react'

// Styles
import style from './Login.module.css'

// Components
import Header from '../Header/Header'

// Image
import logoCompleto from '../../assets/logoCompleto.svg'

export default function LoginUser() {
     return (
          <div className='view'>
               <Header />
               <div className='container'>
                    <div className=''>
                         <img src={logoCompleto} alt="" />
                    </div>
               </div>
          </div>
     )
}
