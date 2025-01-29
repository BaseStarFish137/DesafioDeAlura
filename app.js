let ArrayAmigos = [];//Arreglo donde se almacenan los nombres
//La variable lista almacena el "string" de la etiqueta con id "listaAmigos"
let lista = document.getElementById("listaAmigos");

function agregarAmigo(){ //Funcion "on click" para el boton de agregarAmigo
    let nombre = document.getElementById("amigo").value;

    if(nombre == ""){ //condicional if para verificar si se dejo en blanco o no el input.
        window.alert("No se permiten ingresar espacios en blanco.");
    }else{
        //Push para ingresar los nombres y llamado de la funcion
        ArrayAmigos.push(nombre);
        limpiarCaja();
        lista.innerHTML = ""; //Deja el espacio en blanco antes de escribir el nombre
    
        for(let i = 0 ; i < ArrayAmigos.length; i++){ //Se recorre el arrelgo para insertar los nombres
            const nuevoElemento = document.createElement('li'); //se crea un nuevo elemento
            nuevoElemento.textContent = ArrayAmigos[i]; // se inserta el nombre en el elemento
            lista.appendChild(nuevoElemento); // se inserta el elemento li en la lista
        }
    }
    return;
}

function sortearAmigo(){ //Funcion "on click" para el boton de sortearAmigo
    if(ArrayAmigos.length === 0){ //se verifica que el Array no este vacio
            window.alert("No se permite sortear si no hay ningun nombre almacenado");
            return false;
    }else{
        j = (Math.floor(Math.random() * ArrayAmigos.length)); //Selecciona un nombre aleatorio
        lista.innerHTML = "";
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = ArrayAmigos[j]; //Esta vez el indice es "j" que es nuestro indice aleatorio
        lista.appendChild(nuevoElemento);

        console.log(ArrayAmigos[j]); //Verificacion extra en consola
        return true;
    }
}
//Esta funcion toma la etiqueta con el id "amigo" y cambia su valor a "", cada vez que se agrega un nombre
function limpiarCaja(){
    document.getElementById("amigo").value = "";
}
//Llamado de funciones
sortearAmigo();
agregarAmigo();
limpiarCaja();