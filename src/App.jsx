import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

// Components
const LoginUser = lazy(() => import('./components/Login/LoginUser'))
const Instructions = lazy(() => import('./components/Instructions/Instructions'))
// const LoginAdmin = lazy(() => import('./components/Login/LoginAdmin'))
// const PanelAdmin = lazy(() => import('./components/PanelAdmin/PanelAdmin'))
const Questions = lazy(() => import('./components/Questions/Questions'))
const Form = lazy(() => import('./components/Form/Form'))

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/loginUser" exact element={<LoginUser />} />
        <Route path="/instructions" exact element={<Instructions />} />
        {/* <Route path="/loginAdmin" exact element={<LoginAdmin />} /> */}

        {/* Admin */}
        {/* <Route path="/panelAdmin" exact element={<PanelAdmin />} /> */}

        {/* User */}
        <Route path="/questions" exact element={<Questions />} />
        <Route path="/form" exact element={<Form />} />

      </Routes>
    </Router>
  )
}