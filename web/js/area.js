var com = com || {};

/** devrel namespace for Google Developer Relations projects. */
com.innovus = com.innovus || {};

/** samples namespace for DevRel sample code. */
com.innovus.domi = com.innovus.domi || {};

/** hello namespace for this sample. */
com.innovus.domi.entrar = com.innovus.domi.entrar || {};
com.innovus.domi.entrar1 = com.innovus.domi.entrar1 || {};

var prueba ="";

/*------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------*/
/*-1-*/
	function Cliente() {
	
	var keyUser = document.getElementById("lb").value;
	var keySucursal= document.getElementById("lb1").value;
		
	var requestData = {};
	
	
	requestData.keyUser = keyUser;
	
	gapi.client.doomiClientes.getClienteXUser(requestData).execute(function(resp) {
		
			if(!resp.code){
			resp.items = resp.items || [];
			//resp.items[0] = {}
			
			var result="";
			var result1="";
			for (var i=0;i<resp.items.length;i++) {
			result =result+resp.items[i].nombresCliente;
			result1= result1 +resp.items[i].websafeKey;
              }
            //document.getElementById("tuNombreCliente").innerHTML = result;
			//document.getElementById("tuNombreSucursal").innerHTML = keySucursal;       				
			sucursal(keySucursal);
			}
				
			});

}

/*-2     ----------------------------------------------------------*/
	function sucursal(keySucursal){
	var keyCliente = document.getElementById("lb").value;
	var keySucursal=keySucursal;
		
	var requestData = {};
	
	requestData.websafeKeyEmpresa = keySucursal;
	
	gapi.client.doomiClientes.getSucursalesXEmpresa(requestData).execute(function(resp){
		
			if(!resp.code){
			resp.items = resp.items || [];
						
			var result="";
			for (var i=0;i<resp.items.length;i++) {
			result =result+resp.items[i].nombreSucursal;
									
              }
			 document.getElementById("tuNombreSucursal").innerHTML = result; 
			 
			 }
			consultarEmpresa(keyCliente);	
			});
		}
/*--------------------------- --------------------------------------------------------*/
/*se consulta la empresa por el cliente para obtener un websafekey y con este ir a consultar las categorias por empresa*/
/*   ------ ---------*/
        function consultarEmpresa(keyCliente){
			
		var key= keyCliente;
		
		var requestData = {};
	
		requestData.keyCliente = key;
	
	gapi.client.doomiClientes.getEmpresaXCliente(requestData).execute(function(resp){
		
			if(!resp.code){
			var result="";
			
			var result1=resp.websafeKey; 
			prueba = result1;
           	com.innovus.domi.entrar1.init('https://domi-app.appspot.com/_ah/api',result1);										
			}
				
			});
			
			
			}
			
/*------------------------------------------------------------------------------------*/

	function CategoriaXempresa(llave){
		
		    //var llave1= llave;
			var requestData = {};	
			requestData.webSafeEmpresaKey = llave;
	
	gapi.client.doomiTodos.getCategoriasXEmpresa(requestData).execute(function(resp){
		
			if(!resp.code){
			resp.items = resp.items || [];
			var result="";
			var result1="";			
		
		/*	for (var i=0;i<resp.items.length;i++) {		
			result+="<label class='checkbox'><input type='checkbox' name='checkbox' cheked=''><i></i>"+resp.items[i].nombreCategoria+"</label>";	
			//result1+=resp.items[i].wefSafeKey; 
			}*/
			result1+="<optgroup label='Elige una categoria'>";
			for (var i=0;i<resp.items.length;i++) {
				
			result1+="<option value='"+resp.items[i].wefSafeKey+"'>"+resp.items[i].nombreCategoria+"</option>";
					}	
           				//<option>rojo</option>
			result1+="</optgroup>"+
       				"</select><br>";
			
              
			  
		    //document.getElementById("categorias").innerHTML=result;	
			document.getElementById("categorias2").innerHTML=result1;
			obtenerProductosXsucursal();
			//alert(llave1);
																			
			}
				
			});
			
			
		
		}
