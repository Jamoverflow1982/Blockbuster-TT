function enviarForm(){
    console.log("Ingreso a la funcion validacion")
    let cont = 0;
    let nombreF = document.getElementById('nombre');
    nombreF = nombreF.value;
    if (nombreF===""){
        alert("Falta SU Nombre!");
        cont++;
    };

    let apellidoF = document.getElementById('apellido');
    apellidoF = apellidoF.value;
    if (apellidoF===""){
        alert("Falta SU Apellido!");
        cont++;
    };

    let mailF = document.getElementById('mail');
    mailF = mailF.value;
    if (mailF===""){
        alert("Falta SU Mail!");
        cont++;
    };

    let consultaF = document.getElementById('consulta');
    consultaF = consultaF.value;
    if (consultaF===""){
        alert("No escribió ninguna consulta!");
        cont++;
    };

    if (cont==0){alert(nombreF+" SU FORMULARIO FUE ENVIADO CORRECTAMENTE!!!");}

    console.log("Nombre: "+nombreF+" Apellido: "+apellidoF+" Mail: "+mailF);
    console.log("Comentario: "+consultaF);
}
