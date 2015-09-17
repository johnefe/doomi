var com = com || {};

/** devrel namespace for Google Developer Relations projects. */
com.innovus = com.innovus || {};

/** samples namespace for DevRel sample code. */
com.innovus.domi = com.innovus.domi || {};

/** hello namespace for this sample. */
com.innovus.domi.entrar = com.innovus.domi.entrar || {};




function logearse() {
	
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	var requestData = {};
	
	
	requestData.email = email;
	requestData.password = password;

	gapi.client.doomiTodos.loginEstado(requestData).execute(
			
			function(resp) {

				if (!resp.code) {
					if(resp.estado==true){
						var est= resp.estado;
						var key=resp.user.websafeKey;
						var mail=resp.idUser;
						
						window.location.href="sucursales.php?z3fja="+key+"";
						
						
						}
					else{
						alert("ingreso incorrecto");
						}
					
					
				}
			});

}
	function innovus() {

	document.getElementById('iniciar').onclick = function() {
	//se declaran aqui 3 variables que se utilizaran para validar el ingreso del cliente	
	var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	var email = document.getElementById("email").value;
	var password= document.getElementById("password").value;
	
	if(email == "" || !expr.test(email)){
		            
		alert("correo incorrecto");
         }
		 else{
			 if( password==""){
				 alert("Ingresa una contraseña");
				 }
				else{				
		//una vez se hayan digitado un email y un pass se ejecuta la funcion logearse
				logearse();
			}		
		}
	}

};
/*------------------------- -----------------------------------------*/
function innovus1(){
	
	alert('locasss');
	}

/*--------------------------- ----------------------------------------*/
com.innovus.domi.entrar.init = function(apiRoot) {
	
	var apisToLoad;
	var callback = function() {
		if (--apisToLoad == 0) {
			innovus();
		}
	}

	apisToLoad = 1;
	gapi.client.load('doomiTodos', 'v1', callback, apiRoot);
	
	};
	
/*--------------------------- ----------------------------------------*/

/*--------------------------- ----------------------------------------*/