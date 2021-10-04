class Pack{
	constructor(name, cantOportunidades, precio){
		this.name = name;
		this.cantOportunidades = cantOportunidades;
		this.precio = precio;
	}
}

const paq = new Pack("pack1", 1, 25);
const paq2 = new Pack("pack2", 3, 70);
const paq3 = new Pack("pack3", 10, 220);

let paquetes = [];


let paquete = prompt(`Escribí "pack1" si queres una oportunidad, "pack2" si queres 3 oportunidades o "pack3" para 10 chances de ganar`);

if(paquete == "pack1"){
	paquetes.push(paq);
} else if(paquete == "pack2"){
	paquetes.push(paq2);
} else if(paquete == "pack3"){
	paquetes.push(paq3);
} else{
	console.log("Este pack no corresponde a nuestra tienda");
}



let seguirComprando = true;

while(seguirComprando == true){
	let validar = prompt(`Quieres comprar otro paquete?`);
	if(validar == "si"){
		let paquete = prompt(`Escribí "pack1" si queres una oportunidad, "pack2" si queres 3 oportunidades o "pack3" para 10 chances de ganar`);
		if(paquete == "pack1"){
			paquetes.push(paq);		
		} else if(paquete == "pack2"){
			paquetes.push(paq2);	
		} else if(paquete == "pack3"){
			paquetes.push(paq3);
		} else{
			console.log("Este pack no corresponde a nuestra tienda");
		}
	} else{
		console.log("No quiso comprar más packs");
		seguirComprando = false;
	}
}


console.log(paquetes);


const paq4 = new Pack("pack4", 10, 80);
const paq5 = new Pack("pack5", 30, 70);
const paq6 = new Pack("pack6", 100, 220)
const paq7 = new Pack("pack7", 32, 1400);
const paq8 = new Pack("pack8", 10, 5);
const paq9 = new Pack("pack9", 35, 8);
const paq10 = new Pack("pack10", 105, 4500);


let paquetesOrdenadosPorPrecio = [paq4,paq5,paq6,paq7,paq8,paq9,paq10];

paquetesOrdenadosPorPrecio.sort((a,b) => {
	if(a.precio > b.precio){
		return -1
	}if(a.precio < b.precio){
		return 1
	}
	});


console.log(paquetesOrdenadosPorPrecio);