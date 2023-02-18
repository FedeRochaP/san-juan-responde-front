import React, { useContext, useEffect, useState } from 'react'

// Styles
import style from './Form.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

import Congrats from '../Modals/Messages/Congrats'
import Error from '../Modals/Messages/Error'
// Images
import swal from 'sweetalert';

import expansion from '../../assets/expansionProductiva.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contex/auth'
const departamento = [
     { id: 1, nombre: 'Rawson' },
     { id: 2, nombre: 'Capital' },
     { id: 3, nombre: 'Chimbas' },
     { id: 4, nombre: 'Rivadavia' },
     { id: 5, nombre: 'Santa Lucia' },
     { id: 6, nombre: 'Pocito' },
     { id: 7, nombre: 'Caucete' },
     { id: 8, nombre: 'Jachal' },
     { id: 9, nombre: 'Albardon' },
     { id: 10, nombre: 'Sarmiento' },
     { id: 11, nombre: 'Angaco' },
     { id: 12, nombre: '25 de Mayo' },
     { id: 13, nombre: 'San Martin' },
     { id: 14, nombre: 'Calingaste' },
     { id: 15, nombre: '9 de Julio' },
     { id: 16, nombre: 'Valle Fertil' },
     { id: 17, nombre: 'Iglesia' },
     { id: 18, nombre: 'Ullum' },
     { id: 19, nombre: 'Zonda' },

]
const mostrarAlerta = (mensaje) => {
     swal({
         title: "Confirmacion! ",
         text: mensaje,
         icon: "success",
         button: "Aceptar",
         timer: "2000",
     })
 }
export default function Form() {
     const [form, setForm] = useState()
     const navigate = useNavigate()
     const [use,setUse] = useState(false)
     const { getQuestionsForm ,setJwt,setUser} = useContext(AuthContext)

     const handleChange = (e) => {
          const { name, value } = e.target

          setForm(prevState => {
               return {
                    ...prevState,
                    [name]: value
               }
          })
     }
     const handleSubmitForm = async () => {
          await axios.post(`http://localhost:8000/api/participante`, {
               "nombre": form.nombre,
               "apellido": form.apellido,
               "telefono": form.telefono,
               "dni": form.dni,
               "departamento_id": form.departamento_id
          }, {
               method: 'POST',
               withCredentials: true,

          })
               .then(response => response.data)
               .then(async (datos) => {
                    if (datos?.status) {
                         mostrarAlerta(datos.message)
                         setForm()
                         setJwt(datos.token)
                         setUser(datos.model.dni)
                         navigate('/instructions')
                    }
               })
               .catch((err) => {
                    console.log(err)
               })
     }



    
     
      
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
                                        <input type="text" onChange={handleChange} name='nombre' required />
                                        <span>Ingresa tu nombre</span>
                                   </div>
                                   <div className={style.form__inputbox}>
                                        <input type="text" onChange={handleChange} name='apellido' required />
                                        <span>Ingresa tu apellido</span>
                                   </div>
                                   <div className={style.form__inputbox}>
                                        <input type="number" onChange={handleChange} name='dni' required />
                                        <span>Ingresa tu DNI</span>
                                   </div>
                                   <div className={style.form__inputbox}>
                                        <input type="number" onChange={handleChange} name='telefono' required />
                                        <span>Ingresa tu celular</span>
                                   </div>
                                   <div className={style.form__inputbox}>
                                        <select onChange={handleChange} name="departamento_id" id="">
                                             <option value="0" disabled selected>Selecciona tu departamento</option>
                                             {
                                                  departamento.map(item => (
                                                       <option key={item.id} value={item.id} >{item.nombre}</option>

                                                  ))
                                             }
                                        </select>
                                   </div>
                              </div>
                         </div>
                         <div className={style.form__btn}>
                              <img src={expansion} alt="" />
                              <button className='btn btn__gris' onClick={handleSubmitForm}>GUARDAR</button>
                         </div>
                    </div>

                    {/* <Congrats />
                    <Error /> */}

               </div>
               <Logos />
          </div>
     )
}
