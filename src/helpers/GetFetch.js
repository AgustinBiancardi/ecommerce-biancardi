export const productos = [
    {id:1 , nombre: "Pasta de aceitunas con jamón ahumado" , foto: "https://i.imgur.com/yzB4ldu.jpg", descripcion: "Una pasta de aceitunas rápida al estilo mediterráneo. Es similar al tapenade francés, pero sin las alcaparras. Deliciosa con rebanadas de baguette o bolillo tostado.", precio:300, stock:8}, 
    {id:2 , nombre: "Chivito en escabeche" , foto: "https://i.imgur.com/b8KBhuJ.jpg", descripcion:"Conservando el sabor característico de la carne que llega desde Quilino, la capital del chivito en la provincia de Córdoba, y las mejores verduras de la región surge este exquisito escabeche.", precio:300, stock:12}, 
    {id:3 , nombre: "Mostaza combinada" , foto: "https://i.imgur.com/7KWveGS.jpg", descripcion:"Mostaza combinada así la llamamos elaborada con semillas de mostaza blanca y negra. Deliciosa. ", precio:300 ,stock:5}, 
    {id:4 , nombre: "Porotos con escabeche" , foto: "https://i.imgur.com/SEkK5D1.jpg",descripcion:"Los porotos en escabeche son una opción tentadora para aquellos que quieran sumar legumbres a su dieta. Ideales para servir con la picada o como guarnición de carnes asadas." ,precio:300,stock:9}, 
    {id:5 , nombre: "Mostaza con miel" , foto: "https://i.imgur.com/Z75ygzP.jpg", descripcion: "Si estás buscando una combinación de ingredientes espectacular con la mostaza de bandera y el dulzor de la miel como acabado, encontraste lo que buscabas.", precio:300, stock:10}, 
    {id:6 , nombre: "Chutney de durazno y romero" , foto: "https://i.imgur.com/FlKwf1Y.jpg",descripcion:"Se trata de un acompañamiento muy popular en la cocina india, sobre todo para los panipuris o buñuelos, y suele estar acompañada de otras salsas de sabores similares como los encurtidos, papads o raitas.",precio:300,stock:4} 
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