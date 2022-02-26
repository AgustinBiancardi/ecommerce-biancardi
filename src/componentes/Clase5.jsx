const task = new Promise((resolve,reject)=>{
    let url = "bianca.com"
    if(url === "bianca.com"){
        resolve(`OK 200`)
    }else{
        reject("404")
    }
    
})

function Clase5(){
    console.log(task)
    task
    .then((respuesta)=>{
        console.log(respuesta)
    })
    .catch (err => console.log(err))
    .finally (()=>console.log("loading"))

    // useEffect(()=>{
    //     console.log("LLamada a la API siempre")
    // })

    // useEffect(()=>{
    //     console.log("LLamada a la API sólo una vez luego del montaje")
    // }, [])

    // useEffect(()=>{
    //     console.log("LLamada a la API sólo si cambia un state,prop,etc")
    // }, [Count])

    return(
        <div>
        </div>
        
    )
}

export default Clase5

// producto = [{nombre:"Pasta de aceitunas", id:912 , stock:18 }]

// const task = new Promise((resolve,reject) => {
//     let url = "bianca.com"
    
//     if (url === "bianca.com"){
//         resolve (producto)
//     }else{
//         reject ("No se encontró el producto")
//     }

// })

// function BuscarProducto (){
//     task
//     .then((respuesta)=> console.log(respuesta), (err)=>console.log(err))

// }

// export default BuscarProducto