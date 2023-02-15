import React from 'react'

// Styles
import style from './PanelAdmin.module.css'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'
import Create from '../Modals/Create'
import Edit from '../Modals/Edit'
import Delete from '../Modals/Delete'

export default function PanelAdmin() {
  return (
    <div className='view'>
          <Header />
          <div className='container'>
               <Logos />
               <div className={style.panel__body}>
                    <Create />
                    <div className={style.panel__list__container}>
                         <h3>Listado de preguntas</h3>
                         <br />
                         <div className={style.panel__list}>
                              <div className={style.panel__list__box}>
                                   <p>Nombre de la pregunta</p>
                                   <div className={style.panel__icons}>
                                        <Edit />
                                        <Delete />
                                   </div>
                              </div>
                              <div className={style.panel__list__box}>
                                   <p>Nombre de la pregunta</p>
                                   <div className={style.panel__icons}>
                                        <Edit />
                                        <Delete />
                                   </div>
                              </div>
                              <div className={style.panel__list__box}>
                                   <p>Nombre de la pregunta</p>
                                   <div className={style.panel__icons}>
                                        <Edit />
                                        <Delete />
                                   </div>
                              </div>
                              <div className={style.panel__list__box}>
                                   <p>Nombre de la pregunta</p>
                                   <div className={style.panel__icons}>
                                        <Edit />
                                        <Delete />
                                   </div>
                              </div>
                              <div className={style.panel__list__box}>
                                   <p>Nombre de la pregunta</p>
                                   <div className={style.panel__icons}>
                                        <Edit />
                                        <Delete />
                                   </div>
                              </div>
                              <div className={style.panel__list__box}>
                                   <p>Nombre de la pregunta</p>
                                   <div className={style.panel__icons}>
                                        <Edit />
                                        <Delete />
                                   </div>
                              </div>
                              <div className={style.panel__list__box}>
                                   <p>Nombre de la pregunta</p>
                                   <div className={style.panel__icons}>
                                        <Edit />
                                        <Delete />
                                   </div>
                              </div>
                              <div className={style.panel__list__box}>
                                   <p>Nombre de la pregunta</p>
                                   <div className={style.panel__icons}>
                                        <Edit />
                                        <Delete />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
    </div>
  )
}
