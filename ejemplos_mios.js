var nombre = "laura";
var edad = 29;

function iprimirNombreMayuscula(n) {
  n = n.toUpperCase();
  console.log(n);
}
iprimirNombreMayuscula(nombre);
console.log(`${nombre} tiene ${edad} años`);
console.log(nombre);

function cuenta(x) {
  let suma = 0;
  for (let i = 0; i <= x; i++) {
    console.log(suma);
    suma += 1;
  }
}
cuenta(5);
//////////////////////////////////

function permuta(num1, num2) {
  console.log(`Los numeros son ${num1} y ${num2}`);
  console.log(
    `Es decir ${num1} ${num2} y permutados quedarian asi ${num2} ${num1}`
  );
}
permuta(2, 3);

//////////////////

function sumaDeDos(x, y) {
  let suma = x + y;
  if (suma < 0) {
    suma = suma * -1;
    return suma;
  }
  return suma;
}
console.log(sumaDeDos(2, -3));

///////////////////////

function numero(x) {
  if (x < 0) {
    console.log(`El numero ${x} es negativo`);
  }
  if (x > 0) {
    console.log(`El numero ${x} es positivo`);
  }
  if (x === 0) {
    console.log(`El numero ${x} es nulo`);
  }
}
numero(2);
numero(-2);
numero(0);

///////////////////////////

function EsPrimo(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return `Este numero NO es primo`;
    }
  }
  return `Este numero es primo `;
}
console.log(EsPrimo(10));
console.log(EsPrimo(29));

////////////////

var primero = { nombre: "Laura", apellido: "Duque", edad: 29 };

var segundo = { nombre: "Jose", apellido: "Garzon", edad: 28 };

function datos(persona) {
  console.log(
    `Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años}`
  );
}
datos(primero);
datos(segundo);

function LetrasEnApellido(persona) {
  var { nombre } = persona;
  console.log(nombre.length);
}

LetrasEnApellido(primero);
LetrasEnApellido(segundo);

////////////////////////////

var segundo = { nombre: "Jose", apellido: "Garzon", edad: 28 };

function cumple(persona) {
  return {
    ...persona,
    edad: 12,
  };
  // persona.edad += 1

  // edad: persona.edad +1;
  // persona.edad += 1;
}

console.log(primero);
console.log(cumple(primero));
console.log(primero);

///////////////////////
// comparando variables y objetos

var primero = {
  nombre: "Laura",
  apellido: "Duque",
  edad: 29,
  peso: 54,
  ingeniero: true,
  cocinero: true,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false,
};

var segundo = {
  nombre: "Jose",
  apellido: "Garzon",
  edad: 29,
  peso: 70,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: true,
  drone: true,
};

