import React from 'react'

// Styles
import style from './Login.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

export default function LoginAdmin() {
     return (
          <div className='view'>
               <Header />
               <div className='container'>
                    <Logos />
                    <div className={style.login__title}>
                         <h2>Bienvenido al panel de Administrador</h2>
                    </div>
                    <div className={style.login__inputs}>
                         <div className={style.login__inputbox}>
                              <input type="number" name="" id="" required />
                              <span>Usuario Admin</span>
                         </div>
                         <div className={style.login__inputbox}>
                              <input type="password" required/>
                              <span>Clave</span>
                         </div>
                         <button>INGRESAR</button>
                    </div>
               </div>
          </div>
     )
}