// JavaScript Document
var com = com || {};

/** devrel namespace for Google Developer Relations projects. */
com.innovus = com.innovus || {};

/** samples namespace for DevRel sample code. */
com.innovus.domi = com.innovus.domi || {};

/** hello namespace for this sample. */
com.innovus.domi.entrar = com.innovus.domi.entrar || {};



/*----------------------------------------------------*/
function innovus1() {
	document.getElementById('registrar').onclick = function() {
	var locojo=document.getElementById("miid");
	var esmio=locojo.getAttribute("pase");
	var nomempresa=document.getElementById("nomempresa").value;
	var descripcion=document.getElementById("descripcion").value;
	alert(esmio+"--"+nomempresa+"--"+descripcion);
	}
}
/*--------------------------------------------------------------------*/



/*------------------------- -----------------------------------------*/


/*--------------------------- ----------------------------------------*/
com.innovus.domi.entrar.init = function(apiRoot) {
	
	var apisToLoad;
	var callback = function() {
		if (--apisToLoad == 0) {
			innovus1();
		}
	}

	apisToLoad = 1;
	gapi.client.load('doomiClientes', 'v1', callback, apiRoot);
	
	};
	
/*--------------------------- ----------------------------------------*/

/*--------------------------- ----------------------------------------*/