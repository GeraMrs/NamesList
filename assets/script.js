let nombres = ['Paco', 'Luis', 'Gerardo', 'Carlos'];
//const revnombres = _.shuffle(nombres); // desordenar la lista cada vez
const refreshNames = document.getElementById('refresh');
const submitButton = document.getElementById('submitButton');
const delButton = document.getElementById('submitButtonDel');

///////////////////////////////// Agregar Nombres
submitButton.addEventListener('click', () => {
    const input = document.getElementById('inputNames').value; // toma el valor del input
    nombres.push(input);
    console.log(nombres);

    const ulist = document.getElementById('mostrarNombres');
    const listElement = document.createElement('li');
    ulist.append(listElement);
    listElement.setAttribute('id','liNom');
    listElement.innerText = input;
})

/////////////////////////////////////// Mostrar nombres

const listaEnHTML = () => {
    for (let nombre of nombres){// ciclo for para iterar por cada nombre del arreglo
        const ulist = document.getElementById('mostrarNombres');
        const listElement = document.createElement('li');
        ulist.append(listElement);
        listElement.setAttribute('id',`${nombre}`);
        listElement.innerText = nombre;
    }
}

listaEnHTML();

////////////////////////Eliminar por index

/* TODO: alerta cuando el nombre no exista en el arreglo */

delButton.addEventListener('click', () => {
    const input2 = document.getElementById('inputNamesDel').value -1; // -1 por los indexes que comienzan en 0
    console.log(nombres[input2]); // busca el nombre por posición
    const ulist = document.getElementById(nombres[input2]); // hace que coincida con el html
    ulist.remove(); // borra el elemento html
    nombres.splice(input2, 1); // borra del arreglo
    console.log(nombres);
})

/* TODO: que cambie el color con cada búsqueda */

submitButtonFind.addEventListener('click', () => {
    const input2 = document.getElementById('inputNamesFind').value;
    console.log(input2);

    for (let index in nombres){
        if(nombres[index] === input2){
            const ulist = document.getElementById(nombres[index]);
            ulist.style.color='red';
            console.log(nombres[index]);
        }
    }
    console.log(nombres);
})

/* TODO: subir a Github y dar permisos -> lronquillot (lronquillot@grupofragy.com)*/