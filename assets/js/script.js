alert(`Bienvenidos_!!,
actualmente los resultados se ven en la consola,
después de abrirla presionar el botón  RUN...`)
// Función Saludo Inicial
let saludo_inicial = () => alert("Hola!! Inicio programa MULTIPLICACION_! ...")

// Funcion Obtener y Validar número
let get_and_validate = () => {
    let numero = 0
    let incorrecto = true
    do {
        numero = parseInt(prompt("Ingrese un número entre 1 y 20 : "))
        if (numero > 0 && numero < 21) {
            alert("El número ingresado está correcto_!!!")
            incorrecto = false
        } else {
            alert(`CAMPO REQUERIDO
            INGRESE SOLO NUMEROS
            dentro del rango (1 a 20),
            no texto, no dejar vacío,
            intente nuevamente ...`)
        }
    } while (incorrecto)
    return numero
}

// Función Multiplicar y dibujar Tabla de Multiplicación
let multiplix = (para1) => {
    for (let i = 1; i <= para1; i++) {
        console.log(`${i} X ${para1} es: ${i * para1}`) 
    }
}

// Función calcular Factorial
let factorix = (para1) =>{
    if ( para1 === 1 ){
    return 1
    } else {
    return para1 * factorix( para1 - 1 )
    }
}

// Función Dibujar Tabla de Factoriales
let TablaFactorial = (para1) => { 
    for (let i = 1; i <= para1; i++) {
    console.log(`El Factorial de ${i} es: ${factorix(i)}`)
    }
}

// ******* PROGRAMA PRINCIPAL ******* //
let programa = () => {
    saludo_inicial()
    let x = get_and_validate()
    console.log(`El número seleccionado fue: ${x}.`)
    console.log(" ")
    console.log("TABLA DE MULTIPLICAR :")
    multiplix(x)
    console.log(" ")
    console.log("TABLA DE FACTORIAL :")
    TablaFactorial(x)
    console.log(`                               ...by jemm2008`)
    alert(`Multiplicación versión 0.1 alfa
    actualmente los resultados se muestran por la consola,
    cumpliendo lo requerido por el ejercicio.
    saludos_!!`)
}

// Invocación a Programa principal
$(function(){
    $("#run").click(function(){
        //alert("RUN pressed!")
        programa()
    })
})
