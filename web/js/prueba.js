var com = com || {};

/** devrel namespace for Google Developer Relations projects. */
com.innovus = com.innovus || {};

/** samples namespace for DevRel sample code. */
com.innovus.domi = com.innovus.domi || {};

/** hello namespace for this sample. */
com.innovus.domi.entrar = com.innovus.domi.entrar || {};



/*----------------------------------------------------*/
function Cliente() {
	
	var keyUser = document.getElementById("lb").value;
		
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
            document.getElementById("tuNombreCliente").innerHTML = result;       
			empresa();	
											
			}
				
			});

}
/*--------------------------------------------------------------------*/

function empresa() {
	
	var keyCliente = document.getElementById("lb").value;
		
	var requestData = {};
	
	var keysucursal="";
	requestData.keyCliente = keyCliente;
	
	gapi.client.doomiClientes.getEmpresaXCliente(requestData).execute(function(resp){
		
			if(!resp.code){
			//resp.items = resp.items || [];
						
			var result="";
			var result1="";
			//for (var i=0;i<resp.items.length;i++) {
			//result =result+resp.items[i].nombreEmpresa;
			//result1=result1+resp.items[i].websafeKey;
			
             // }
			result =result+resp.nombreEmpresa;
			result1=result1+resp.websafeKey; 
            document.getElementById("nombreEmpresa").innerHTML = result; 
			sucursal(result1);											
			}
				
			});
			

}

/*------------------------- -----------------------------------------*/
	function sucursal(result1){
		
		var websafeKeyEmpresa=result1;
		
	var requestData = {};
	
	var keySucursal="";
	requestData.websafeKeyEmpresa = websafeKeyEmpresa;
	
	gapi.client.doomiClientes.getSucursalesXEmpresa(requestData).execute(function(resp){
		
			if(!resp.code){
			resp.items = resp.items || [];
						
			var result="";
			var result2="";
			var result3="";
			for (var i=0;i<resp.items.length;i++) {
			result ="<div class='det_nav'>"+			
	"<h3>"+result+resp.items[i].nombreSucursal+"</h3>"+
	"<h5>Tiempo min. de entrega:<br>"+resp.items[i].tiempoMinimo+" minutos</h5>" +
	"<h5>Costo domicilio:<br> "+resp.items[i].costoDomicilio+" pesos</h5>"+
	"<div class='btn_form'><a href='carritos.php?z3fja="+resp.items[i].websafekeySucursal+"&gfgf="+document.getElementById("lb").value+"'>Entrar Aqui.</a></div></div>";
									
              }
            document.getElementById("contenidoSucursales").innerHTML = result; 
																		
			}
				
			});
		}

/*--------------------------- ----------------------------------------*/
			
			
			
/*--------------------------- ----------------------------------------*/
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
	
/*--------------------------- ----------------------------------------*/

/*--------------------------- ----------------------------------------*/