function profesion(persona) {
  console.log(`${persona.nombre} es: `);
  if (persona.ingeniero) {
    console.log("Ingeniero");
  }
  if (persona.cocinero) {
    console.log("Cocinero");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.dj) {
    console.log("Dj");
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
  if (persona.drone) {
    console.log("Piloto de drone");
  }
}

function MayorEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

profesion(primero);
profesion(segundo);

MayorEdad(primero);
MayorEdad(segundo);

///////////////////////////////////////////////////////

// funcion mayor de edad con arrow function

const May_arrow = ({ edad }) => edad > 18; // esto esta diciendo que retorne true si el valor dentro de la propiedad edad
// es mayor a 18 o false si el valor es menor a 18

console.log(May_arrow(primero));
console.log(May_arrow(segundo));

//////////////////// for ... vamos a hacer un ejepmlo donde la persona durante 365 dias va a realizar deporte o a comer chatarra y con eso
///////////////////         pierde o gana peso

console.log(`


Al inicio del año ${primero.nombre} pesa ${primero.peso} kg`);
console.log(`Al inicio del año ${segundo.nombre} pesa ${segundo.peso} kg`);

const aumenta_peso = (x) => (x.peso += 0.2);
const pierda_peso = (x) => (x.peso -= 0.2);

function cambiar_peso(x) {
  for (let i = 0; i <= 365; i++) {
    let ramdom = Math.random();
    if (ramdom < 0.25) {
      aumenta_peso(x);
    } else if (ramdom < 0.5) {
      pierda_peso(x);
    }
  }
}

cambiar_peso(primero);
cambiar_peso(segundo);

console.log(`


Al final del año ${primero.nombre} pesa ${primero.peso.toFixed(2)} kg`);
console.log(
  `Al final del año ${segundo.nombre} pesa ${segundo.peso.toFixed(2)} kg`
);

/////////////////////// whie ... el ejemplo que vamos a manejar es que la persona tiene que bajar 3 kilos y el programa nos tiene que decir
//////////////////////            cuantos dias o cuanto tiempo le toma bajar esos kilos- la probabilidad de que coma y aumente de peso es del 30% y
//////////////////////            de que haga ejercicio es del 40% tambien

function dieta(persona) {
  let dias = 0;
  let x = persona.peso - 3;
  //console.log(x.toFixed(2));
  while (persona.peso > x) {
    let ramdom = Math.random();
    if (ramdom < 0.2) {
      aumenta_peso(persona);
    } else if (ramdom < 0.4) {
      pierda_peso(persona);
    }
    dias += 1;
  }
  console.log(`El peso de ${persona.nombre} ahora es de ${persona.peso}`);
  console.log(`A ${persona.nombre} le tomo ${dias} bajar el peso`);
}

dieta(primero);

////////////// la idea es que el programa me muestre cuantas veces una persona va a ver
//////////////   si un acontecimiento esta pasando o no... en este caso ir a ver si llueve.
//////////// Es decir necesito un contador para saber cuantas veces fue a mirar

const llueve = () => {
  return Math.random() < 0.2;
};

let contemos = () => {
  let contador = 0;

  do {
    contador++;
  } while (!llueve());

  if (contador === 1) {
    console.log(`Fui a ver si llovia una vez`);
  } else {
    console.log(`Fui a ver si llovia ${contador} veces`);
  }
};

contemos();

///////////////// voy a decirle el Horoscopo al ususario, voy a utilizar el servicio de la nacion

//let horoscopo = prompt("Escribe tu signo para conocer la verdad");

// ``switch (horoscopo) {
//   case "aries":
//   case "Aries":
//     console.log(`21/3 al 20/4

// Sepa que su inconsciente podría llegar a jugarle una mala pasada.
// Tenga cuidado con las palabras que elige para expresar lo que siente,
// ya que podría salir lastimado.`);
//     break;

//   case "tauro":
//   case "Tauro":
//     console.log(`21/4 al 21/5

// En este día, sus poderes perceptivos estarán muy afinados.
// Aproveche y utilícelos para ayudar a alguien que atraviesa
// un mal momento y necesita ayuda.`);
//     break;

//   case "Géminis":
//   case "géminis":
//   case "Geminis":
//   case "geminis":
//     console.log(`22/5 al 21/6

// Si usted pretende cumplir con todos los objetivos, tenga en cuenta que los mismos deben estar relacionados con sus emociones.
// Déjese guiar por su instinto.`);
//     break;

//   case "Cancer":
//   case "Cáncer":
//   case "cancer":
//   case "cáncer":
//     console.log(`22/6 al 23/7

// Actúe con cuidado y manténgase en alerta, ya que deberá estar prevenido frente a su pasado durante la jornada.
// Alguien aparecerá y podrá desorientarlo.`);
//     break;

//   case "Leo":
//   case "leo":
//     console.log(`24/7 al 23/8

// Sepa que la lucidez mental le permitirá encontrar las soluciones. Tendrá que comunicarse con
// varias personas para resolver esos temas difíciles e insólitos.`);
//     break;

//   case "Virgo":
//   case "virgo":
//     console.log(`24/8 al 23/9

// Esté atento, ya que podrá recibir en este día diferentes críticas en torno a sus reacciones emocionales.
// Debería escucharlas y así podrá mejorar en las relaciones.`);
//     break;

//   case "Libra":
//   case "libra":
//     console.log(`24/9 al 23/10

// Intente ser más responsable con sus decisiones y no acuse a los demás de sus propios errores.
// Comience a trabajar para solucionarlos y no recaer en ellos`);
//     break;

//   case "Escorpio":
//   case "escorpio":
//     console.log(`24/10 al 22/11

// Durante esta jornada, su vida social tomará otro rumbo, ya que contará con la presencia de nuevos compromisos.
// Aproveche, y su entusiasmo se potenciará.`);
//     break;

//   case "Sagitario":
//   case "sagitario":
//     console.log(`23/11 al 22/12

// Cuando se relacione, trate de no mostrarse soberbio y altanero con su entorno.
// Renuncie a sus aires de grandeza porque estaría revelando su inseguridad`);
//     break;

//   case "Capricornio":
//   case "capricornio":
//     console.log(`23/12 al 20/12

// Durante la mañana evite tomar cualquier decisión importante, ya que podría arrepentirse más
// adelante y sepa que no tendrá retorno. Actúe con cuidado`);
//     break;

//   case "Acuario":
//   case "acuario":
//     console.log(`21/1 al 19/2

// Respete todos los deseos en cada momento y en las circunstancia que vive.
// Sepa que hacer siempre lo que los demás esperan de usted podría llegar a agotarlo`);
//     break;

//   case "Piscis":
//   case "piscis":
//     console.log(`20/2 al 20/3

// Entienda que ya es hora de tomar esa determinación sin demorarse más tiempo.
// Sepa que no será conveniente que deje para mañana lo que desea hacer.`);
//     break;

//   default:
//     console.log(`El dato no es un signo. Por favor vuelva a intentarlo`);
//     break;
// }

///////////////////////// voy a ser un arry que contiene uns datos guardados en objetos, tengo mostrar los que sean mayor de edad en una lista
/////////////// que muestre el nombre, el apellido, la edad y la ocupacion.

let Primero = {
  nombre: "Laura",
  apellido: "Duque",
  edad: 29,
  ocupacion: "Ingeniera que es super cool",
  altura: 1.61,
};
let Segundo = {
  nombre: "Paula",
  apellido: "Duque",
  edad: 8,
  ocupacion: "Mandona sobre el orden publico",
  altura: 1.57,
};
let Tercero = {
  nombre: "Melissa",
  apellido: "Duque",
  edad: 3,
  ocupacion: "Descontrola el orden publico",
  altura: 1.58,
};
let Cuarto = {
  nombre: "Jose",
  apellido: "Garzon",
  edad: 28,
  ocupacion: "Arquitecto Guapo",
  altura: 1.8,
};

let personas = [Primero, Segundo, Tercero, Cuarto];

console.log(`
La gente cool es:
`);
for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad >= 18) {
    console.log(
      `${personas[i].nombre} ${personas[i].apellido} tiene ${personas[i].edad} años y se dedica a ser ${personas[i].ocupacion} `
    );
  }
}

