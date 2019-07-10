function mostrar()
{
//tomo la edad  
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if (edad < 18)
    {
        if(edad >= 13 && edad <= 17){

            alert("sos un adolecente");
        }
        else
        {
            alert("sos un niño");
        }
    }
    else
    {
        alert("Sos un adulto");
    }



}//FIN DE LA FUNCIÓN