$(document).ready(function(){

	
	$("#elegir-autos").hide();
	
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



	

	var select_origen = $('#cuidad_origen').val();
	var select_destino = $('#cuidad_destino').val();

	if (select_origen == null || select_destino == null){
      $('#buscar').attr("disabled", true);
    }else{
    	$('#buscar').attr("disabled", false);
    }

	$("#buscar").on('click', function(){
		$("#elegir-autos").show();
	})
});
