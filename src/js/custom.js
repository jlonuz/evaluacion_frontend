$(document).ready(function(){
	//con este codigo oculto botón compartir carro
	$("#compartir-carro").hide();
	//con este código oculto div con opciones de vehículos
	$("#elegir-autos").hide();
	//con este código inhabilito el botón buscar
	$('#buscar').attr("disabled", true);

	//esta función habilita botón buscar cuando se selecciona  
	//alguna opción de ambos selects

	$('#ciudad_origen, #ciudad_destino').on('change', function(){
		
		var select_origen = $('#ciudad_origen').val();
		var select_destino = $('#ciudad_destino').val();
		
		if (select_origen == "0" || select_destino == "0"){
      		return;
      	}else{
    		$('#buscar').prop("disabled", false);
 	   	}
 	   
	});

	//Esta función hace que se despliegue div de opciones de
	//vehículos al apretar boton buscar y aparece boton
	//compartir carro

	$("#buscar").on('click', function(){
		$("#elegir-autos").show();
		$("#compartir-carro").show();
		$("#compartir-carro").prop("disabled", true);

	})

	//Array de cuidades

	var cuidades = [
	
	{
		nombre: "Arica",
		distancia: 2059,
	},
	{
		nombre:"Iquique",
		distancia: 1789,
	},
	{
		nombre: "Antofagasta",
		distancia: 1368,
	},
	{
		nombre: "Calama",
		distancia: 1567,
	},
	{
		nombre: "La Serena",
		distancia: 470,
	},
	{
		nombre: "Valparaíso",
		distancia: 116,
	},
	{
		nombre: "Santiago",
		distancia: 0,
	},
	{
		nombre: "Rancagua",
		distancia: 84,
	},
	{
		nombre: "Talca",
		distancia: 257,
	},
	{
		nombre: "Concepción",
		distancia: 500,
	},
	{
		nombre: "Temuco",
		distancia: 690,
	},
	{ 
		nombre: "Valdivia",
		distancia: 848,
	},
	{
		nombre:"Puerto Montt",
		distancia:1032
	},
	{
		nombre: "Coyhaique",
		distancia: 1888,
	},
	{
		nombre: "Punta Arena",
		distancia: 3004,
	}
	];

	var vehiculos = [

	{
		nombre: "auto",
		consumo: 12,
	},
	{
		nombre:"moto",
		consumo: 21,
	},
	{
		nombre: "minivan",
		consumo: 7,
	},
	{
		nombre: "camión",
		consumo: 6,
	}
	];

//Funcion que calcule costo de viaje (distancia por costo bencina)


/*	var opcion_1 = null;
	var opcion_2 = null;

	//con este for encontraremos las cuidades elegidas

	for(var i = 0; i<cuidades.length; i++){
		if(cuidades[i].nombre == opcion_1){
        	opcion_1 = cuidades[i];
      }
      	if(cuidades[i].nombre == opcion_2){
        	opcion_2 = cuidades[i];
      }
	}
	alert('La distancia que hay entre ' + opcion_1.nombre + ' y ' + opcion_2.nombre + ' es ' + Math.abs(opcion_1.distancia - opcion_2.distancia));
*/
});
	
	

	





