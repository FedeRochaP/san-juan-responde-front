import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

export const AuthContext = React.createContext('')

export const UserContext = ({ children }) => {

    const [respuesta, setRespuesta] = useState()
    const [questions,setQuestions] = useState()
    const [jwt,setJwt] = useState(()=> window.sessionStorage.getItem('token'))
    // const [jwtForm,setJwtForm] = useState(()=> window.sessionStorage.getItem('token'))
    const [user,setUser] = useState(()=> window.sessionStorage.getItem('user') || null)
    
    
    const handleLogin = async ({ dni }) => {
        await axios.post(`http://localhost:8000/api/participante/consulta`, {
            "dni": dni
        }, {
            method: 'POST',
            withCredentials: true,

        })
            .then(response => response.data)
            .then((datos) => {
                setRespuesta(datos)
                setJwt(datos?.token)
                
            })
            .catch((err) => {
                window.sessionStorage.removeItem('token')
                console.log(err)
            })
    }
  
    
    const getQuestions= async()=> {
        await axios.post(`http://localhost:8000/api/getPreguntas`, {
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
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        window.sessionStorage.setItem('token',jwt) 
    }, [jwt])

    useEffect(() => {
        window.sessionStorage.setItem('user',user) 
    }, [user])
    const postQuestions =async () => {
        await axios.post(`http://localhost:8000/api/intentos/guardar`, {
             "preguntas_correctas" : 3
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
                      console.log('hola')
                  }
             })
             .catch((err) => {
                  console.log(err)
             })
   }
    return (
        <AuthContext.Provider value={{ respuesta, handleLogin ,questions,setJwt,setUser,getQuestions,setQuestions,postQuestions}}>
            {children}
        </AuthContext.Provider>
    )
}