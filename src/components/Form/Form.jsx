import React from 'react'

// Styles
import style from './Form.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

import Congrats from '../Modals/Messages/Congrats'
import Error from '../Modals/Messages/Error'
// Images
import expansion from '../../assets/expansionProductiva.svg'

export default function Form() {

     return (
          <div className='view'>
               <Header />
               <div className='container__user'>
                    <div className={style.form__container}>
                         <div className={style.form__data}>
                              <div className={style.form__title}>
                                   <h3>Antes de jugar, completa los siguientes datos</h3>
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
                                        <span>Ingresa tu celular</span>
                                   </div>
                                   <div className={style.form__inputbox}>
                                        <select name="" id="">
                                             <option value="0" disabled selected>Selecciona tu departamento</option>
                                        </select>
                                   </div>
                              </div>
                         </div>
                         <div className={style.form__btn}>
                              <img src={expansion} alt="" />
                              <button className='btn btn__gris'>GUARDAR</button>
                         </div>
                    </div>

                    {/* <Congrats />
                    <Error /> */}

               </div>
               <Logos />
          </div>
     )
}