/*------------------------------------------- ----------------------------------------*/
$(document).ready(function() {
var iCnt = 0;

// Crear un elemento div añadiendo estilos CSS
/*var container = $(document.createElement('div')).css({
padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
borderTopColor: '#999', borderBottomColor: '#999',
borderLeftColor: '#999', borderRightColor: '#999'
});*/
 
$('#btAdd').click(function() {
		if (iCnt <= 19) {
 
			iCnt = iCnt + 1;
 
			// Añadir caja de texto.
			$('#detallesProducto').append('<input type=text class="input" id=tb' + iCnt + ' ' +
'placeholder="Detalle del producto ' + iCnt + '" />'+'<br/>');
 
				if (iCnt == 1) {
					var divSubmit = $(document.createElement('div'));
					$(divSubmit).append('<input type=button class="bt" 		onclick="GetTextValue()"' +
'id=btSubmit value=Enviar />');
 
						}
 
			//$('#mains').after('#detallesProducto', divSubmit);
			}
			
			
		else { //se establece un limite para añadir elementos, 20 es el limite
 
				$('#detallesProducto').append('<label>Limite Alcanzado</label>');
				$('#btAdd').attr('class', 'bt-disable');
				$('#btAdd').attr('disabled', 'disabled');
 
				}
			});
 
$('#btRemove').click(function() { // Elimina un elemento por click
if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }
 
if (iCnt == 0) { $(container).empty();
 
$('#detallesProducto').remove();
$('#btSubmit').remove();
$('#btAdd').removeAttr('disabled');
$('#btAdd').attr('class', 'bt')
 
}
});
 
$('#btRemoveAll').click(function() { // Elimina todos los elementos del contenedor
 
$('#detallesProducto').empty();
$('#detallesProducto').remove();
$('#btSubmit').remove(); iCnt = 0;
$('#btAdd').removeAttr('disabled');
$('#btAdd').attr('class', 'bt');
 
});
});
 
// Obtiene los valores de los textbox al dar click en el boton "Enviar"
var divValue, values = '';
 
function GetTextValue() {
 
$(divValue).empty();
$(divValue).remove(); values = '';
 
$('.input').each(function() {
divValue = $(document.createElement('div')).css({
padding:'5px', width:'200px'
});
values += this.value + ','
});
 
registrarProducto(values);
//$(divValue).append('<p><b>Tus valores añadidos</b></p>' + values);
//$('body').append(divValue);
 
}



/*----------------------------------------------------------------------------------*/

//metodo para registrar un nuevo producto
function registrarProducto(values){
	var keyCategoria= document.getElementById("categorias2").value;
	var nombreProducto=document.getElementById("nombreProducto").value;
	var precioProducto=document.getElementById("precio").value;
	var descripcion=document.getElementById("descripcion").value;
	var foto=document.getElementById("dirFoto").value;
	var fotoProducto= "images/"+foto;
	//var detalles= values;
	
	var arr=values,	
	separador=",",
	arreglo=arr.split(separador);
	var normal="";
	
		var requestData = {};	
		requestData.detalles=[];	
		requestData.websafeKeyCategoria=keyCategoria;
		requestData.nombreProducto=nombreProducto;
		requestData.precioProducto=precioProducto;
		requestData.descripcionProducto=descripcion;
		requestData.urlImageProducto=fotoProducto;
		for (var i=0;i<arreglo.length-1;i++){
		normal=arreglo[i];
		requestData.detalles[i]=normal;
		}
		
		
		gapi.client.doomiClientes.crearProductos(requestData).execute(
			
			function(resp) {

				if (!resp.code) {
					
					var keyProducto= resp.websafeKey;
					asignarProdutoSucursal(keyProducto);	
												
				}
				else {
					alert("Ha ocurrido un error en Tu registro, intentalo de nuevo ");
					//window.location.href="registroCliente.html";
					
					}
			});
	
	

	}
	
/*----------------------------------------------------------------*/
//funcion para asiganarle el producto registrado a la sucursal de donde se registra este producto

	function asignarProdutoSucursal(keyProducto){
		/*key sucursal es llamada del valor de un hidden que esta en area.php*/	
		var keySucursal= document.getElementById("lb1").value;
	
		var requestData = {};
		
		requestData.websafeSucursalKey=keySucursal;
		requestData.websafeProductoKey=keyProducto;
		
		gapi.client.doomiClientes.apiClientes.addProductoForSucursal(requestData).execute(
			
			function(resp) {

				if (!resp.code) {
					//se envia al metodo obtenerProductosXsucursal() para que actualize los productos 
					
					document.getElementById('formrp').reset();
					obtenerProductosXsucursal();
					
					
					
												
				}
				else {
					alert("Ha ocurrido un error en Tu registro, intentalo de nuevo ");
					//window.location.href="registroCliente.html";
					
					}
			});
	
		
		}

