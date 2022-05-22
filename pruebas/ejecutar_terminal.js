
var nombre="Santino";
//var apellido="Raviolo";
console.log("Hola"+" "+nombre);
letra ="A";
letra.toLowerCase();


if (letra.length==1)
  {
      if(letra==="a"  || letra==="e" || letra==="i" || letra==="o" || letra==="u") 
           {
            console.log("Es vocal");
           }
        else
        {
             console.log("Dato incorrecto");
        }
  } 
  else console.log("Dato incorrecto");

// Valor mayor
x=5;
y=7;
  if(x===y)
  
   console.log(x);
  
     else
     {  if(x<y) console.log(y);
               else console.log(x);
     }

     // Ver estado de conexion, si es 1 online si es 2 away

     var st=22;

     if(st!=1 && st!=2)
  {
    console.log("Offline");
  }
  
  if (st===1) 
  {
     console.log("Online");
  }
  else if(st===2) console.log("Away");

  console.log("EJERCICIO SWITCH PARA IDIOMA: ");

  var idioma="aleman";
  switch(idioma)
    {
      case "aleman": 
      console.log("Guten Tag!");
      break;

      case "mandarin":
          console.log("Ni Hao!");
      break;

      case "ingles":
          console.log("Hello!");
      break;

      default:
          console.log("Hola!");
      break;
    }

console.log("Ejercicio es o no un ENTERO");

numero=3;
if(Number.isInteger(numero))
    console.log("El valor es: " +true);
  else 
  console.log("El valor es: " +false);

  
 console.log();
 console.log("Tabla del SEIS: "); 

 var tabla_seis=[]; //Declaracion array vacio.

  for (let i=0;i<10;i++)
  {
    tabla_seis[i]=6*i;
  }
  console.log(tabla_seis);



  console.log();
  console.log("Ejercicio Cantidad de Dígitos: ");
  let num_digito=222;
  //num_digito=Math.floor(num_digito);
  if(num_digito.toString().length===3) // No funciona para numero con coma. toString() convierte a cadena el numero
    console.log("-> SI tiene TRES digitos");
  else  
    console.log("-> NO tiene TRES digitos");

    console.log();
    console.log("Ejercicio Do While: ");
numero=5;
let i=0;
do
{
numero=numero+5;
i=i+1;
} while(i<8);
console.log("Número Incrementado: "+numero);

console.log();
console.log("Ejercicio Ultimo elemento ARRAY");
array=[1,2,3,4,5,6,7,8,33]; // carga del vector
let capacidad_array;
capacidad_array=array.length-1;
console.log(array[capacidad_array]);

console.log();
console.log("Largo de un ARRAY");
console.log(array.length);

console.log();
console.log("Incrementar valores ARRAY por uno");

for(let i=0;i<array.length;i++)
{
  array[i]=array[i]+1;
}
console.log(array);

console.log();
console.log("Agregar al final del ARRAY un elemento");
let elemento=99;
array.push(elemento);
console.log(array);

console.log(array.pop());
console.log(array);

console.log();
console.log("Ejercicio Concatenación STRING: ");
palabras=["Hola","como","estas","?"];
var cadena_concatenada="";
  for (let i=0; i<palabras.length; i++)
  {
     cadena_concatenada= cadena_concatenada+" "+palabras[i];
  }
  console.log(cadena_concatenada);

  console.log();
  console.log("Encontra valor dentro del ARRAY");
  array_ele=["Gustavo","Natalia","Estefano","Santino"];
  var elemento1="Gustavo";
  var bandera=0;
  for(let i=0;i<array_ele.length;i++)
  {
    if(array_ele[i]===elemento1)
    {
      bandera=1;
      console.log("SI se encontro el elemento");
    }
  } // Fin for
  if (bandera===0) console.log("NO se encontro el elemento");

  console.log();
  console.log("Sumar todos los número del ARRAY");
  var suma=0;
  numeros=[3,2,6];
  for (let i=0; i<numeros.length;i++)
  {
    suma=numeros[i]+suma;
  }
  console.log(suma);

  console.log();
  console.log("Promedio de un ARRAY");

resultadosTest=[2,4,6];
let sum_01=0;
for(let j=0;j<resultadosTest.length;j++)
{
  sum_01=sum_01+resultadosTest[j];
}

console.log(sum_01/resultadosTest.length);

console.log();
console.log("Obtener el  MAYOR: ");
let mayor=0;
numero_may=[2,6,1,7,9,8];
for(let i=0;i<numero_may.length;i++)
  {
      if(numero_may[i]>mayor) mayor=numero_may[i];
  }
 console.log(mayor);
 console.log();
console.log("Objeto arguments. Producto de los parametros enviados: ");
var valor;
obj_arguments();
function obj_arguments()
{
if(arguments.length===0)
{ 
  valor=0;
  return false;  // objeto arguments -> es un tipo especial de datos que se genera en el interior de cada función recogiendo todos los parámetros (argumentos) que se han enviado a la misma.

}  

  if (arguments.length===1) 
  {
  valor= arguments[0];
  return valor;
  }
  let producto=1;
  for(let i=0;i<arguments.length;i++)
    {
      producto=producto*arguments[i];
    }
    console.log(producto);
  } // fin function
  console.log(valor);

  console.log();
  console.log("Comprobar si todos los elementos de un ARRAY son iguales");

  arreglo=[1,1,1];
  var largo=arreglo.length;
  console.log("El largo del ARRAY es: "+largo);

  console.log();
  console.log("Encontrar Meses del AÑO: ");
  var nvo_array=[];
  meses_array=["Marzo", "Ene", "Noviembre"];
  for(let i=0;i<array.length;i++)
  {
    switch (meses_array[i])
    {
      case "Enero": 
              nvo_array.push(meses_array[i]); 
              break;
      case "Marzo":
              nvo_array.push(meses_array[i]);
              break;
      case "Noviembre":
                nvo_array.push(meses_array[i]);
                break;
      } // Fin switch
  }
  if(nvo_array.length===3) 
  console.log(nvo_array);
  else
  console.log("No se encontraron los meses pedidos");

  console.log();
  console.log("Valores MAYORES que 100: ");
  var array_valores=[101,23,77,99,144,7];
  var nuevo_array=[];
for (i=0;i<array_valores.length;i++)
{
  if(array_valores[i]>100)
  {
      nuevo_array.push(array_valores[i]);
  }

}
 if(nuevo_array.length===0)
    console.log("NO existe ningun valor mayor a 100");
  else
    console.log("Nuevo ARRAY con los valores mayores a 100: ["+nuevo_array+"]");

    var numero=2;
    console.log();
    console.log("Declaración BREAK: ");
    var cant_iteraciones=6;
    var nvo_array_valor=[];
    
  while(cant_iteraciones<10)
{
  //valor_nvo=numero +2;
  numero=numero + 2;
  nvo_array_valor.push(numero);
  cant_iteraciones+=1;

    if(cant_iteraciones===numero)
      break;

}
console.log(nvo_array_valor);

console.log();
console.log("Ejercicio de statement continue: ");
  var array_nvo=[];
  let contador=0;
  numero=3;
  let suma11=numero;
  while(contador<10)
  {
    if (contador===5)
    {
      continue;
    }
    suma11=suma11+2;
    array_nvo.push(suma11);
    contador+=1;
}
console.log(array_nvo);