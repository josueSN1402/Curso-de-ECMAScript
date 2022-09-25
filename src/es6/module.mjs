const hello = () => {
	console.log('Hello!');
}

export default hello;


/*

Recuerden que existen dos tipos de exports/imports

export default myFunction;
export {myFunction};

import myFunction from "./myFunction"
import {myFunction} from "./myFunction"


Default se usa cuando solo devuelves un elemento y no quieres restringir el nombre.
Export const restringe el nombre y ademas te permite devolver multiples funciones o constantes

Fuente: https://platzi.com/comentario/3937286/
*/