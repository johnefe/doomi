//----------------------------------------------
var com = com || {};

/** devrel namespace for Google Developer Relations projects. */
com.innovus = com.innovus || {};

/** samples namespace for DevRel sample code. */
com.innovus.domi = com.innovus.domi || {};

/** hello namespace for this sample. */
com.innovus.domi.login = com.innovus.domi.login || {};

/*-------------------------------------------------------------*/


/*-----------------metodo  para registrar cliente--------------*/
function registrarClientes() {
	
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var nombres= document.getElementById("nombres").value;
	var apellidos= document.getElementById("apellidos").value;
	var cedula=document.getElementById("cedula").value;
	var telefono=document.getElementById("telefono").value;
	var ciudad= document.getElementById("ciudad").value;
	var pais=document.getElementById("pais").value;
	

		

	var requestData = {};
	requestData.telefonoCliente = {};
	
		
	requestData.correoCliente= email;
	requestData.passwordCliente = password;
	requestData.nombresCliente=nombres;
	requestData.apellidosCliente=apellidos;
	requestData.cedulaCliente=cedula;
	requestData.telefonoCliente.number=telefono;
	requestData.ciudad=ciudad;
	requestData.pais=pais;
	gapi.client.doomiClientes.crearCliente(requestData).execute(
			
			function(resp) {

				if (!resp.code) {
					
				var z3fja =resp.websafeKey; 	
				document.getElementById("form").reset();	
				window.location.href="rempresa.php?z3fja="+z3fja+"";
				registrarEmpresa();	
												
				}
				else {
					alert("Ha ocurrido un error en Tu registro, intentalo de nuevo ");
					window.location.href="registroCliente.html";
					
					}
			});

}


/*--------------------------------       ------------------------*/
	com.innovus.domi.login.enableButtons = function() {

	document.getElementById('registrar').onclick = function() {
		
/*------- aqui comienzan las validaciones para el formulario de registro de cliente*/
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		var repassword= document.getElementById("repassword").value;
		var nombres=document.getElementById("nombres").value;
		var apellidos=document.getElementById("apellidos").value;
		var telefono= document.getElementById("telefono").value;
		var cedula=document.getElementById("cedula").value;
		var pais= document.getElementById("pais").value;
		var ciudad= document.getElementById("ciudad").value;
		
		
		var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		var filter6=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
		
			
		if(email == "" || !expr.test(email)){
		            
		alert("correo incorrecto");
         	}
		else if(password==""){
				
				alert("Ingrese una contraseña ");
				}
		else if(password.length<6 ){
				
				alert("Ingrese una contraseña de minimo 7 caracteres");
				}
		
		else if(password =!repassword ){
				
				alert("las contraseñas no coinciden");
				}
		else if(nombres=="" || nombres.length<4 ){
				
				alert("ingresa un nombre minimo 4 letras");
				}
		else if(!filter6.test(nombres)){
				
				alert("Solo se permiten letras en tu Nombre");
				}
		else if(apellidos=="" || apellidos.length<4 ){
				
				alert("ingresa un Apellido minimo 4 letras");
				}
		else if(!filter6.test(apellidos)){
				
				alert("Solo se permiten letras en tu Apellido");
				}
		else if(telefono==""){
				
				alert("Ingrese un numero de telefono");
				}
		else if(cedula==""){
				
				alert("Ingrese su numero de identificacion");
				}	
		else if(pais==""){
				
				alert("Escoge un pais de origen");
				}
		else if(ciudad==""){
				
				alert("Escoge una ciudad");
				}	
		else{							
				registrarClientes();
		}
						
				
				
		//fin de validaciones
		
	
		
		
		
		}

};

com.innovus.domi.login.init = function(apiRoot) {
	
	var apisToLoad;
	var callback = function() {
		if (--apisToLoad == 0) {
			com.innovus.domi.login.enableButtons();
		}
	}

	apisToLoad = 1;
	gapi.client.load('doomiClientes', 'v1', callback, apiRoot);
	
	};