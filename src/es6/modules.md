## Exportaciones de código

Archivo math_function.js declaramos una función para sumar dos valores, el cual lo exportaremos.

```js
//math_function.js
export const add = (x,y) => {
    return x + y
}
```

```js
//math_function.js
const add = (x,y) => {
    return x + y
}

export { add, otherFunction, ... }
```

## Importaciones de código

Importamos la función add del archivo math_function.js para utilizarla en un archivo main.js.

```js
// main.js
import { add, otherFunction } from './math_functions.js'

add(2,2) //4
```

Si importamos el módulo con un nombre diferente, existirá un error de sintaxis.


```js
// Erróneo
import { suma } from './math_functions.js'

suma(2,2) //SyntaxError: The requested module '/src/archivo1.js' does not provide an export named 'suma'
```

Para importar todas las funcionalidades de un archivo se utiliza un asterisco (*) y se puede cambiar el nombre para evitar la repetición de variables o funciones a través de la palabra reservada as.

```js
// main.js
import * as myMathModule from './math_functions.js';

myMathModule.add(2,2) //4
myMathModule.otherFunction()
...
```


## Exportaciones por defecto

Si solo UN valor será exportado, entonces se puede utilizar export default. De esta manera no es necesario las llaves {} al exportar e importar.

```js
//math_function.js
export default function add (x,y){
    return x + y;
}
```

Adicionalmente, no se puede usar export default antes de declaraciones const, let o var, pero puedes exportarlas al final.

```js
// ❌ Erróneo
export default const add  = (x,y) => {
    return x + y;
}

// ✅ Correcto
const add  = (x,y) => {
    return x + y;
}

export default add
```


## Importaciones por defecto

Si únicamente un valor será importado, entonces se puede utilizar cualquier nombre en la importación. De esta manera no es necesario las llaves {}.

```js
//Las siguientes importaciones son válidas
import  add  from './math_functions.js'
import  suma  from './math_functions.js'
import  cualquierNombre  from './math_functions.js'
```

Sin embargo, es recomendable utilizar siempre el nombre de la función, para evitar confusiones.


## Combinar ambos tipos de exportaciones e importaciones

Teniendo las consideraciones de importaciones y exportaciones, nombradas y por defecto, entonces podemos combinarlas en un mismo archivo.

```js
// module.js
export const myExport = "hola"
function myFunction() { ... }

export default myFunction

// main.js
import myFunction, { myExport } from "/module.js"
```





