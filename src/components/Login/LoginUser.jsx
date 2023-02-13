import React from 'react'

// Styles
import style from './Login.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

export default function LoginUser() {
     return (
          <div className='view'>
               <Header />
               <div className='container'>
                    <Logos />
                    <div className={style.login__title}>
                         <h2>Bienvenidos</h2>
                         <p>Ingresa tu DNI y comenzemos con el juego </p>
                    </div>
                    <div className={style.login__inputs}>
                         <div className={style.login__inputbox}>
                              <input type="number" name="" id="" required />
                              <span>Ingresa tu DNI sin puntos</span>
                         </div>
                         <button>INGRESAR</button>
                    </div>
               </div>
          </div>
     )
}
