function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.floor(Math.random() * 10 + 1);

	if(aleatorio < 9){

		if(aleatorio < 4){
			alert(aleatorio + " Vamos, la proxima se puede");
		}

		else{
			alert(aleatorio + " APROBÓ");
		}
	}
	else{
		alert(aleatorio + " EXCELENTE");
	}

}//FIN DE LA FUNCIÓN