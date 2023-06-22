var inputTarea = document.getElementById("inputTarea");

var botonAgregar = document.getElementById("botonAgregar");

var contenedorTareas = document.getElementById("ulTareas");

var nuevoBoton = document.createElement("button");

var ul = document.getElementById("ulTareas");

var contador = document.querySelector("#contador");

var suma = 0










// console.log("etiqueta", nuevaTarea);

function elementoRepetido(text) {
    const tasks = document.querySelectorAll("li label")
    for (let i = 0; i < tasks.length; i++) {
        //         
        if (tasks[i].textContent.toLowerCase() === text.toLowerCase()) {
            alert("tarea repetida");
            return true;
        }

    }
    return false;
}


function agregar() {

    console.log(inputTarea.value);
    console.log(contador)


    var textoTarea = inputTarea.value;

    if (textoTarea.trim() == "") {
        alert("No hay texto")
        return;

    }

    else if (elementoRepetido(textoTarea) == true) {
        alert("tarea repetida")
        return;

    }

    else {

        // ---- se crea los elementos que se an a utilizar -----
        var li = document.createElement("li");

        var check = document.createElement("input");
        check.setAttribute("type", "checkbox");

        var label = document.createElement("label");
        label.innerHTML = textoTarea;

        var btnEliminar = document.createElement("button");
        btnEliminar.id = "secTrash"

        var spanTrash = document.createElement("span")
        spanTrash.classList.add("trash")

        var spanChild = document.createElement("span")

        var iTrash = document.createElement("i")
        spanTrash.appendChild(spanChild)
        spanTrash.appendChild(iTrash)

        btnEliminar.appendChild(spanTrash)
        // btnEliminar.innerText = "Eliminar";
        //     <button id="secTrash">
        //     <span class="trash">
        //         <span></span>
        //         <i></i>
        //       </span>
        //   </button>


        // ----- se agregan los elements al contenedor ul ----

        ul.appendChild(li);

        li.appendChild(check);
        li.appendChild(label);
        li.appendChild(btnEliminar);


        inputTarea.value = "";
        inputTarea.focus();S
    }

    function generateRandomPastelColor() {
        var max = 280
        var min = 350
        var hue = Math.floor(Math.random() * (max - min + 10)) + min;
        var pastelColor = 'hsl(' + hue + ', 60%, 80%)';
        return pastelColor;
    }
    li.style.backgroundColor = generateRandomPastelColor();


    btnEliminar.addEventListener("click", function () {
        var itemChecked = btnEliminar.parentElement;
        if (confirm("¿Desea eliminar la tarea?")) {
            ul.removeChild(itemChecked)
            countTareas();
        }
    })

    check.addEventListener("click", function (event) {
        var itemChecked = event.target.checked;
        console.log("texto", event.target.checked)
        if (itemChecked == true) {
            suma++
            console.log(suma)

            contador.innerHTML = suma
        }
        else {
            suma--
            console.log(suma)

            contador.innerHTML = suma

        }



        // alert("estoy marcada")
        // if (confirm("¿Desea eliminar la tarea?")) {
        //     ul.removeChild(itemChecked)
        // }


    })




    function countTareas() {
        var ulList = document.querySelectorAll("li")
        console.log("tareas=", ulList.length);
        var mensaje = document.getElementById("mensaje");

        if (ulList.length > 0) {
            mensaje.classList.add("mensajeHide");
        }
        else {
            mensaje.classList.remove("mensajeHide");
        }

    }
    countTareas();





};




function verificarTecla(event) {
    var tecla = event.keyCode
    if (tecla == 13) { agregar() };
}
function deleteAll() {
    ul.innerHTML = ""
    mensaje.classList.remove("mensajeHide");


}

botonAgregar.addEventListener("click", agregar, elementoRepetido);
inputTarea.addEventListener("keyup", verificarTecla);
var deleteAllbtn = document.getElementById("deleteAllBtn")
deleteAllbtn.addEventListener("click", deleteAll)