console.log(`
La gente NO cool es:
`);
for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad < 18) {
    console.log(
      `${personas[i].nombre} ${personas[i].apellido} tiene ${personas[i].edad} años y se dedica a ser ${personas[i].ocupacion} `
    );
  }
}

let altos = (personas) => {
  return personas.altura > 1.6;
};

// let x = personas.filter(altos);
// console.log(x);
// for (let k = 0; k <= x.length; k++) {
//   console.log(
//     ` ${x[k].nombre} Es una de las personas altas del grupo pues mide ${x[k].altura} m `
//   );
// } ///////////////// aqui debo preguntar porque me salta error y dice que no se puede leer una propiedad indefinida en este caso nombre y altura
////////// pero si me la escribe y  me arroja el resultado

//////////paraa este ejercicio voy a transformar la altura de las personas de m a cm
console.log(`

`);

// const cambioloAlto = (persona) => {
//   return (persona.altura *= 100);
// };
// let cambiandoAltura = personas.map(cambioloAlto);

// console.log(cambiandoAltura);
// console.log(personas);
// console.log(cambioloAlto);

const cambioloAlto = (persona) => {
  return {
    ...persona,
    altura: persona.altura * 100,
  };
};

let cambiandoAltura = personas.map(cambioloAlto);

console.log(cambiandoAltura);
console.log(personas);
console.log(cambioloAlto);

