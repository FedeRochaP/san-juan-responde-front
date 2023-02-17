import React, { useContext, useEffect, useState } from 'react'

// Styles
import style from './Instructions.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

// Images
import expansion from '../../assets/expansionProductiva.svg'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contex/auth'
import axios from 'axios'
export default function Instructions() {
     const navigate = useNavigate()
     const {getQuestions} = useContext(AuthContext)


     
     const handleQuestions = ()=> {
          navigate(`/questions`)
   }
     return (
          <div className='view'>
               <Header />
               <div className='container'>
                    <Logos />
                    <div className={style.instructions__container}>
                         <div className={style.instructions__text}>
                              <div className={style.instructions__title}>
                                   <h2>Instrucciones</h2>
                              </div>
                              <div className={style.instructions__list}>
                                   <ol>
                                        <li>Lee la pregunta. </li>
                                        <li>Elije la respuesta que crees correcta.</li>
                                        <li>Espera ver tu resultado. </li>
                                        <li>Si fallas puede volver a intentarlo, pero  perderás una vida. Las vidas restantes se indican con el corazón.</li>
                                        <li>Tienes tres comodines para utilizar, te ayudaran a encontrar la respuesta correcta. </li>
                                   </ol>
                              </div>
                         </div>
                         <div className={style.instructions__next}>
                              <img src={expansion} alt="Expansion Productiva" />
                              <button onClick={handleQuestions} className='btn btn__bordo__dark'>JUGAR</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}
