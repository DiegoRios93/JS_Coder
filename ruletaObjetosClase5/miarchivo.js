//Comenzemos con entidad, primero la entidad tablero y luego la entidad jugador


class Ruleta{
	constructor(roulette,casillaEsp,game){
		this.roulette = roulette;
		this.casillaEsp = casillaEsp;
		this.game = game;
	}
}

class Jugador{
	constructor(nombre,casilla){
		this.nombre = nombre;
		this.casilla = casilla;
	}
	girarRuleta(min, max){
	max = max + 1;
	return Math.floor(Math.random() * (max - min) + min);
	}
}



//Creamos las constantes ahora, atraves de la clase creamos el objeto

const juegoDeLaRuleta = new Ruleta({valorMin:1, valorMax:500},
273,
true);

const jugador = new Jugador("Diego",0);



let paquete = prompt(`Escribí "pack1" si queres una oportunidad, "pack2" si queres 3 oportunidades o "pack3" para 10 chances de ganar`);

//Ahora creamos nuestra función

const iniciarGame = () => {
	let i = 0;
	if(paquete == "pack1"){
		while(i < 1){
			i++;
			jugador.casilla = jugador.casilla + jugador.girarRuleta(juegoDeLaRuleta.roulette.valorMin, juegoDeLaRuleta.roulette.valorMax)
			if(jugador.casilla == 273){
			console.log(`${jugador.nombre}, el número que te tocó es ${jugador.casilla} ganaste el premio mayor, 1 BTC es tuyo.`);
			juegoDeLaRuleta.game = false;
			break
			
			} else{
			console.log(`${jugador.nombre}, te tocó el número ${jugador.casilla} fallaste, sigue intentando, si te quedaste sin intentos adquiere otro pack.`);
			
			}
			jugador.casilla=0;
		}
	}
	if(paquete == "pack2"){
		while(i < 3){
			
			i++;
			jugador.casilla = jugador.casilla + jugador.girarRuleta(juegoDeLaRuleta.roulette.valorMin, juegoDeLaRuleta.roulette.valorMax)
			if(jugador.casilla == 273){
			console.log(`${jugador.nombre}, el número que te tocó es ${jugador.casilla} ganaste el premio mayor, 1 BTC es tuyo.`);
			juegoDeLaRuleta.game = false;
			break
			
			} else{
			console.log(`${jugador.nombre}, te tocó el número ${jugador.casilla} fallaste, sigue intentando, si te quedaste sin intentos adquiere otro pack.`);
			}
			jugador.casilla=0;
		}
	}
	if(paquete == "pack3"){
		while(i < 100){
			
			i++;
			jugador.casilla = jugador.casilla + jugador.girarRuleta(juegoDeLaRuleta.roulette.valorMin, juegoDeLaRuleta.roulette.valorMax)
			if(jugador.casilla == 273){
			console.log(`${jugador.nombre}, el número que te tocó es ${jugador.casilla} ganaste el premio mayor, 1 BTC es tuyo.`);
			juegoDeLaRuleta.game = false;
			break
			
			} else{
			console.log(`${jugador.nombre}, te tocó el número ${jugador.casilla} fallaste, sigue intentando, si te quedaste sin intentos adquiere otro pack.`);
			}
			jugador.casilla=0;
		}
	}
	
}

iniciarGame();