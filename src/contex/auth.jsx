import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext('')

export const UserContext = ({ children }) => {

    const [respuesta, setRespuesta] = useState()
    const [questions,setQuestions] = useState()

    const handleLogin = async ({ dni }) => {
        await axios.post(`http://localhost:8000/api/participante/consulta`, {
            "dni": dni
        }, {
            method: 'POST',
            withCredentials: true,

        })
            .then(response => response.data)
            .then(async (datos) => {
                setRespuesta(datos)
                console.log(datos)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const getQuestions= async()=> {
        await axios.post(`http://localhost:8000/api/getPreguntas`, {
            "dni": respuesta?.dni
        }, {
            method: 'POST',
            withCredentials: true,

        })
            .then(response => response.data)
            .then(async (datos) => {
                if (datos.status) {
                    setQuestions(datos)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    // useEffect(() => {
        
    // }, [questions])
    return (
        <AuthContext.Provider value={{ respuesta, handleLogin ,getQuestions,questions}}>
            {children}
        </AuthContext.Provider>
    )
}