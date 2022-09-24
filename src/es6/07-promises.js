const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("hey!!");
        } else {
            reject ( "whooooops!");
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));

/*
El argumento de la clase Promise es una función que recibe dos parámetros:

* **resolve**: cuando la promesa es resuelta.
* **reject** : cuando la promesa es rechazada.


https://runjs.co/s/e9zODFqc8

*/