/*--Obtener productos de toda la empresa como tal ---*/
function obtenerProductosXempresa(){
		/*key sucursal es llamada del valor de un hidden que esta en area.php*/	
		//var keySucursal= document.getElementById("lb1").value;
		var keyCliente = document.getElementById("lb").value;
		var requestData = {};	
		requestData.webSafeEmpresaKey = keyCliente;
	
	gapi.client.doomiTodos.getProductosXEmpresa(requestData).execute(function(resp){
		
			if(!resp.code){
			resp.items = resp.items || [];
			var result="";
			
		
			for (var i=0;i<resp.items.length;i++) {		

			/*------------------------------------------*/
result+="<div class='contenedorProductos'>"+
			"<div class='tituloProducto'>"+resp.items[i].nombreProducto+"</div>"+
			"<div class='fotoProducto'><img src='"+resp.items[i].urlImageProducto+"'/></div>"+
			"<div class='observacionProducto'>"+resp.items[i].descripcionProducto+"</div>"+
			"<input type='text' class='keyProducto' id='keyProducto"+i+"' value='"+resp.items[i].websafeKey+"'/>"+
					"<div class='precio'>"+
						"<div class='numero'>$ "+resp.items[i].precioProducto+"</div>"+
	"<div class='eliminarProductoR'><a onClick='agregarProductoEmpresa("+i+")'>Agregar</a></div></div>"+							
								
					"</div>"+
				
				"</div>";
			
			
			
			/*-----------------------------------------*/
				
              }
			  
		    document.getElementById("productosAgr").innerHTML=result;
			
		
			
			
																			
			}
				
			});
		

		}


/*------------------------------------------------------*/
/*------------------------------------------- ----------------------------------------*/
/*se obtienen los productos por sucursal*/
		function obtenerProductosXsucursal(){
		/*key sucursal es llamada del valor de un hidden que esta en area.php*/	
		var keySucursal= document.getElementById("lb1").value;
		//var keyEmpresa=llave1;
		var requestData = {};	
		requestData.websafeSucursalKey = keySucursal;
	
	gapi.client.doomiTodos.getProductosXSucursal(requestData).execute(function(resp){
		
			if(!resp.code){
			resp.items = resp.items || [];
			var result="";
			
		
			for (var i=0;i<resp.items.length;i++) {		

			/*------------------------------------------*/
			var key=resp.items[i].websafeKey;
			
			result+="<div class='contenedorProductos'>"+
				"<div class='tituloProducto'>"+resp.items[i].nombreProducto+"</div>"+
				"<div class='fotoProducto'><img src='imagenesproductos/"+resp.items[i].urlImageProducto+"'/></div>"+
				
				"<div class='observacionProducto'>"+resp.items[i].descripcionProducto+"</div>"+
				"<input type='text' class='keyProducto' id='keyProducto"+i+"' value='"+resp.items[i].websafeKey+"'/>"+
						"<div class='precio'>"+
						"<div class='numero'>$ "+resp.items[i].precioProducto+"</div>"+
						"<div class='editarProducto'><a href='#modalEdit"+i+"' onClick='recogerInformacionProducto("+i+")'>Editar</a></div>"+	
						"<div class='eliminarProducto'><a href='#modal"+i+"'>Quitar</a></div>"+		
						/*----------para quitar un procuto de ls sucursal------------*/
						
						"<div id='modal"+i+"' class='modalmask2'>"+
                "<div class='modalbox2 rezise2'>"+
                    
                    "<div class='proAgr2'>"+
                    	"<div class='proAgr12'>"+
                        "<div class='tituloproAgr'>"+
                    "<h2>Alerta..!</h2></div>"+
                            "<div class='productosAgr2' id='productosAgr2'>"+
   "<h4 class='mensajeAlerta'>Si quitas este producto temporalmente de tu sucursal,<br>"+
                            "Tus clientes no podran ver este producto.<br>"+
								"¿Aùn deseas quitar este producto?</h4>"+
                            "</div> "+
                            "<div class='botones'>"+
                            	"<div class='aceptar'>"+
           "<img src='images/checkmark17.png'  onClick='quitarProductoSucursal("+i+")' />"+
                                "</div>"+
                            	"<div class='cancelar'>"+
                                "<a href='#close' title='Close'>"+
                                "<img src='images/cancel29.png' />"+
                                "</a>"+
                            	"</div>"+
                            "</div>"+                
                    	"</div>"+
                        "<br>"+
                    	"</div>"+
                    "</div>"+
				"</div>"+

						
/*----------------------------------------------------------------------------------*/
						
/*---------------------------------para Editar un producto  ----------------------*/
						
						"<div id='modalEdit"+i+"' class='modalmask2'>"+
                "<div class='modalbox2 rezise2'>"+
                    
                    "<div class='proAgr2'>"+
                    	"<div class='proAgr12'>"+
                        "<div class='tituloproAgr'>"+
                    "<h2>Editar Informacion de Producto</h2></div>"+
                            "<div class='productosAgr3' id='productosAgr2'>"+
                            "<div class='formEditarProducto' id='formEditarProducto"+i+"'>"+
							
							"</div>"+  
							
							"</div> "+
                            "<div class='botones'>"+
                            	"<div class='aceptar'>"+
								"<img src='images/checkmark17.png'  onClick='subirArchivos("+i+")' />"+
		  
                                "</div>"+
                            	"<div class='cancelar'>"+
                 "<a href='#close' title='Close' onClick='cerrar("+i+")'>"+
                                "<img src='images/cancel29.png'  />"+
                                "</a>"+
                            	"</div>"+
                            "</div>"+                
                    	"</div>"+
                        "<br>"+
                    	"</div>"+
                    "</div>"+
				"</div>"+

						
						/*---------------------------------------------------*/
							
							
					"</div>"+
				
				"</div>";
			
			
			
			/*-----------------------------------------*/
				
              }
			  
		    document.getElementById("productos").innerHTML=result;
			//alert(keyEmpresa);
			obtenerProductosXempresa();		
			var keyCliente = document.getElementById("lb").value;
				
																			
			}
				
			});
		

		}
		
		
