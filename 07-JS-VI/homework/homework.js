// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var primer_letra=nombre[0];
  return primer_letra.toUpperCase()+nombre.slice(1); // funciones ya establecidas de JS .toUpperCase() -> Convierte el string en mayuscula
                                                    // y .slice() muestra el residuo desde donde se le indique en el indice


}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();// invoco a la fn enviada como parametro dentro de las funcion principàl.

}

function operacionMatematica(n1, n2, cb) { // funcion de orden superior. la cual acepta tres argumentos en este ejercicio, el tercero es el callback

  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1,n2);
}

function sumarArray(numeros, callback) { // Las funciones callback nos aseguran que no se va a ejecutar un codigo hasta que no se complete otro. 
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 
var resultado_suma=0;
for(i=0;i<numeros.length;i++)
  {
    resultado_suma+=numeros[i];
  }
callback(resultado_suma);

}
/* EJEMPLO: CallBack ->

function crearCita(cita, callback){ 
  var miCita = "Como yo siempre digo, " + cita;
  callback(miCita); // 2
}

function logCita(cita){
  console.log(cita);
}

crearCita("come tus vegetales!", logCita);*/ 

//callback
function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  array.forEach(cb); // forEach hace que por cada registro del array se llama a la funcion cb y se ejecute
}

function map(array, cb) { // el metodo map genera automaticamente un nuevo array con la MISMA longitud
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb`
   //y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que 
  //el array del argumento
  //Tu código:

  // supongamos tenemos el array de objetos para los almuerzos->
  //var array=
// [
//   {principal:"Pollo con Papas", postre: "Helado"},
//   {principal:"Tallarines con Crema", postre: "Ensalada de Fruta"},
//   {principal:"Puchero", postre: "Flan"},
//   {principal:"Carne al Horno", postre: "Clerico"}

// ];
//nuevo_array=[];
// metodo map invoca funcion anonima, la cual tiene tres parametros (valor, index, array), solo el primero es obligatorio
var nuevo_array=array.map(function(valor){  return cb(valor); } )
return nuevo_array;

}

// function cb()
//   { 
//     console.log("Hola, soy callback");
//   }
// map(cb);






function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  // array = ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo'];
const nvo_array=array.filter(valor=>valor.charAt(0)==="a");
return nvo_array;

  //Otra forma no tan efectva, con mas codigo
  //var vector_fil= array.filter(function(palabra) { if(palabra[0]=="a")
//                                                           {
//                                                             return palabra;
//                                                           }
//                                                         });
// return vector_fil;


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
