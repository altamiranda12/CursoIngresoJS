/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
var sueldo;
var aumento;
var sueldoNuevo;

function mostrarAumento()
{
    sueldo = parseInt(document.getElementById("sueldo").value);

    aumento = sueldo * 0.10;

    sueldoNuevo = aumento + sueldo;

    document.getElementById("resultado").value = sueldoNuevo;

}
