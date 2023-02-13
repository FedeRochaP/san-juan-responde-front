import React from 'react'

// Styles
import style from './Form.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

import Congrats from '../Modals/Messages/Congrats'
import Error from '../Modals/Messages/Error'

export default function Form() {
     return (
          <div className='view'>
               <Header />
               <div className='container__user'>
                    <div className={style.form__number}>
                         <h3>Deja tus datos y participa del sorteo</h3>
                    </div>
                    <div className={style.form__inputs}>
                         <div className={style.form__inputbox}>
                              <input type="text" required />
                              <span>Ingresa tu nombre</span>
                         </div>
                         <div className={style.form__inputbox}>
                              <input type="text" required />
                              <span>Ingresa tu apellido</span>
                         </div>
                         <div className={style.form__inputbox}>
                              <input type="number" required />
                              <span>Ingresa tu teléfono</span>
                         </div>
                    </div>
                    <div className={style.form__next}>
                         <button>PARTICIPA NUEVAMENTE </button>
                    </div>

                    <Congrats />
                    <Error />

               </div>
               <Logos />
          </div>
     )
}
