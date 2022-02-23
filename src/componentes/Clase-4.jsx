import { useState,useEffect } from "react"

function Clase4() {

    const [Count,SetCount] = useState(0)
    const [Fecha,SetFecha] = useState(Date)

    useEffect(()=>{
        console.log("LLamada a la API siempre")
    })

    useEffect(()=>{
        console.log("LLamada a la API sólo una vez luego del montaje")
    }, [])

    useEffect(()=>{
        console.log("LLamada a la API sólo si cambia un state,prop,etc")
    }, [Count])

    function handleCount(){
        SetCount(Count+1)
    }

    function handleFecha(){
        SetFecha(Date)
    }

    return (
        <div>
        <label>{Count}</label>
        <br />
        <label>{Fecha}</label>
        <button onClick={handleCount}>Click</button>
        <button onClick={handleFecha}>Fecha</button>
        </div>
    )
}

export default Clase4