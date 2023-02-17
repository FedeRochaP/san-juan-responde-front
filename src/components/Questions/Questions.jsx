import React, { useContext, useEffect, useState } from 'react'

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
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../contex/auth';
import Congrats from '../Modals/Messages/Congrats';
const array = [
     {
          id: 1,
          titulo: 'quien es dybala?',
          opciones: [
               { opci: 'jugador', isCorrect: true },
               { opci: 'tenista', isCorrect: false },
               { opci: 'basquet', isCorrect: false },
          ]
     },
     {
          id: 2,
          titulo: 'quien es messi?',
          opciones: [
               { opci: 'jugador', isCorrect: true },
               { opci: 'tenista', isCorrect: false },
               { opci: 'basquet', isCorrect: false },
          ]
     },
     {
          id: 3,
          titulo: 'quien es maradona?',
          opciones: [
               { opci: 'jugador', isCorrect: true },
               { opci: 'tenista', isCorrect: false },
               { opci: 'basquet', isCorrect: false },
          ]
     },
     {
          id: 4,
          titulo: 'quien es dybala?',
          opciones: [
               { opci: 'jugador', isCorrect: true },
               { opci: 'tenista', isCorrect: false },
               { opci: 'basquet', isCorrect: false },
          ]
     },
     {
          id: 5,
          titulo: 'donde jugo messi de chiquito?',
          opciones: [
               { opci: 'Newells ', isCorrect: true },
               { opci: 'Boca', isCorrect: false },
               { opci: 'San martin', isCorrect: false },
          ]
     }
]
export default function Questions() {
     const [preguntaActual, setPreguntaActual] = useState(0)
     const [puntuacion, setPuntuacion] = useState(0)
     const [isFinished, setIsFinished] = useState(false)
     const [life, setLife] = useState(3)
     const [error, setError] = useState(null)
     const [areDisabled,setAreDisabled] = useState(false)
     const { getQuestions, questions } = useContext(AuthContext)
     // useEffect(()=> {
     //      getQuestions()
     // },[])
     // console.log(questions)
     const handleQuestions = (isCorrect) => {
          if (isCorrect) setPuntuacion(puntuacion + 1)

          isCorrect ? setError(false) : setError(true)
          
          setTimeout(() => {
               if (preguntaActual === array.length - 1) {
                    setIsFinished(true)
               } else if (isCorrect) {
                    setPreguntaActual(preguntaActual + 1)
                    setError(null)
               }
          }, 2000);
     }
     
     if(isFinished){
          return (
          <Congrats path='questions'/>
          )
     }
     return (
          <div className='view'>
               <Header />
               <div className='container__user'>
                    <div className={style.questions__container}>
                         <div className={style.questions__number}>
                              <h3>Pregunta</h3>
                              <div className={style.questions__number__box}>
                                   <h2>{preguntaActual + 1} de {array.length}</h2>
                              </div>
                         </div>
                         <div className={style.questions__section}>
                              <div className={style.questions__title_container}>
                                   <div className={style.questions__title}>
                                        <div className={style.questions__sign}>
                                             <img src={signo} alt="" />
                                        </div>
                                        <h3>{array[preguntaActual].titulo}</h3>
                                   </div>
                              </div>
                              <div className={style.questions__list}>
                                   {
                                        array?.[preguntaActual].opciones.map((item) => (
                                             <button disabled={areDisabled} key={item.id} onClick={(e) => handleQuestions(item.isCorrect)} className='btn btn__rosa__dark'>{item.opci}</button>
                                        ))
                                   }

                              </div>
                         </div>
                         {
                              error === false && (
                                   <div className="questions__message">
                                        <h2>¡Correcto!</h2>
                                        <p>Oprime siguiente y continua jugando</p>
                                   </div>
                              )
                         }
                         {
                              error === true && (
                                   <>
                                   <div className="questions__message">
                                        <h2>¡Fallaste!</h2>
                                        <p>la respuesta correcta es:</p>
                                        <h3>Respuesta correcta</h3>
                                   </div>
                                   
                                   </>
                              )

                         }


                         <div className={style.questions__next}>
                              <div className={style.questions__btns}>
                                   <div className={style.questions__joker}>
                                        <img src={joker} alt="" />
                                   </div>
                                   <div className={style.questions__heart}>
                                        <p>{life}</p>
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
