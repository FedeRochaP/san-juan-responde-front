import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

export const AuthContext = React.createContext('')

export const UserContext = ({ children }) => {

    const [respuesta, setRespuesta] = useState()
    const [questions, setQuestions] = useState()
    const [jokerQuestions, setJokerQuestions] = useState(true)
    const [postWin, setPostWin] = useState()
    const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('token'))
    const [user, setUser] = useState(() => window.sessionStorage.getItem('user') || null)


    const handleLogin = async ({ dni }) => {
        await axios.post(`http://ec2-54-227-90-142.compute-1.amazonaws.com/api/participante/consulta`, {
            "dni": dni
        }, {
            method: 'POST',
            withCredentials: true,

        })
            .then(response => response.data)
            .then((datos) => {
                setRespuesta(datos)
                setJwt(datos?.token)
                // setUser(datos.intentos)
            })
            .catch((err) => {
                window.sessionStorage.removeItem('token')
                console.log(err)
            })
    }


    const getQuestions = async () => {
        await axios.post(`http://ec2-54-227-90-142.compute-1.amazonaws.com/api/getPreguntas`, {
            "dni": respuesta?.dni
        }, {
            method: 'POST',
            headers: {
                "Authorization":
                    `Bearer ${jwt}`
            },
            withCredentials: true,


        })
            .then(response => response.data)
            .then(async (datos) => {
                if (datos.status) {
                    setQuestions(datos)
                    setJokerQuestions(true)
                    // setUser(datos.intentos)

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        window.sessionStorage.setItem('token', jwt)
    }, [jwt])

    // useEffect(() => {
    //     window.sessionStorage.setItem('user', user)
    // }, [user])
    const postQuestions = async () => {
        await axios.post(`http://ec2-54-227-90-142.compute-1.amazonaws.com/api/intentos/guardar`, {
            "preguntas_correctas": 3
        }, {
            method: 'POST',
            headers: {
                "Authorization":
                    `Bearer ${jwt}`
            },
            withCredentials: true,


        })
            .then(response => response.data)
            .then(async (datos) => {
                if (datos?.status) {
                    console.log(datos)
                    setPostWin(datos)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <AuthContext.Provider value={{
            respuesta,
            handleLogin,
            questions,
            setJwt, 
            setUser,
            user,
            getQuestions,
            setQuestions,
            postQuestions,
            setJokerQuestions,
            jokerQuestions,
            postWin
        }}>
            {children}
        </AuthContext.Provider>
    )
}