let nombres=['carne','rana','huevos','tentaculos','galletas']
let tipos=['vegetal','animal', 'insecto']
let nivel_energia=[100,250,500,480,330]

let alimento={}
let comidas=[]

for(let i=0; i<5; i++){


//cargar un atributo de mi objeto con cada console.log
    comidas.nombre=(nombres[Math.floor(Math.random()*nombres.lenght)])
    comidas.tipos=(tipos[Math.floor(Math.random()*tipos.lenght)])
    comidas.nivel_energia=(nivel_energia[Math.floor(Math.random()*nivel_energia.lenght)])

    comidas.push(comidas)
    //console.log(comidas)
}

//Empieza mi ejercicio
//function clasificar comida(comidas,callback)

function alimentoFiltrado(alimento,callback){
    setTimeout(function(){
        let filtrados=comidas.filter(function(filtrado){
            //console.log(filtrados)

            return comidas.tipos==vegetal && comidas.nivel_energia>=200
        })
        callback(filtrados)
    
    },5000)
}
alimentoFiltrado(function(filtrados){
    comidas.forEach(Function(alimentoFiltrado){
        contador=0
    
       


    })

})
