import React from 'react'

// Components
import Header from '../Header/Header'
import Logos from '../Logos/Logos'

export default function PanelAdmin() {
  return (
    <div className='view'>
          <Header />
          <div className='container'>
               <Logos />
          </div>
    </div>
  )
}