/*------------------------------- para la imagen----------------------*/	

	
/*----recogerInformacionProducto() para  editarun prodcuto------*/	

function recogerInformacionProducto(i){
	var keyProducto= document.getElementById('keyProducto'+i).value;
	
	var requestData = {};
	requestData.detalles=[];
	var normal = requestData.detalles=[];
		
		requestData.keyProducto=keyProducto;
		
		gapi.client.doomiClientes.getProductoxKey(requestData).execute(
			
			function(resp) {

				if (!resp.code) {
				var k=3;	
	
				var busqueda="";
				resp.detalles = resp.detalles || [];	
				busqueda  +="<form id='infoProducto"+i+"' action=''>"+
				 /*" <div id='respuesta' class='alert'></div>"+*/
					"<input type='hidden' name='nombre_archivo' value='"+i+"' id='nombre_archivo' />"+
								"<input type='file' name='archivo' id='archivo'/>"+
								"<div class='imagenProEdit' id='imagenProEdit'>"+
								"<img id='foto"+i+"' name='foto"+i+"' alt='cambiar imagen'  src='imagenesproductos/"+resp.urlImageProducto+"'/>"+
								"</div>"+
								"<input type='text' class='keyProducto' id='keyProducto"+i+"' value='"+keyProducto+"'/>"+
							"<h4>Nombre:</h4>"+
								"<input type='text' id='NombreProductoEdit"+i+"' value='"+resp.nombreProducto+"'/>"+
								"<h4>Precio:</h4>"+
								"<input type='text' id='PrecioProductoEdit"+i+"' value='"+resp.precioProducto+"'/>"+
								"<h4>Descripciòn:</h4>"+
					"<textarea id='descrip"+i+"'>"+resp.descripcionProducto+"</textarea>"+
								"<h4>Detalles:</h4><img src='images/addition12.png' class='addDetalle' onClick='addCajaTexto("+i+","+k+")'/>"+
								"<div class='detallesProE' id='detallesProE"+i+"'>";
								
								for(j=0;j<resp.detalles.length; j++){
								
								busqueda +="<div id='cajita"+j+"'><div  class='cajaTextoDetalles' ><input type='text' class='cajaTextos' value='"+resp.detalles[j]+"' id=''/></div><div  class='botonQuitarDetalle'><img src='images/rubbish12.png' onClick='borrarCajaTexto("+j+")'/></div></div>";
								}
								
								busqueda +="</div>"+
										"</form>";
					
														
						
				document.getElementById('formEditarProducto'+i).innerHTML=busqueda;		
				$("#archivo").hide();
				$("#foto"+i).click(function(){
				$("#archivo").trigger("click");	
		
		});
												
				}
				else {
					alert("Ha ocurrido un error en Tu registro, intentalo de nuevo ");
					//window.location.href="registroCliente.html";
					
					}
			});
	
	
	
    

	
	}
