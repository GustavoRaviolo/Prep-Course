// No cambies los nombres de las funciones.

const { join } = require("@11ty/eleventy/src/TemplatePath");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let capacidad_array;
  capacidad_array=array.length-1;
  return array[capacidad_array];
 
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
for(let i=0;i<array.length;i++)
{
  array[i]=array[i]+1;
}
return array;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
return palabras.join(" ");
  /*var cadena_concatenada="";
  for (let i=0; i<palabras.length; i++)
  {
     cadena_concatenada= cadena_concatenada+" "+palabras[i];
  }
  return cadena_concatenada;*/


}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 for(let i=0;i<array.length;i++)
  {
    if(array[i]===elemento)
    {
      return true;
    }
  } // Fin for
  return false;

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for (let i=0; i<numeros.length;i++)
  {
    suma=suma+numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sum=0;
  for(let j=0;j<resultadosTest.length;j++)
  {
    sum=sum+resultadosTest[j];
  }
  
  return(sum/resultadosTest.length);
  

}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //return Math.max(numeros);

  let mayor=0;
  for(let i=0;i<numeros.length;i++)
  {
      if(numeros[i]>mayor) mayor=numeros[i];
  }
  return mayor;


}


function multiplicarArgumentos() {

  // Cuando se llama a la funcion de envian los parametros.
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  // arguments es un objeto no un array
  // arguments.length-> El número de argumentos que se pasaron a la función.
  if(arguments.length===0) return 0; // objeto arguments -> es un tipo especial de datos que se genera en el interior de cada función recogiendo todos los parámetros (argumentos) que se han enviado a la misma.
  if (arguments.length===1) return arguments[0];
  let producto=1;
  for(let i=0;i<arguments.length;i++)
    {
      producto=producto*arguments[i];
    }
    return producto;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador=0;
  for(i=0;i<arreglo.length;i++)
  {
    if(arreglo[i]>18)
    {
      contador+=1;
    }
  }
  return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  //if (numeroDeDia===1 || numeroDeDia===7) return "Es fin de semana";
  
  switch (numeroDeDia)
  {
      case 1: return "Es fin de semana";
      case 2:return "Es dia Laboral";
      case 3:return "Es dia Laboral";
      case 4:return "Es dia Laboral";
      case 5:return "Es dia Laboral";
      case 6:return "Es dia Laboral";
      case 7:return "Es fin de semana";
      default: return "Dato Incorrecto";
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let cadena=n.toString(); // convierte el valor numerico en un string
  if(cadena.charAt(0)==="9") // charAt() muestra la letra de la posicion que le indicamos, en este caso la posicion cero o sea la primera
    return  true;
  else
    return false
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var contador=0;
  for(let i=0;i<1;i++)
  {
      for(let j=0;j<arreglo.length;j++)
      {
        if(arreglo[i]===arreglo[j])
        {
          contador+=1;
        }
      }
  }
  
  if (contador===arreglo.length) 
    return true;
  else  
    return false; 
  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var nvo_array=[];
  for(let i=0;i<array.length;i++)
  {
    switch (array[i])
    {
      case "Enero": 
              nvo_array.push(array[i]); 
              break;
      case "Marzo":
              nvo_array.push(array[i]);
              break;
      case "Noviembre":
                nvo_array.push(array[i]);
                break;
      } // Fin switch
  }
  if(nvo_array.length===3) 
  return nvo_array;
  else
  return "No se encontraron los meses pedidos"
}
//ALTERNATIVA Usando If
/*var array_meses_nvo=[];
  for(let i=0;i<array.length;i++)
  {
    if(array[i]==="Enero")
    {
      array_meses_nvo.push(array[i]);
    }
    else if (array[i]==="Marzo")
    {
      array_meses_nvo.push(array[i]);
    }
    else if (array[i]==="Noviembre")
    {
      array_meses_nvo.push(array[i]);
    }
  }

  if (array_meses_nvo.length==3)
  {
    return array_meses_nvo;
  }
  else return "No se encontraron los meses pedidos";
*/
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var nuevo_array=[];
for (i=0;i<array.length;i++)
{
  if(array[i]>100)
  {
      nuevo_array.push(array[i]);
  }

}
 return nuevo_array;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var nvo_array_valor=[];
var suma=numero;
var cant_iteraciones=0;
  while(cant_iteraciones<10)
{
  suma=suma + 2;

  if(cant_iteraciones===suma)
      break;
  else
    {
        nvo_array_valor.push(suma);
        cant_iteraciones+=1;
   }
}// Fin while

if (cant_iteraciones<10)
    return "Se interrumpió la ejecución";
  else
    return nvo_array_valor;
}// Fin function


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
array_nvo_valor=[];
let valor=0;
valor=numero+2;
for(i=1;i<10;i++)
{
array_nvo_valor.push(valor);
valor=valor+2;
  if (i===5) continue;
}
return array_nvo_valor;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
