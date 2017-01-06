$(document).ready(function(){

	
	$("#elegir-autos").hide();
	
	/*var cuidades = [
	{
		nombre: "Arica",
		distancia: 2059,
	},
	{
		nombre:"Iquique",
		distancia: 1789,
	},
	{
		nombre: "Antofagasta"
	}
	]*/



	

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
