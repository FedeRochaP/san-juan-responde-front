import React, { useCallback, useContext, useEffect, useState } from 'react'

// Styles
import style from './Login.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'
import Attepts from '../Modals/Messages/Attempts'
import Congrats from '../Modals/Messages/Congrats'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contex/auth'


export default function LoginUser() {
     const [dni, setDni] = useState('')
     const navigate = useNavigate()
     const {handleLogin,respuesta} = useContext(AuthContext)
     
     useEffect(()=> {
           if(respuesta?.status){
                !respuesta?.isRegistered ? navigate('/form') : ''
           }
     },[respuesta?.isRegistered])

     const handleSubmit = async()=> {
          try {
              await handleLogin({dni})
          } catch (err) {
               console.log(err.response.data)
          }
     }

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
                         <button className='btn btn__gris' onClick={handleSubmit}>INGRESAR</button>
                    </div>

                        {respuesta?.isRegistered && <Attepts initial={true} intentos={respuesta?.quedan} />}

               </div>
          </div>
     )
}
