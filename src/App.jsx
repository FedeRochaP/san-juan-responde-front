import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

// Components
const LoginUser = lazy(() => import('./components/Login/LoginUser'))
const LoginAdmin = lazy(() => import('./components/Login/LoginAdmin'))
const PanelAdmin = lazy(() => import('./components/PanelAdmin/PanelAdmin'))

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/loginUser" exact element={<LoginUser />} />
        <Route path="/loginAdmin" exact element={<LoginAdmin />} />

        {/* Admin */}
        <Route path="/panelAdmin" exact element={<PanelAdmin />} />

      </Routes>
    </Router>
  )
}