const formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //previene el envio del formulario
    console.log("enviando formulario");

    const nombre = document.getElementById("nombre").value.trim();//trim elimina los espacios en blanco
    const apellido = document.getElementById("apellido").value.trim();    
    const mail = document.getElementById("mail").value.trim();
    const consulta = document.getElementById("consulta").value.trim();

    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Mail: " + mail);
    console.log("Consulta: " + consulta);

    const errorNombre = document.getElementById("errorNombre");//Recibe el id y lo guarda en una variable
    const errorApellido = document.getElementById("errorApellido");
    const errorMail = document.getElementById("errorMail");
    const errorConsulta = document.getElementById("errorConsulta");

    let formularioOk = true;//Variable para validar el formulario

    //Validaciones que no esten vacios los campos
    if (nombre == "") {
        errorNombre.classList.remove("d-none");
        formularioOk = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    if (apellido == "") {
        errorApellido.classList.remove("d-none");
        formularioOk = false;
    } else {
        errorApellido.classList.add("d-none");
    }

    if (mail == "") {
        errorMail.classList.remove("d-none");
        formularioOk = false;
    } else {
        errorMail.classList.add("d-none");
    }

    if (consulta == "") {
        errorConsulta.classList.remove("d-none");
        formularioOk = false;
    } else {        
        errorConsulta.classList.add("d-none");
    }

    if (formularioOk) {
        alert("Formulario Enviado");
    }
});