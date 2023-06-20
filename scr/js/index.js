var inputTarea = document.getElementById("inputTarea");

var botonAgregar = document.getElementById("botonAgregar");

var contenedorTareas = document.getElementById("ulTareas");

var nuevoBoton = document.createElement("button");

var ul = document.getElementById("ulTareas");

var contador = document.querySelector("#contador");

var suma = 0









// console.log("etiqueta", nuevaTarea);



function agregar() {

    console.log(inputTarea.value);
    console.log(contador)


    var textoTarea = inputTarea.value;

    if (textoTarea.length == 0) {
        alert("No hay texto")
        return;

    } else {

        // ---- se crea los elementos que se an a utilizar -----
        var li = document.createElement("li");

        var check = document.createElement("input");
        check.setAttribute("type", "checkbox");

        var label = document.createElement("label");
        label.innerHTML = textoTarea;

        var btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";



        // ----- se agregan los elements al contenedor ul ----

        ul.appendChild(li);

        li.appendChild(check);
        li.appendChild(label);
        li.appendChild(btnEliminar);


        inputTarea.value = "";
        inputTarea.focus();
    }


    btnEliminar.addEventListener("click", function () {
        var itemChecked = btnEliminar.parentElement;
        if (confirm("¿Desea eliminar la tarea?")) {
            ul.removeChild(itemChecked)
            countTareas();
        }
    })

    check.addEventListener("click", function (event) {
        var itemChecked = event.target.checked;
        console.log("texto",event.target.checked)
        if(itemChecked == true){suma++
            console.log(suma)

            contador.innerHTML = suma
        }
        else{suma--
            console.log(suma)

            contador.innerHTML = suma
            
        }
        


        // alert("estoy marcada")
        // if (confirm("¿Desea eliminar la tarea?")) {
        //     ul.removeChild(itemChecked)
        // }
        
        
    })

    



    function countTareas(){
        var ulList= document.querySelectorAll("li")
        console.log ("tareas=", ulList.length);
        var mensaje = document.getElementById("mensaje");

        if(ulList.length > 0){
            mensaje.classList.add("mensajeHide");
        }
        else{
            mensaje.classList.remove("mensajeHide");
        }

    }
    countTareas();

    
};

function verificarTecla(event){
    var tecla = event.keyCode
    if (tecla == 13){agregar()};
}

botonAgregar.addEventListener("click", agregar);
inputTarea.addEventListener("keyup", verificarTecla);


