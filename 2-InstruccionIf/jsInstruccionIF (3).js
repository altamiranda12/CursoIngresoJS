function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18){
        alert("Sos mayor de edad");
    }
    else{
        alert("Sos menor de edad");
    }

}//FIN DE LA FUNCIÓN