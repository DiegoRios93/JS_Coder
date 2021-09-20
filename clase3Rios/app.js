//Bucle para saber si un número es par o impar la cantidad de veces deseada

let numero = 0

do{
numero = prompt("Ingresar Número para saber si es par o impar, si ingresas una letra no podrás seguir");
if (numero % 2 == 0){
alert("El número " +numero+ " es par");
}else if (numero % 2 == 1){
alert("El número "+numero+ " es impar");
}else {
alert("El dato ingresado no es un número")
}
}while (Number(numero));