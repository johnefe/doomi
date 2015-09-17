// js para registrar la empresa y su sucursal

var com = com || {};

/** devrel namespace for Google Developer Relations projects. */
com.innovus = com.innovus || {};

/** samples namespace for DevRel sample code. */
com.innovus.domi = com.innovus.domi || {};

/** hello namespace for this sample. */
com.innovus.domi.entrar = com.innovus.domi.entrar || {};
com.innovus.domi.entrar1 = com.innovus.domi.entrar1 || {};


/*-------------------------------------------------------------*/
function imagenesPerfilYportada(){
	$("#archivo").hide();
	$("#foto").click(function(){
	$("#archivo").trigger("click");
	});
	
	
	$("#archivo2").hide();
	$("#foto2").click(function(){
	$("#archivo2").trigger("click");
	});
	}
/*--------------------------------------------------------------*/
/*-----------------------------------------------------------*/
	    function subirArchivos() {
                $("#archivo").upload('subir_archivo2.php',
                {
                  nombre_archivo: $("#nombre_archivo").val()
                },
                function(respuestaUrlPerfil) {
                    //Subida finalizada.
                    $("#barra_de_progreso").val(0);
                    if (respuestaUrlPerfil != "") {
                  // mostrarRespuesta('El archivo ha sido subido correctamente.', true);					
					  // var nuevaImagen="";
					   //nuevaImagen="<img src='imagenesproductos/"+respuesta+"'/>";
					   //document.getElementById("imagenProEdit").innerHTML=nuevaImagen;
                        $("#archivo").val('');
						registrarEmpresaySucursal(respuestaUrlPerfil);
						
                    } 
                    //mostrarArchivos();
                }, function(progreso, valor) {
                    //Barra de progreso.
                    //$("#barra_de_progreso").val(valor);
                });
            }
/*------------------registrarEmpresaySucursal(respuesta);-----------*/
	function registrarEmpresaySucursal(respuestaUrlPerfil){
		 $("#archivo2").upload('subir_archivo3.php',
                {
                  nombre_archivo: $("#nombre_archivo").val()
                },
                function(respuestaUrlPortada) {
                    //Subida finalizada.
                    $("#barra_de_progreso").val(0);
                    if (respuestaUrlPortada != "") {
                  // mostrarRespuesta('El archivo ha sido subido correctamente.', true);					
					  // var nuevaImagen="";
					   //nuevaImagen="<img src='imagenesproductos/"+respuesta+"'/>";
					   //document.getElementById("imagenProEdit").innerHTML=nuevaImagen;
                        $("#archivo2").val('');
						llevarUrl(respuestaUrlPerfil,respuestaUrlPortada);
						
                    } 
                    //mostrarArchivos();
                }, function(progreso, valor) {
                    //Barra de progreso.
                    //$("#barra_de_progreso").val(valor);
                });
		
		}
/*-----llevarUrl(respuestaUrlPerfil,respuestaUrlPortada);-----*/
	function llevarUrl(respuestaUrlPerfil,respuestaUrlPortada){
		//respuestaUrlPerfil,respuestaUrlPortada
		var descripcion =document.getElementById("descripcion").value;
		var costoDomicilio= document.getElementById("costoDomicilio").value;
		var tiempoMinimo = document.getElementById("tiempoMinimo").value;
		var pedidoMinimo = document.getElementById("pedidoMinimo").value;
		alert("perfil:"+respuestaUrlPerfil+"portada:"+respuestaUrlPortada+
		"descripcion:"+descripcion+"costo domicilio"+costoDomicilio+"tiempo m:"+
		tiempoMinimo+"pedido minimo:"+pedidoMinimo)
		
		}		

