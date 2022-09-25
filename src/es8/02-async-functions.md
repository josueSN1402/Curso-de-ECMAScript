# ES8: funciones asíncronas
En ECMAScript 2017 o ES8 fue añadida una nueva forma de manejar el asincronismo en JavaScript mediante funciones asíncronas.

## Cómo utilizar funciones asíncronas
La función asíncrona se crea mediante la palabra reservada `async` y retorna una promesa.

```js
async function asyncFunction () {...}

const asyncFunction = async () => { ... } 
```

La palabra reservada `await` significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques `try / catch` sirven para manejar si la promesa ha sido resuelta o rechazada.

```js
async function asyncFunction () {
  try {
    const response = await promesa()
    return response
  } catch (error) {
    return error
  }
}
```
[Fuente](https://platzi.com/clases/3504-ecmascript-nuevo/51770-funciones-asincronas/)