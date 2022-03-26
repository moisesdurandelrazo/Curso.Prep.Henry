//var resultado = 100;
//function verificar(num) {
//  if (num !== 100) {
//    return "es diferente";
//  } else return "es 100";
//}
//var auxiliar = verificar(resultado)
//console.log(auxiliar)
//console.log("holis")
//console.log (verificar(100))//
/*
function verificar(num) {
  if (num < 100 && num < 50 && num > 10) {
    return "hola";
  } else if (num === 10 || num === 32 || num === 8) {
    return "adios";
  } else {
    return "no se cumpio";
  }
}

var aux = verificar(35);
var aux2 = verificar(8);
var aux3 = verificar("sad");
console.log(aux);
console.log(aux2);
console.log(aux3);*/

/*function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if( numero < 2) return false;
    if(numero === 2) return true;
    for(var i = 2; i < numero; i++) {
      if(numero % i === 0) {
        return false;
      }
    }
    return true;
  }

  var prueba1= esPrimo(17) 
  console.log(prueba1)*/

  /*function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    let arrayTablaDel6 = []
    for (let i = 0; i < 11; i++) {
          arrayTablaDel6.push(7 * i)
    }
    return arrayTablaDel6
  }
  console.log(tablaDelSeis())*/

  /*function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var a = numero;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  }
  while(i < 8);
  return a;
}

var pru1= doWhile(1)
console.log(pru1)*/

/*function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:

    for(var i = 0; i < array.length; i++) {
      array[i] = array[i] + 1;
    }
    return array;
}

      var pru1= incrementarPorUno([1,2,3,4])
console.log(pru1)

function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array[array.length] = elemento;
    return array;
  }*/

/*function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var maximo = numeros[0];
    for(var i = 1; i < numeros.length; i++) {
      if(numeros[i] > maximo) { 
        maximo = numeros[i];
      }
    }
    return maximo;
  }
var mayornumero = numeroMasGrande([10,3,4,5])
console.log(mayornumero)
var mayornumero2 = numeroMasGrande([25.4,16.2,7])
console.log(mayornumero2)*/

/*function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if(letra.length > 1){
    return "Dato incorrecto"
  }
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  }
  return "Dato incorrecto"
}
var edithco= esVocal("e")
console.log (edithco)*/

/*var toni ={
  nombre:"Toni",
  apellido: "Tralice",
  edad:33,
  saludar: function(){
    console.log("hola,Toni");
  }
  diversion:["escalar","fotografia","dar clases"],
};
console.log(toni,nombre);
console.log(toni.diversion);
toni.saludar();*/

class Persona{
  constructor (nombre, apellido){
    this.nombre = nombre,
    this.apellido = apellido
  }
  saludar (){
    console.log('hola!'+ this.nombre);
  }
}
var toni=new Persona('Toni','tralice');
toni.saludar();

class Empleado extends Persona{}
  constructor (nombre, apellido, empleo,sueldo){
    super(nombre, apellido);
    this.empleo= empleo,
    this.sueldo=sueldo
  }
}
var toni=new Empleado('Toni','tralice','Profesor',100);
console.log(toni);
