/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var num1;
var num2;
var num3;

function sumar()
{	
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    num3 = num1 + num2;
    alert("el resultado es " + num3);
}

function restar()
{
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    num3 = num1 - num2;
    alert("el resultado es " + num3);
}

function multiplicar()
{ 
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    num3 = num1 * num2;
    alert("el resultado es " + num3);
}

function dividir()
{
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    num3 = num1 / num2;
    alert("el resultado es " + num3);
}

