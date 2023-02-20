import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

// Styles
import style from './Login.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'
import Attempts from '../Modals/Messages/Attempts'
import Congrats from '../Modals/Messages/Congrats'
import Ups from '../Modals/Messages/Ups'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contex/auth'


export default function LoginUser() {
     const [dni, setDni] = useState('')
     const navigate = useNavigate()
     const [inputFill, setInputFill] = useState(false)
     const [error, serError] = useState("")
     const { handleLogin, respuesta } = useContext(AuthContext)
     const refPrevius = useRef(dni)

     useEffect(() => {
          if (respuesta?.status) {
               !respuesta?.isRegistered ? navigate('/form') : ''
          }
     }, [respuesta?.isRegistered])

     const handleSubmit = async () => {
          if(refPrevius.current === dni) return
          refPrevius.current = dni
          if (dni.length < 6 ||  dni.length > 8) {
               serError('El DNI debe tener entre 6 y 9 dígitos.')
          } else {
               await handleLogin({ dni })
          }
     }

     useEffect(()=> {
          dni.length > 6  ||  dni.length > 8 ? setInputFill(true)  : setInputFill(false)
     },[dni])
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
                              <input type="number" name="dni" value={dni} onChange={(e) => setDni(e.target.value)} required />
                              <span>Ingresa tu DNI sin puntos</span>
                         </div>

                         {error && <p style={{color:'red'}}>{error}</p>}

                         <button className={inputFill === true ? 'btn btn__bordo' : 'btn btn__gris'} onClick={handleSubmit}>INGRESAR</button>
                    </div>

                    {respuesta?.isRegistered && <Attempts initial={true} intentos={respuesta?.quedan} />}
               </div>
          </div>
     )
}
