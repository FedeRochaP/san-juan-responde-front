import React from 'react'

// Styles
import style from './Questions.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

// Material UI Icons
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// Images
import signo from '../../assets/signo.svg'
import joker from '../../assets/joker.svg'

export default function Questions() {
     return (
          <div className='view'>
               <Header />
               <div className='container__user'>
                    <div className={style.questions__container}>
                         <div className={style.questions__number}>
                              <h3>Pregunta</h3>
                              <div className={style.questions__number__box}>
                                   <h2>1</h2>
                              </div>
                         </div>
                         <div className={style.questions__section}>
                              <div className={style.questions__title_container}>
                                   <div className={style.questions__title}>
                                        <div className={style.questions__sign}>
                                             <img src={signo} alt="" />
                                        </div>
                                        <h3>Pregunta realizada</h3>
                                   </div>
                              </div>
                              <div className={style.questions__list}>
                                   <button className='btn btn__rosa__dark'>Respuesta</button>
                                   <button className='btn btn__rosa__dark'>Respuesta</button>
                                   <button className='btn btn__rosa__dark'>Respuesta</button>
                              </div>
                         </div>
                         <div className={style.questions__message}>  
                              <h2>¡Correcto!</h2>
                              <p>Oprime siguiente y continua jugando</p>
                         </div>
                         {/* <div className={style.questions__message}>  
                              <h2>¡Fallaste!</h2>
                              <p>la respuesta correcta es:</p>
                              <h3>Respuesta correcta</h3>
                         </div> */}
                         <div className={style.questions__next}>
                              <div className={style.questions__btns}>
                                   <div className={style.questions__joker}>
                                        <img src={joker} alt="" />
                                   </div>
                                   <div className={style.questions__heart}>
                                        <p>3</p>
                                   </div>
                              </div>
                              <button className='btn btn__gris'>SIGUIENTE</button>
                         </div>
                    </div>
               </div>
               <Logos />
          </div>
     )
}