/*---Metodo para agregar un nuevo Horario*/
	var Cnt =30;
	function AgregarHorario(){
		
		var cajas="";
		if (Cnt!=0){
			Cnt= Cnt+ 1;
				
$('#cajasHoras').append(" <div id='caja"+Cnt+"' class='NewCajas'>"+
				"<div class='selec'>"+	
				"<select  multiple='multiple' id='se"+Cnt+"'>"+
               " <option value='1'>Lunes</option>"+
                "<option value='2'>Martes</option>"+
               " <option value='3'>Mièrcoles</option>"+
               " <option value='4'>Jueves</option>"+
                "<option value='5'>Viernes</option>"+
               " <option value='6'>Sàbado</option>"+
                "<option value='7'>Domingo</option>"+
               " </select>"+
			   "</div><div>"+
			   "<script>"+
			   
    "$('#se"+Cnt+"').multipleSelect();"+
        
        "$('#getSelectsBtn').click(function() {"+
		"var valores= $('#se"+Cnt+"').multipleSelect('getSelects');"+
		"resgistrarHorario(valores);"+
		
        "});"+
		"</script>"+
		"<div class='hora'><select class='horas' id='horaUno'>"+
		"<option value='1'>1 am</option>"+
		"<option value='2'>2 am</option>"+
		"<option value='3'>3 am</option>"+
		"<option value='4'>4 am</option>"+
		"<option value='5'>5 am</option>"+
		"<option value='6'>6 am</option>"+
		"<option value='7'>7 am</option>"+
		"<option value='8'>8 am</option>"+
		"<option value='9'>9 am</option>"+
		"<option value='10'>10 am</option>"+
		"<option value='11'>11 am</option>"+
		"<option value='12'>12 am</option>"+
		"<option value='13'>13 pm</option>"+
		"<option value='14'>14 pm</option>"+
		"<option value='15'>15 pm</option>"+
		"<option value='16'>16 pm</option>"+
		"<option value='17'>17 pm</option>"+
		"<option value='18'>18 pm</option>"+
		"<option value='19'>19 pm</option>"+
		"<option value='20'>20 pm</option>"+
		"<option value='21'>21 pm</option>"+
		"<option value='22'>22 pm</option>"+
		"<option value='23'>23 pm</option>"+
		"<option value='24'>24 pm</option>"+
		"</select></div><h3 class='guion'>-</h3>"+
   		"<div class='hora'><select class='horas' id='horaDos'>"+
		"<option value='1'>1 am</option>"+
		"<option value='2'>2 am</option>"+
		"<option value='3'>3 am</option>"+
		"<option value='4'>4 am</option>"+
		"<option value='5'>5 am</option>"+
		"<option value='6'>6 am</option>"+
		"<option value='7'>7 am</option>"+
		"<option value='8'>8 am</option>"+
		"<option value='9'>9 am</option>"+
		"<option value='10'>10 am</option>"+
		"<option value='11'>11 am</option>"+
		"<option value='12'>12 am</option>"+
		"<option value='13'>13 pm</option>"+
		"<option value='14'>14 pm</option>"+
		"<option value='15'>15 pm</option>"+
		"<option value='16'>16 pm</option>"+
		"<option value='17'>17 pm</option>"+
		"<option value='18'>18 pm</option>"+
		"<option value='19'>19 pm</option>"+
		"<option value='20'>20 pm</option>"+
		"<option value='21'>21 pm</option>"+
		"<option value='22'>22 pm</option>"+
		"<option value='23'>23 pm</option>"+
		"<option value='24'>24 pm</option>"+
		"</select></div>"+
		"<img src='images/clear5.png' onClick='BorrarCajasHoras("+Cnt+")' /></div>");	
			
			}
		return Cnt;
		}
		
		
/*------------Metodo para borrar cajas de nuevos horario-------*/
	function BorrarCajasHoras(Cnt){
		document.getElementById("caja"+Cnt).remove();		
		
		}	
/*------------------------------------------------------------*/
	function resgistrarHorario(valores){
		
		/* "alert('Selected values: ' + $('#se"+Cnt+"').multipleSelect('getSelects'));"+
        "alert('Selected texts: ' + $('#se"+Cnt+"').multipleSelect('getSelects', 'text'));"+*/
		//var valores = $('#se"+Cnt+"').multipleSelect("getSelects"));
		alert(valores);
		
		}
/*--------------------------------------------------------------*/



com.innovus.domi.entrar.init = function(apiRoot) {
	
	var apisToLoad;
	var callback = function() {
		if (--apisToLoad == 0) {
			imagenesPerfilYportada();
			
			
		}
	}

	apisToLoad = 1;
	gapi.client.load('doomiClientes', 'v1', callback, apiRoot);
	
	};
		
	