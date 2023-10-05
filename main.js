let respuesta_1 = document.getElementById("res_1");
let respuesta_2 = document.getElementById("res_2");
let respuesta_3 = document.getElementById("res_3");
let respuesta_4 = document.getElementById("res_4");
let respuesta_5 = document.getElementById("res_5");
let respuesta_6 = document.getElementById("res_6");
let respuesta_7 = document.getElementById("res_7");
let respuesta_8 = document.getElementById("res_8");
let respuesta_9 = document.getElementById("res_9");
let respuesta_10 = document.getElementById("res_10");
let respuesta_11 = document.getElementById("res_11");
let respuesta_12 = document.getElementById("res_12");

let boton_1 = document.getElementById("btn_1");
boton_1.addEventListener("click", () => {
   let parrafo = document.getElementById("parrafo").value;
   let minusculas = parrafo.toLowerCase();
   minusculas = minusculas.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"']/g, '');
   minusculas = minusculas.replace(/^\s+|\s+$/g, '');
   let palabras = minusculas.split(/\s+/);
   const palabrasUnicas = new Set();
   for (const palabra of palabras) {
      palabrasUnicas.add(palabra);
   }
   const contador = palabrasUnicas.size;
   respuesta_1.innerHTML = "<strong>El Parrafo Tiene: " + contador + " Palabras Unicas.</strong>";
});

let boton_2 = document.getElementById("btn_2");
boton_2.addEventListener("click", () => {
   let contraseña = document.getElementById("contraseña").value;
   let numeroCaracteres = false;
   let tieneMayuscula = false;
   let tieneNumero = false;
   let espaciosEnBlanco = true;
   if (contraseña.length >= 8) {
      numeroCaracteres = true;
   }
   for (const letra of contraseña) {
      if (letra >= 'A' && letra <= 'Z') {
         tieneMayuscula = true;
      } else if (letra >= '0' && letra <= '9') {
         tieneNumero = true;
      }
   }
   if (contraseña.includes(' ')) {
      espaciosEnBlanco = false;
   }
   if (numeroCaracteres === true && tieneMayuscula === true && tieneNumero === true && espaciosEnBlanco === true) {
      respuesta_2.innerHTML = "<strong>La Contraseña: " + contraseña + " Cumple Con Los Criterios.</strong>";
   } else respuesta_2.innerHTML = "<strong>La Contraseña: " + contraseña + " No Cumple Con Los Criterios.</strong>";
});

let boton_3 = document.getElementById("btn_3");
boton_3.addEventListener("click", () => {
   let palabra_1 = document.getElementById("cadena-1").value;
   let palabra_2 = document.getElementById("cadena-2").value;
   palabra_1 = palabra_1.replace(/\s/g, '').toLowerCase();
   palabra_2 = palabra_2.replace(/\s/g, '').toLowerCase();
   if (palabra_1.split('').sort().join('') === palabra_2.split('').sort().join('')) {
      respuesta_3.innerHTML = "<strong>Las Palabras Son Anagramas.</strong>";
   } else {
      respuesta_3.innerHTML = "<strong>Las Palabras No Son Anagramas.</strong>";
   }
});

let boton_4 = document.getElementById("btn_4");
boton_4.addEventListener("click", () => {
   let frase = document.getElementById("cadena-3").value;
   let caracter = document.getElementById("caracter").value;
   frase = frase.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, caracter);
   respuesta_4.innerHTML = "<strong>Frase Reemplazada: " + frase + "</strong>";
});

let boton_5 = document.getElementById("btn_5");
boton_5.addEventListener("click", () => {
   let frase = document.getElementById("cadena-4").value;
   let clave = document.getElementById("clave").value;
   let minusculas = frase.toLowerCase();
   minusculas = minusculas.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"']/g, '');
   minusculas = minusculas.replace(/^\s+|\s+$/g, '');
   if (minusculas.includes(clave)) {
      respuesta_5.innerHTML = "<strong>La palabra: " + clave + " Aparece en la Frase.</strong>";
   } else respuesta_5.innerHTML = "<strong>La palabra: " + clave + " No Aparece en la Frase.</strong>";
});

let boton_6 = document.getElementById("btn_6");
boton_6.addEventListener("click", () => {
   let frase = document.getElementById("cadena-5").value;
   frase = frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"']/g, '');
   let palabras = frase.split(/\s+/);
   let cantidadPalabras = palabras.length;
   respuesta_6.innerHTML = "<strong>La Frase Tiene " + cantidadPalabras + " Palabras.</strong>";
});

let boton_7 = document.getElementById("btn_7");
boton_7.addEventListener("click", () => {
   let frase = document.getElementById("cadena-6").value;
   let fraseInvertida = frase.split('').reverse().join('');
   respuesta_7.innerHTML = "<strong>La Frase Invertida es: " + fraseInvertida + "</strong>";
});

let boton_8 = document.getElementById("btn_8");
boton_8.addEventListener("click", () => {
   const frutas = ["banano", "pera", "manzana", "kiwi", "uva", "fresa", "sandia", "mango"];
   let valorFruta = document.getElementById("cadena-7").value;
   let fruta = valorFruta.toLowerCase();
   if (frutas.includes(fruta)) {
      respuesta_8.innerHTML = "<strong>" + fruta + ", Si Esta en la Lista de Frutas.</strong>";
   } else respuesta_8.innerHTML = "<strong>" + fruta + ", No Esta en la Lista de Frutas.</strong>";
});

let boton_9 = document.getElementById("btn_9");
boton_9.addEventListener("click", () => {
   let cadena = document.getElementById("cadena-8").value;
   let minusculas = cadena.toLowerCase();
   let mayusculas = cadena.toUpperCase();
   respuesta_9.innerHTML = "<strong>Cadena de texto en Mayusculas: " + mayusculas + "<br>" + "Cadena de texto en Minusculas: "
      + minusculas + "</strong>";
});

let boton_10 = document.getElementById("btn_10");
boton_10.addEventListener("click", () => {
   let oracion = document.getElementById("cadena-9").value;
   let palabras = oracion.split(' ');
   for (const palabra of palabras) {
      respuesta_10.innerHTML += "<strong>La palabra " + `"${palabra}"` + " Tiene " + palabra.length + " Caracteres.</strong><br>";
   }
});

let boton_11 = document.getElementById("btn_11");
boton_11.addEventListener("click", () => {
   const numerosEnteros = [2, 4, 1, 6, 8, 5, 12, 16, 22, 34, 50, 42];
   let numerosDuplicados = numerosEnteros.map((numero) => numero * 2);
   respuesta_11.innerHTML = "<strong>ArrayResultante = [" + numerosDuplicados + "]</strong>";
});

const listaPalabras = [];
let boton_12 = document.getElementById("btn_12");
boton_12.addEventListener("click", () => {
   let palabra = document.getElementById("cadena-10").value;
   listaPalabras.push(palabra);
   respuesta_12.innerHTML += "<br>" + palabra;
});
let boton_13 = document.getElementById("btn_13");
boton_13.addEventListener("click", () => {
   const palabrasModificadas = listaPalabras.map((valor) => {
      let resultado = "";
      for (const letra of valor) {
         if (letra === letra.toUpperCase()) {
            resultado += letra.toLowerCase();
         } else {
            resultado += letra.toUpperCase();
         }
      }
      return resultado;
   });
   respuesta_12.innerHTML += "<br><br>" + "Lista de Palabras Modificadas:";
   for (const palabra of palabrasModificadas) {
      respuesta_12.innerHTML += "<br>" + palabra;
   }
});