console.log(`



Ejemplo del Reduce ..... Voy a agregar la clave "Cantidad de libros" con una instruccion y luego si aplicare el reduce 

`);

/////////// ejemplo del reduce

for (let i = 0; i < personas.length; i++) {
  personas[i].nuevaKey = "libros";
}
console.log(personas);

for (let j = 0; j < personas.length; j++) {
  personas[j].nuevaKey = Math.round(Math.random() * 100);
}
console.log(personas);

///// voy a agregar el reduce para sumar la cantidad de libros que tienen todos los integrantes de personas

const Total = (acum, persona) => {
  return acum + persona.nuevaKey;
};

var CantidadLibros = personas.reduce(Total, 0);

console.log(
  `El total de libros que tienen todo el grupo de personas es de ${CantidadLibros}`
);

console.log(
  `
  
  `
);

/////////////// clases ....
////////  crear un prototipo que va a ser el prototipo de persona que va a saber saludar
//////// decir su nombre y su apellido.
/// voy a agrepar la edad por funcion para que pueda ser ingresada a cualquier persona
/// luego agrago una funcion que ademas agraga la altura de la persona al objeto de ella.
console.log(
  `
  
  `
);
/// voy a darle los prototipos de el ejercicio gente,
/// que el prototipo desarrollador tenga la herencia prototipal o herede de gente

function heredaDe(prototipoHijo, prototipoPadre) {
  //aqui le vamos a decir al prototipo hijo, quien es su prototipo padre
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  prototipoHijo.prototype.constructor = prototipoHijo; // esta linea es indispensable porque si no se hace la funcion llamara al constructor del paadre
}

function gente(nombre, apellido, ocupacion) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.ocupacion = ocupacion;
}

gente.prototype.saludar = function () {
  console.log(
    `Hola mi nombre es ${this.nombre} ${this.apellido} y soy ${this.ocupacion}`
  );
};

gente.prototype.edad = function (Edad) {
  this.edad = Edad;
  console.log(`Soy ${this.nombre} y tengo ${this.edad} años`);
};

gente.prototype.altura = function () {
  let altura = Math.round(Math.random()) * 100 + 100;
  this.altura = altura;

  if (altura < 1.6) {
    console.log(`${this.nombre} mide ${this.altura} cm es una persona baja`);
  } else {
    console.log(`${this.nombre} mide ${this.altura} cm es una persona alta`);
  }
};
let gente_1 = new gente("Laura", "Duque", "Ingeniera");
let gente_2 = new gente("Paula", "Duque", "Arquitecta");
let gente_3 = new gente("Melissa", "Duque", "Productora");

gente();
console.log(gente_1);

gente_1.saludar();
gente_2.edad(25);
gente_3.altura();

console.log(gente_2);
console.log(gente_3);

console.log(`

`);
// Herencia prototipal... vamos a crear un hijo de mi prototipo gente... vamos a crear nuevas personas con una nueva ocupacion ...
// para este ejemplo desarrolladores.

// manera antigüita

function desarrollador(nombre, apellido, ocupacion) {
  // esta es la funcion que se va a ejecutar cuando cree desarrolladores
  this.nombre = nombre;
  this.apellido = apellido;
  this.ocupacion = ocupacion;
}

desarrollador.prototype.saludar = function () {
  console.log(
    `Hola soy ${this.nombre} ${this.apellido} y soy un ${this.ocupacion}`
  );
};

heredaDe(desarrollador, gente);

let maribel = new desarrollador("maribel", "madrigal", "desarrolladora");
let antonio = new desarrollador("antonio", "madrigal", "desarrollador");
let bruno = new desarrollador("bruno", "madrigal", "desarrollador");

