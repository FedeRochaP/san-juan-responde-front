import React from 'react'

// Styles
import style from './Header.module.css'

// Image
import lineaColores from '../../assets/Head/lineaColores.png'

export default function Header() {
  return (
      <img className={style.head__line} src={lineaColores} alt="" />
  )
}
