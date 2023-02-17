import React, { useEffect, useState } from 'react'

// Styles
import style from './Login.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'
import Attepts from '../Modals/Messages/Attempts'
import Congrats from '../Modals/Messages/Congrats'
import axios from 'axios'
export default function LoginUser() {
     const [dni, setDni] = useState('')
     const [response, setResponse] = useState({
          isRegister: true
     })


     const handleLogin = async () => {
          await axios.post(`http://192.168.100.162:8000/api/participante/consulta`, {
              "dni": dni
          }, {
               method: 'POST',
               // headers: {
               //      "Authorization":
               //           `Bearer ${import.meta.env.VITE_TOKEN}`,
               // },
               withCredentials: true,

          })
               .then(response => response.data)
               .then(async (datos) => {
                    if (datos?.status) {
                         console.log(datos)
                    }
               })
               .catch((err) => {
                    console.log(err)
               })
     }
     // const modalInfo= ()=> {
     //      response.isRegister && <Attepts initial={true}/> 
     // }   

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
                         <button className='btn btn__gris' onClick={handleLogin}>INGRESAR</button>
                    </div>
                    {/* {
                              response.isRegister ? <Attepts initial={true} /> : ''
                         }
                    
                    <Congrats /> */}

               </div>
          </div>
     )
}
