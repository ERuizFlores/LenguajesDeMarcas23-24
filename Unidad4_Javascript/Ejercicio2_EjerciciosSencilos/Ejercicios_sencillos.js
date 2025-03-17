//Ejercicio 1
// Realiza un programa JavaScript que calcule el área y la longitud de una circunferencia de radio pasado como parámetro.


const PI= 3.1416;

let radio, area, longitud;

//parametro
radio=5;

//calculos
area = PI * radio * radio;
longitud = PI * radio * 2;
console.log("El area es "+area+" y la longitud es "+longitud)


//Ejercicio 2
// Investiga el operador ternario y pon ejemplos de su uso.

let carnetDeConducir;

carnetDeConducir = true;

carnetDeConducir = true ? console.log("Puedes pasar.") : console.log ("Multa que te llevas.");


let dinero;

dinero = 0;

dinero >= 0 ? console.log("No tienes deudas.") : console.log("")


//Ejercicio 3
// Ejecuta las siguientes dos líneas de código y comprueba el contenido de la variable var

//Interpreta y explica los resultados:
// var dato = "Ronaldo "+5+5;
// var dato = 5 +5 + " Ronaldo "; 

//para empezar hay que ejecutarlas por separado ya que no puedes declarar la misma variable dos veces

//En la primera línea de codigo el resultado será "Ronaldo 55" el resultado es asi porque empieza con una cadena
//En la segunda línea de codigo el resultado será "10 Ronaldo " el resultado es distinto porque toma los dos primeros numeros y luego ya lo convierte a cadena


//Ejercicio 4
//  El operador typeof permite saber el tipo de una variable. Crea un programa en el que pongas ejemplos de uso.


console.log(typeof radio); //returns number
console.log(typeof PI); //returns number
console.log(typeof carnetDeConducir); //returns boolean


//Ejercicio 5
//  JavaScript puede manejar eventos en una página web para conocer, por ejemplo, cuándo el ratón pasa
// por encima de un elemento. Pon un ejemplo de uso para cada uno de los siguientes eventos:


//en un elemento de html: onMouseOver="mouseOver()" id="colorDeFondo"

function mouseOver(){
    document.getElementById('colorDeFondo').style.backgroundColor = "#000";
}

//en el mismo elemento de html: onMouseOut="mouseOut()" id="colorDeFondo"

function mouseOut() {
    document.getElementById('colorDeFondo').style.backgroundColor = "#fff"
}

//en un elemento de html: onBlur="blur()" id="blur"

function blur(){
    document.getElementById('blur').classList.add("blur");
}


//Ejercicio 6
// Averigua qué resultado darán las siguientes líneas de código:

Number("9 9");
Number("dos");

//devulve NaN porque no reconoce los valores como posibles números


//Ejercicio 7
// Realiza un script que extraiga el mes y el año de una fecha concreta.

let fecha;

fecha = Date(Date.now());

console.log(fecha.prototype.getDate()+" es el día") //devuelve el dia 

console.log(fecha.prototype.getMonth()+" es el mes") //devuelve el mes

console.log(fecha.prototype.getFullYear()+" es el año"); //devuelve el año


//Ejercicio 8
// Pedro, que todavía no ha terminado el ciclo de DAM, se pregunta si puede crear el siguiente array:

var milista = ['enero', 456, [0, 1, 2]];

// También quiere saber si podría seleccionar la siguiente posición del array:
milista[2][2]

//si que puede crear ese array
//Si que puede seleccionar esa posicion

// Comprueba si puede utilizarlo e intenta hacer una pequeña web que muestre todo el contenido del array milista.
function showArray(array){
    for (let i=0; i<array.length; i++){
        if (typeof array[i] != Object){
        console.log(array[i]);
        } else {
            for (let j=0; j<array[i].length; j++){
                console.log(array[i][j]);
            }
        }
    }
}