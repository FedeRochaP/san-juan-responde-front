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
import ModalLife from '../Modals/Messages/modalLife';

export default function Questions() {
     const [preguntaActual, setPreguntaActual] = useState(0)
     const [puntuacion, setPuntuacion] = useState(0)
     const [isFinished, setIsFinished] = useState(false)
     const [life, setLife] = useState(3)
     const [error, setError] = useState(null)
     const [areDisabled,setAreDisabled] = useState(false)
     const { getQuestions, questions,setQuestions , postQuestions ,respuesta} = useContext(AuthContext)
     

     useEffect(()=> {
          getQuestions()
     },[])
     const nextQuestios = ()=> {
               if (preguntaActual === questions?.preguntas - 1) {
                    setIsFinished(true)
                    setQuestions()

               } else{
                    setPreguntaActual(preguntaActual + 1)
                    setError(null)
               }
     }
     
     const handleQuestions = (isCorrect,e) => {
         
          if(isCorrect === 'true'){
               setError(false)
               setPuntuacion(puntuacion + 1)
               if(puntuacion + 1 === 3){
                    setIsFinished(true)
                    setQuestions()
                    postQuestions()
               }
          }else{
               setError(true)
          }
          isCorrect === 'false' && setLife(life - 1)
     }
     const handleJoker = ()=> {
          const questionsArray = {...questions}
          const valor =  questions?.preguntas[preguntaActual]?.opciones?.findIndex(item=> {
              return  item.isCorrect === 'false'
          })
          questionsArray?.preguntas[preguntaActual]?.opciones?.splice(valor,1)
          setQuestions(questionsArray)
          
     }
     if(isFinished){
          return (
          <Congrats intentos={questions?.quedan}/>
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
                                   <h2>{preguntaActual + 1} de {questions?.preguntas?.length}</h2>
                              </div>
                         </div>
                         <div className={style.questions__section}>
                              <div className={style.questions__title_container}>
                                   <div className={style.questions__title}>
                                        <div className={style.questions__sign}>
                                             <img src={signo} alt="" />
                                        </div>
                                        <h3>{questions?.preguntas[preguntaActual]?.pregunta}</h3>
                                   </div>
                              </div>
                              <div className={style.questions__list}>
                                   {
                                        questions?.preguntas[preguntaActual]?.opciones.map((item,index) => (
                                             <button disabled={!item.isCorrect && error != null} key={index} onClick={(e) => handleQuestions(item.isCorrect,e)} className='btn btn__rosa__dark'>{item.opciones}</button>
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
                                        <p>Oprime siguiente y continua jugando</p>
                                   </div>
                                   
                                   </>
                              )

                         }
                         {life === 0 && <ModalLife intentos={questions.quedan}/> }
                         <div className={style.questions__next}>
                              <div  className={style.questions__btns}>
                                   {questions?.preguntas[preguntaActual].opciones?.length === 3 && <div  onClick={handleJoker} className={style.questions__joker}>
                                        <img src={joker} alt="" />
                                   </div> }
                                   
                                   <div className={style.questions__heart}>
                                        <p>{life}</p>
                                   </div>
                              </div>
                              {
                              error !== null &&  <button onClick={nextQuestios} className='btn btn__gris'>SIGUIENTE</button>
                              }
                         </div>
                    </div>
               </div>
               <Logos />
          </div>
     )
}
