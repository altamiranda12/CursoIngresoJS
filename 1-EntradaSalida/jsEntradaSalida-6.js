/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    var num3;

    num1 = parseInt(document.getElementById("numeroUno").value);

    num2 = parseInt(document.getElementById("numeroDos").value);

    num3 = num1 + num2;

    alert("el resultado es " + num3);


}

