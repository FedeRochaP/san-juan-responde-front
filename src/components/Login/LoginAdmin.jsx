import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

// Styles
import style from './Login.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

const baseURL = "http://localhost:8000/api/login";

export default function LoginAdmin() {

     const navigate = useNavigate()
     const [post, setPost] = useState(null);

     function login() {
          axios
               .post(baseURL, {
                    usuario: "admin",
                    password: "admin"
               })
               .then((response) => {
                    setPost(response.data);
                    // console.log(response.data + 'Ahora si wacho')
                    navigate(`/panelAdmin`)
               });
     }

     useEffect(() => {

          axios.get(`http://localhost:8000/api/csrf`, {
              method: 'GET',
              withCredentials: true
  
          })
              .then(response => response.data)
              .then(datos => {
              })
              .catch((err) => {
               //    console.log(err)
              })
      }, [])

     return (
          <div className='view'>
               <Header />
               <div className='container'>
                    <Logos />
                    <div className={style.login__title}>
                         <h2>Bienvenido al panel de Administrador</h2>
                    </div>
                    <div className={style.login__inputs}>
                         <div className={style.login__inputbox}>
                              <input type="number" name="" id="" required />
                              <span>Usuario Admin</span>
                         </div>
                         <div className={style.login__inputbox}>
                              <input type="password" required />
                              <span>Clave</span>
                         </div>
                         <button onClick={login}>INGRESAR</button>
                    </div>
               </div>
          </div>
     )
}