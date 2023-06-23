

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
        if (tasks[i].textContent.toLowerCase().trim() === text.toLowerCase().trim()) {
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
        alert("You have not added text")
        return;

    }

    else if (elementoRepetido(textoTarea) == true) {
        alert("you already add this taks")
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


        // ----- se agregan los elements al contenedor ul ----

        ul.appendChild(li);

        li.appendChild(check);
        li.appendChild(label);
        li.appendChild(btnEliminar);

        check.addEventListener("change", contarChecks);


        inputTarea.value = "";
        inputTarea.focus();
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
        if (confirm("Do you want to delete this task?")) {
            var checkbox = itemChecked.querySelector("input")
            console.log(checkbox)
            if (checkbox.checked == true) {
                suma = suma - 1;
                contador.textContent = suma;
            }
            ul.removeChild(itemChecked)
            countTareas();
        }
    })



    function contarChecks(event) {
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


    }




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
    suma = 0;
    contador.textContent = suma;
    countTareas();
}






botonAgregar.addEventListener("click", agregar, elementoRepetido);
inputTarea.addEventListener("keyup", verificarTecla);
var deleteAllbtn = document.getElementById("deleteAllBtn")
deleteAllbtn.addEventListener("click", deleteAll)