/*metodo para eliminar una caja de texto en la ventana modal de editar un producto*/
		
	function borrarCajaTexto(j){
		
		document.getElementById("cajita"+j).remove();
		
	
		}
	function borrarCajaTexto2(Cnt){
		
		document.getElementById("cajita"+Cnt).remove();
		
		}
/*metodo para adicionar una caja de texto en la ventana modal de editar producto*/
	var Cnt = 90;
	
	function addCajaTexto(i,k){
				
		if (Cnt !=0) {
 
			Cnt= Cnt + k+i;
			 
			// Añadir caja de texto.
$('#detallesProE'+i).append('<div id="cajita'+Cnt+'"><div class="cajaTextoDetalles"><input type="text" class="cajaTextos" id=tb'+Cnt+ ' ' +
'placeholder="Detalle del producto ' + Cnt+ '" /></div><div class="botonQuitarDetalle"><img src="images/rubbish12.png" onClick="borrarCajaTexto2('+Cnt+')"/></div>'+'</div>');
	 
			//$('#mains').after('#detallesProducto', divSubmit);
			
			
			}
			return Cnt;	
		}
		/*--------------Metodo que pone cada ve que se salga de una ventana modal en cero, esto sirve para agregar cajas de texto en detalles producto---*/	
		function PonerContadorCero(){
			
			var Cnt=0;
			return Cnt;
			alert("dfdf");
			}	
/*-----------------------------------------------------------*/
	    function subirArchivos(i) {
                $("#archivo").upload('subir_archivo.php',
                {
                    nombre_archivo: $("#nombre_archivo").val()
                },
                function(respuesta) {
                    //Subida finalizada.
                    $("#barra_de_progreso").val(0);
                    if (respuesta != "") {
                       // mostrarRespuesta('El archivo ha sido subido correctamente.', true);					
					   var nuevaImagen="";
					   nuevaImagen="<img src='imagenesproductos/"+respuesta+"'/>";
					   document.getElementById("imagenProEdit").innerHTML=nuevaImagen;
                        $("#nombre_archivo, #archivo").val('');
						VolverAregistrarPro(i,respuesta);
						
                    } 
                    //mostrarArchivos();
                }, function(progreso, valor) {
                    //Barra de progreso.
                    //$("#barra_de_progreso").val(valor);
                });
            }
/*---------------VolverRegistrarProducto(values);-------------*/
		
		function VolverAregistrarPro(i,respuesta){
			
		var val="";
		 $(':input','#detallesProE'+i).each( function() {
  			val+=this.value+',';
		});
		editar(val,i,respuesta);	
	}
	
/*--------------------------------------------------------------------------*/
function editar(val,i,respuesta){
	
	var arr=val,	
	separador=",",
	arreglo=arr.split(separador);
	var normal="";
	
		
		/*for (var b=0;b<arreglo.length-1;b++){
		normal=arreglo[b];
		//requestData.detalles[i]=normal;
		alert(normal);
		}*/
		
	var keyProducto= document.getElementById('keyProducto'+i).value;
	var nombreProducto=document.getElementById('NombreProductoEdit'+i).value;
	var precioProducto=document.getElementById('PrecioProductoEdit'+i).value;
	var descripcion=document.getElementById('descrip'+i).value;
	
	//alert(respuesta);
	//aqui se inicia el registro para efectuar los cambios
	
	var requestData = {};	
		requestData.detalles=[];	
		requestData.websafeKeyProducto=keyProducto;
		requestData.nombreProducto=nombreProducto;
		requestData.precioProducto=precioProducto;
		requestData.descripcionProducto=descripcion;
		requestData.urlImageProducto=respuesta;
		for (var b=0;b<arreglo.length-1;b++){
		normal=arreglo[b];
		requestData.detalles[b]=normal;
		}
		
		
		gapi.client.doomiClientes.updateProducto(requestData).execute(
			
			function(resp) {

				if (!resp.code) {
					
					obtenerProductosXsucursal();
				}
				else {
					alert("Ha ocurrido un error en Tu registro, intentalo de nuevo ");
					//window.location.href="registroCliente.html";
					
					}
			});
	
	
	/*--------------------------------------------------*/
	}
	
	