maribel.saludar();
antonio.edad(9);
bruno.altura();

console.log(maribel);
console.log(bruno);
console.log(`

`);
// el codigo de arriba es la forma de hacer la erencia prototipal a la antigüita

// voy a hacer el ejercicio de herencia prototipal con clases. Con un ejemplo inventado con mascotas.

class Mascotas {
  constructor(nombre, tipo, raza, propietario) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.raza = raza;
    this.propietario = propietario;
  }
  presentar(x) {
    if (
      this.propietario.charAt(this.propietario.length - 1) === "a" ||
      "e" ||
      "i"
    ) {
      console.log(
        `Hola ${this.nombre} es un ${this.raza}, es un animal domestico y su dueña es ${this.propietario}  `
      );
    } else {
      console.log(
        `Hola ${this.nombre} es un ${this.raza}, es un animal domestico y su dueño es ${this.propietario} `
      );
    }
    if (x) {
      x(this.nombre, this.raza, false);
    }
  }

  edad(edad) {
    this.edad = edad;
    console.log(
      `${this.nombre} es un ${this.tipo} que tiene ${this.edad} años`
    );
  }

  peso() {
    let peso = Math.round(Math.random() * 100);
    this.peso = peso;
    if (peso < 51) {
      console.log(
        `${this.nombre} pesa ${this.peso} kg. Su peso esta en un rango saludable`
      );
    }
    if (peso >= 51) {
      console.log(
        `${this.nombre} pesa ${this.peso} kg. Su peso esta por encima de un rango saludable. Esta en sobre peso.`
      );
    }
  }
}

let Drago = new Mascotas("Drago", "canino", "Pitbull", "Laura");
let Roccu = new Mascotas("Roccu", "canino", "Pastor Aleman", "Jose");
let Hipo = new Mascotas("Hipo", "felino", "criolla", "paula");
let Pato = new Mascotas("Pato", "Porcino", "vietnamita", "Melissa");

Drago.presentar();
Roccu.edad(3);
Hipo.peso();
Pato.presentar();
Pato.edad(2);
Pato.peso();

console.log(Pato);
console.log(`

`);

// clase que hereda de otra
console.log(`ejercicio donde la Clase granja, heredara de la Clase Mascotas.
Los metodos seran los mismos, menos presentar que sera pisado ya que este mensaje dira que son animales salvajes`);
console.log(`

`);

class animales_salvajes extends Mascotas {
  constructor(nombre, tipo, raza, propietario) {
    super(nombre, tipo, raza, propietario);
  }

  presentar(x) {
    if (this.nombre.charAt(this.nombre.length - 1) === "a" || "e" || "i") {
      console.log(
        `${this.nombre} es una ${this.raza} es decir un ${this.tipo} y se encuentra preservada en en el zoologico ${this.propietario}`
      );
    } else {
      console.log(
        `${this.nombre} es un ${this.raza} es decir un ${this.tipo} y se encuentra preservado en en el zoologico ${this.propietario}`
      );
    }
    if (x) {
      x(this.nombre, this.raza, true);
    }
  }
}

console.log(`ejercicio de una funcion que pasa por parametro. En este caso la funcion responder, 
respondera el saludo de los animales diciendo si es una animal domestico o salvaje. 

`);

function responder(nombre, raza, esSalv) {
  if (esSalv === false) {
    console.log(`${nombre} es un animal domestico porque es un ${raza} `);
  }
  if (esSalv === true) {
    console.log(`${nombre} es un animal salvaje porque es un ${raza} `);
  }
}
let Pantera = new animales_salvajes("Lola", "felino", "pantera", "Zootopia");
let Leon = new animales_salvajes(
  "Marco",
  "felino",
  "león de Katanga o Angola",
  "zootopia"
);

Drago.presentar(responder);
Roccu.presentar();
Pantera.presentar(responder);
Leon.presentar();
Pantera.edad(4);
Pantera.peso();
//////////////////////////////////
