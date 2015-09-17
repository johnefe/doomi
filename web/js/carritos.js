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
/*se obtienen el key user del cliente para buscar su nombre y el key sucursal para ir a obtener los datos de la sucursal donde se esta y con el mismo keysucursal ir a consultar los carritos de compras*/
	
	
	function Cliente() {
	//1
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
            document.getElementById("tuNombreCliente").innerHTML = result;
		     				
			sucursal(keySucursal);
			}
				
			});

}

/*------------------------ -----------------------------------------------------------*/
	//2
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
			 var dir="<h4><a href='area.php?gfgf="+keyCliente+"&z3fja="+keySucursal+"'>Productos</a></h4>";
			 document.getElementById("opciones").innerHTML=dir;
			 document.getElementById("tuNombreSucursal").innerHTML = result; 
			 
			 obtenerCarritosXsucursal(keySucursal,keyCliente);	
			 }
			
			});
		}

/*------------------------------------------------------------------------------------*/
		//3
		/*se obtienen los carritos por sucursal*/
		function obtenerCarritosXsucursal(keySucursal,KeyCliente){
		
		var keyCliente=keyCliente;
		var requestData = {};
		
		requestData.websafeKeySucursal = keySucursal;
	
	gapi.client.doomiClientes.getCarritosXSucursales(requestData).execute(function(resp){
		
			if(!resp.code){
				resp.items = resp.items || [];
				
				//resp.items[0] = {}
			
				var result="";
				var result1="";
				for (var i=0;i<resp.items.length;i++) {
					resp.items[i].pedidos=resp.items[i].pedidos ||[];
					
				
			
				
					result+= "<div class='col_1_of_single1 span_1_of_single1'>"+
			
					"<div class='view1 view-fifth1'>"+
				  	" <div class='top_box'>";
					if (resp.items[i].estado==0){
					result+="<div class='css4'><img src='images/rojo.png' alt=''/></div>";
					}else{
						if (resp.items[i].estado==1){					
							result+="<div class='css4'><img src='images/amarillo.png' alt=''/></div>";        }else{
							if(resp.items[i].estado==2)	
					result+="<div class='css4'><img src='images/verde.png' alt=''/></div>";							}				
						}
					
					result+="<h3 class='m_1'>"+resp.items[i].observacion+"</h3>"+
					"<p class='m_2'>Forma de pago:"+resp.items[i].formaDePago+"</p>"+
					"<p class='m_2'>Direccion:"+resp.items[i].direccion+"</p>"+
					"<p class='m_2'>Fecha:"+resp.items[i].fechaHora+"</p>";
					
					if (resp.items[i].estado==0){
					result+="<p class='m_2'>Estado:Sin enviar</p>";
					}else{
						if (resp.items[i].estado==1){					
							result+="<p class='m_2'>Estado:Enviado</p>";
					    }else{
							if(resp.items[i].estado==2)	
					result+="<p class='m_2'>Estado:Entregado</p>";
							}				
						}
					
					
								
					result+="<p class='m_2'>Total pedido $:"+resp.items[i].total+"</p>"+
					"<ul>"+
					"<li><a href='#modal"+i+"'>Ver Pedidos</a></li>"+
					"</ul>"+
					"<div id='modal"+i+"' class='modalmask'>"+    
					"<div class='modalbox movedown'>"+
        			"<a href='#close' title='Close' class='close'>X</a>";
					
					for(var j=0;j<resp.items[i].pedidos.length;j++){
					var x=1;
					var y= j+x;	
					result+="<h3>Producto #"+ y +" </h3>"+
					"<p>Nombre Producto:"+resp.items[i].pedidos[j].nombreProducto+"</p>"+
					"<p>Cantidad:"+resp.items[i].pedidos[j].cantidad+"</p>"+
					"<p>Precio:"+resp.items[i].pedidos[j].precioProducto+"</p>"+
					"<p>Observaciòn:"+resp.items[i].pedidos[j].observacion+"</p>";
					}
					
					result+="</div></div><a href='single.html'>"+
				    " <div class='grid_img'>"+
						
				    "   <div class='mask1'>"+
	                " </div>"+
	                "</div>"+
			
					"<div class='price'></div>"+
					"</div>"+
                       
					"</div></a>"+
					"<div class='rtng'>"+
					"</div>"+
						 
			    	"<div class='clear'></div></div>";				
			
			/*-------------------------------------------*/
			}
             document.getElementById("productos").innerHTML=result;
			
											
		}
	});
		
	
}
/*----------------------------------------------------------------------------------

/*-----------------------------------------------------------------------------------*/
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
