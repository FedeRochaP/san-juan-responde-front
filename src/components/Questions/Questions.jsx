import React from 'react'

// Styles
import style from './Questions.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

// Material UI Icons
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Questions() {
     return (
          <div className='view'>
               <Header />
               <div className='container__user'>
                    <div>
                         <div className={style.questions__number}>
                              <h3>Pregunta</h3>
                              <div className={style.questions__number__box}>
                                   <h2>1</h2>
                              </div>
                         </div>
                         <div>

                         </div>
                         <div className={style.questions__title_container}>
                              <div className={style.questions__title}>
                                   <h3>Pregunta realizada</h3>
                              </div>
                         </div>
                         <div className={style.questions__list}>
                              <button>Respuesta</button>
                              <button>Respuesta</button>
                              <button>Respuesta</button>
                         </div>
                         <div className={style.questions__btns}>
                              <div><InfoIcon /> <p>AYUDA</p></div>
                              <div><CheckCircleIcon /> <p>VER RESPUESTA</p></div>
                         </div>
                         <div className={style.questions__next}>
                              <button className='btn btn__gris'>SIGUIENTE</button>
                         </div>
                    </div>
               </div>
               <Logos />
          </div>
     )
}
