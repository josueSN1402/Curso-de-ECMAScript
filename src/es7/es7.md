# Exponentiation operator y array includes
La siguiente versión de ECMAScript fue publicada en 2016. Las siguientes características de ES7 o ES2016 que aprenderás son: el método `includes` de arrays y el operador de potenciación.

## Operador de potenciación
El operador de potenciación (exponential operator) consiste en elevar una base a un exponente utilizando el doble asterisco (`**`).


`base ** exponente`


Por ejemplo, el cubo de 2 es igual a 8, matemáticamente expresado sería: $2^3=8$.

```js
const potencia = 2**3

console.log(potencia) // 8
```


## Método includes
El método `includes` determina si un array o string incluye un determinado elemento. Devuelve true o `false`, si existe o no respectivamente.


Este método recibe dos argumentos:

* El **elemento** a comparar.
* El **índice inicial** desde donde comparar hasta el último elemento.


### Índices positivos y negativos
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de `izquierda a derecha` del array.

```js
[0,1,2,3, ...., lenght-1]

```

Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de `derecha a izquierda`.

```js
[-lenght, ...,  -3, -2, -1]

```

### Ejemplos utilizando el método _includes_

El método `includes` se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.

```js
//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true
```


```js
// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true
```

[Fuente](https://platzi.com/clases/3504-ecmascript-nuevo/51767-cambios-en-ecmascript-7-exponentiation-operator-ar/)


### Includes con objetos
🔗 En objetos también existen formas para saber si existe una propiedad. Estos son:

La palabra reservada `in`
El método de objetos `hasOwnProperty`
El método `Object.hasOwn`, que recibe el objeto y la propiedad a evaluar.

```js
const letras = { a: 1, b: 2, c: 3 }

"a"in letras // true
letras.hasOwnProperty("a") // true
Object.hasOwn(letras, "a") // true
```

El método hasOwnProperty evalúa solamente las propiedades del objeto. Sin embargo puede que colisione con alguna otra propiedad en el prototipo, por lo que la última versión de ECMAScript lanzó Object.hasOwn y se recomienda utilizar este si el navegador en el que trabajas lo soporta: [Can I use?](https://caniuse.com/?search=hasOwn).


```js
const letras = { a: 1, b: 2, c: 3 }

"toString"in letras // true
letras.hasOwnProperty("toString") // false
Object.hasOwn(letras, "toString") // false
```


[Fuente](https://platzi.com/comentario/3944783/)







