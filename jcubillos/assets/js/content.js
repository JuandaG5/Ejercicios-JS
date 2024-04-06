//Condicionales

// menor de 18, deberías estar en la casa mimiendo
// menor de 40, estas en tu ambiente
// mayor de 40, te recomiendo la viejoteca
// una edad mayor de 120 años, esa edad es imposible
// si la edad es 0 o menor, esa edad es imposible
//
// let edad


// edad=parseInt(prompt("Cuántos años tienes?"))
// console.log(`Tu edad es ${edad}`)


// if(edad>=18){
// console.log("Siga bienvenido")
// }
// if(edad<0){
//     console.log("Esa edad es imposible")
//     }   
// else{
//     if(edad<=18){
//     console.log("Deberías estar mimiendo")
//     }
//     else{
//         if(edad<=40){
//         console.log("Estás en tu ambiente")
//         }
    
//         else{
//             if(edad>40){
//             console.log("Te recomiendo la viejoteca")
//             }
        
//             else{
//                 if(edad>=120){
//                 consolge.log("Esa edad es imposible")
//                 }
//             }
//       }
//     }
// }

//condiciones compuestas

// if(edad<=18 && edad<=40){
//     //
// }

//mostrarle el mandado (qué debe traer)
//preguntar uno a uno de los articulos s/n 1/2 si/no
//posteriormente evaluar si hay chancla o hay desayuno

let leche
let huevos
let pan

alert("Compra leche, pan y huevos")
console.log("Compra leche, pan y huevos")

leche=prompt("¿Compraste el leche")
huevos=prompt("¿Compraste el huevos")
pan=prompt("¿Compraste el pan")

// alert("no")
// console.log("no")

// if(huevos==si){
//     console.log("muy bien")
// } else{
//     if(huevos==no){
//         comsole.log()    
//     }
// }

if(leche==si && huevos==si && pan==si ){
    console.log("Hoy se desayuna rico")
}
