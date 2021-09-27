//Funciones, desafío obligatorio y complementario juntos
let pack1 = "pack1";
let pack2 = "pack2";
let pack3 = "pack3";



function pagar(cantidad){
	if(cantidad == pack1){
		alert("Tu total a pagar es de 20usd");
	} else if (cantidad == pack2){
		alert("Tu total a pagar es de 50usd");
	} else if (cantidad == pack3){
		alert("Tu total a pagar es de 100usd");
	} else{
		alert("Refresca la página para elegir un pack que corresponda");
	}
}

function comprarPackDeTickets(nombre){
	let cantidad = prompt(`Hola ${nombre} elige un pack para sumar oportunidades en la ruleta, pack1 (una oportunidad), pack2 (3 oportunidades), pack3 (10 oportunidades)`);
	if (cantidad == pack1){
		alert("Tienes una chance de ganar");
	} else if (cantidad == pack2){
		alert("Tienes 3 chances de ganar");
	} else if (cantidad == pack3){
		alert("Tienes 10 chances de ganar");
	} else{
		alert("El pack no corresponde a nuestra tienda")
	}
	pagar(cantidad);
}

function tomarDatos(){
	let nombre = prompt("¿Como te llamas?");
	comprarPackDeTickets(nombre);
}

tomarDatos();




