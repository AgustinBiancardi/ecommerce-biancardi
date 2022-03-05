import chivitoEscabeche from "../images/productos/chivito-en-escabeche.jpg";
import chutney from "../images/productos/chutney-de-durazno-y-romero.jpg";
import mostazaCombinada from "../images/productos/mostaza-combinada.jpg";
import mostazaConMiel from "../images/productos/mostaza-con-miel.jpg";
import pastaDeAceitunasConJamonAhumado from "../images/productos/pasta-de-aceitunas-con-jamon-ahumado.jpg";
import porotosConEscabeche from "../images/productos/porotos-con-escabeche.jpg";

export const productos = [
    {id:1 , nombre: "Pasta de aceitunas con jamón ahumado" , foto: {pastaDeAceitunasConJamonAhumado}}, 
    {id:2 , nombre: "Chivito en escabeche" , foto: {chivitoEscabeche}}, 
    {id:3 , nombre: "Mostaza combinada" , foto: {mostazaCombinada}}, 
    {id:4 , nombre: "Porotos con escabeche" , foto: {porotosConEscabeche}}, 
    {id:5 , nombre: "Mostaza con miel" , foto: "https://i.imgur.com/Z75ygzP.jpg"}, 
    {id:6 , nombre: "Chutney de durazno y romero" , foto: {chutney}} 
]


export const getFetch = new Promise((resolve,reject)=>{
    let url = "bianca.com"
    if(url === "bianca.com"){
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    }else{
        reject("404")
    }
    
})