/*--------------------------------------------------------------------------*/
function cerrar(i){
	
	$('#infoProducto'+i).empty();
	}	
			
/*----Metodo para quitar producto de sucursal--------------------------------*/
	function quitarProductoSucursal(i){
		//var contador= document.getElementById('cont').value;
		var keyProducto= document.getElementById('keyProducto'+i).value;
		var keySucursal= document.getElementById("lb1").value;
		
	//alert(keyProducto);
		var requestData = {};
		
		requestData.websafeSucursalKey=keySucursal;
		requestData.websafeProductoKey=keyProducto;
		
		gapi.client.doomiClientes.deleteProductosFromSucursal(requestData).execute(
			
			function(resp) {

				if (!resp.code) {
					//se envia al metodo obtenerProductosXsucursal() para que actualize los productos 
					//document.getElementById('formrp').reset();
					obtenerProductosXsucursal();
					
					
					
												
				}
				else {
					alert("Ha ocurrido un error en Tu registro, intentalo de nuevo ");
					//window.location.href="registroCliente.html";
					
					}
			});	
		}
		
/*------------------------------------------------------------------------------------*/
//metodo para agregar un producto a la sucursal desde todo los productos de la empresa

	function agregarProductoEmpresa(i){
		var keySucursal= document.getElementById("lb1").value;
		var keyProducto= document.getElementById('keyProducto'+i).value;
		
		var requestData = {};
		
		requestData.websafeSucursalKey=keySucursal;
		requestData.websafeProductoKey=keyProducto;
		
		gapi.client.doomiClientes.apiClientes.addProductoForSucursal(requestData).execute(
			
			function(resp) {

				if (!resp.code) {
	//se envia al metodo obtenerProductosXsucursal() para que actualize los productos 
					obtenerProductosXsucursal();
					//location.onunload();											
				}
				else {
					alert("ha ocurrido un error, puede que este producto ya este ingresado en esta sucursal.");				
					}
			});
	
		
		
		}
/*------------------------------------------------------------------------------------*/
com.innovus.domi.entrar.init = function(apiRoot) {
	
	var apisToLoad;
	var callback = function() {
		if (--apisToLoad == 0) {
			Cliente();
		}
	}

	apisToLoad = 1;
	gapi.client.load('doomiClientes', 'v1', callback, apiRoot);
	
	};
	
/*------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------*/
com.innovus.domi.entrar1.init = function(apiRoot,llave) {
	
	var apisToLoad;
	var callback = function() {
		if (--apisToLoad == 0) {
			CategoriaXempresa(llave);
		}
	}

	apisToLoad = 1;
	gapi.client.load('doomiTodos', 'v1', callback, apiRoot);
	
	};
	
/*------------------------------------------------------------------------------------*/

/*.-------------mostrar formularios-------------------*/
function mostrarFormularioR(){
		document.getElementById('nuevoProducto').style.display = 'block';
		document.getElementById('subir').style.display = 'block';
			
		}
function AgregarP(){
	document.getElementById('nuevoProducto').style.display = 'none';
	document.getElementById('formrp').reset();
	document.getElementById("list").innerHTML ="";
	document.getElementById('subir').style.display = 'none';
	}
function subirp(){
	
	document.getElementById('nuevoProducto').style.display = 'none';
	document.getElementById('subir').style.display = 'none';
	}
function buscarProducto(){
	document.getElementById('buscarProducto').style.display = 'block';
	document.getElementById('subirb').style.display = 'block';
	}
function subirb(){
	
	document.getElementById('buscarProducto').style.display = 'none';
	document.getElementById('subirbu').style.display = 'none';
	}


/*---------------------------------------------------*/