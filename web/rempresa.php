<?php 
$z3fja = $_REQUEST['z3fja'];

if($z3fja==""){
	header ("Location:signin.html");
	}
else{
?>
<!DOCTYPE  html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="es">

<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
<meta charset="UTF-8">
<title>Registra Tu empresa..!</title>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<script src="js/upload.js"></script>
<script src="js/jquery-1.9.1.min.js"></script> 
<script src="js/jquery.autocomplete.min.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&language=es&region=CO&libraries=drawing"></script>
<script type="text/javascript" src="js/map.js"></script>

<script src="js/jquery.multiple.select.js"></script> 
<!-- Custom Theme files -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/horariosAtencion.css" rel="stylesheet" type="text/css" media="all" />
<!--<link rel="stylesheet" type="text/css" href="css/doomi.css"/>--> 
<link rel="stylesheet" type="text/css" href="css/empresas.css"/> 
<link rel="stylesheet" type="text/css" href="css/example.css"/>
<script src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script> 


<!-- Custom Theme files -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="doomi" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->
<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
<!-- dropdown -->
<script src="js/jquery.easydropdown.js"></script>
<script src="js/lecturaimagenes.js"></script>
<script src="js/regempresaysucursal.js"></script>
<style type="text/css">
     
      #panel {
        width: 200px;
        font-family: Arial, sans-serif;
        font-size: 13px;
        float: right;
        margin: 10px;
      }

      #color-palette {
        clear: both;
      }

      .color-button {
        width: 14px;
        height: 14px;
        font-size: 0;
        margin: 2px;
        float: left;
        cursor: pointer;
      }

      #delete-button {
        margin-top: 5px;
      }
    </style>


<link href="css/nav.css" rel="stylesheet" type="text/css" media="all"/>
<!--<script type="text/javascript" src="js/hover_pack.js"></script>-->
		  <script type="text/javascript">
		jQuery(document).ready(function($) {
			$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
			});
		});
	</script>
</head>
<body>
	<!-- header-section-starts -->
	<div class="c-header" id="home">
		<div class="top-header">
			<div class="container">
			<div class="logo">
				<a href="index.html"><img src="" alt="" /></a>
			</div>
				<div class="header-top-right">
				<!-- start search-->
				    <div class="search-box">
					    <div id="sb-search" class="sb-search">
							<form>
								<input class="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search">
								<input class="sb-search-submit" type="submit" value="">
								<span class="sb-icon-search"> </span>
							</form>
						</div>
                        
				    </div>
					<!-- search-scripts -->
					<script src="js/classie.js"></script>
					<script src="js/uisearch.js"></script>
						<script>
							new UISearch( document.getElementById( 'sb-search' ) );
						</script>
					<!-- //search-scripts -->

					<a href="cart.html"><i class="cart"></i></a>
				</div>
			
			</div>
		</div>
		</div>
		<!-- start login -->
	<div class="container">
		<div class="dreamcrub">
			   	 <ul class="breadcrumbs">
				 
                    <li class="home">
                       <a href="index.html" title="Go to Home Page"><img src="images/home.png" alt=""/></a>&nbsp;
                       <span>&gt;</span>
                    </li>
                    <li>
                      Iniciar sesiòn
                    </li>&nbsp;
                 
                </ul>
                <ul class="previous">
                	<li><a href="registroCliente.html"><?php 
										
					echo $z3fja; ?></a></li>
                </ul>
                <div class="clearfix"></div>
			   </div>
			   </div>

		
		   <div class="container">
                <div class="dreamcrub">
                    <div class="">
                        <div class="titulo">
                        <h4>Registra la informacion requerida de tu empresa</h4>
                        </div>
                        <div class="subTitulo">
                        <h4>Sube una foto de Perfil y de Portada</h4>
                        </div>
                         <form id="form1" runat="server" enctype="multipart/form-data">
                        <div class="archivo">
                        <input type="file" name="archivo" id="archivo"/>
                        <input type="hidden" name="nombre_archivo" value="" id="nombre_archivo"/>
                        </div>
                        <div class="fotosPerfil" id="fotosPerfil">
                        <img src="images/perfil.png" id="foto" name="foto"/>
                        </div>
                        
                        <div class="archivo">
                      <input type="file" name="archivo2" id="archivo2" class="archivo"/>                        </div>
                        <div class="fotosPortada">
                        <img src="images/portada.png" class="imgportada" id="foto2" name="foto2"/>              </div>
                        </form>
                        <div class="subTitulo">
                        <h4>Completa el siguiente formulario</h4>
                        </div>
                        <div class="formRegistroempresa1">
                        	<input type="text" placeholder="Nombre Sucursal" id="nombreSucursal" class="inputformEmpresa"/>
                            <textarea placeholder="Descripciòn" class="textareaform" id="descripcion"></textarea>
                            <input type="text" placeholder="Costo Domicilio" id="costoDomicilio" class="inputformEmpresa"/>
                            <input type="text" placeholder="Tiempo minimo de entrega" id="tiempoMinimo" class="inputformEmpresa"/>
                            <input type="text" placeholder="Valor Minimo del pedido" id="pedidoMinimo" class="inputformEmpresa"/>
                                                       
                            <div class="btnHorario">
                            <a href="#modal3"><b>Horario de atenciòn</b></a>                            </div>
                            <div id="modal3" class="modalmask">
		<div class="modalbox ">
			
			<div class="tituloHorarios" >
            <div class="tituloH">Horario de atención</div>
            <div class="imagenH">
            	<img src="images/circular116.png"/>
            </div>
            
            <div class="formHorario">
            	
            	<div class="cajasHoras" id="cajasHoras">       
                
                </div>
                
                <div class="botonAgregar">
                <img src="images/add52.png" /><a onclick="AgregarHorario()">Agregar otro Horario</a>
                </div>
                <div class="botonesFinal">
           			<a  class="btnguardar" value="guardar" id="getSelectsBtn">Guardar</a>
                    <a href="#close" title="Close" class="btncancelar">Cancelar</a>
                </div>
            
            </div>
            <div class="footerHorario">
            <b>Nota:</b> Es posible que Doomi revise la calidad de tus modificaciones antes de que se publiquen. 
            </div>
            </div>
		</div></div>

                            <input type="button" onClick="subirArchivos()" class="btnRegistrar" value="Registrar Datos Empresa"/>
                        </div>
                        <div class="formRegistroempresa2">
                        
                        	<div class="titulo">
                        	<h3>Indica en el mapa tu rango de trabajo</h3>
                        	</div>
                            <div class="mapa" id="map">
                            
                            
                            </div>
                        </div>                  
                        <div id="color-palette"></div>
                        
                        <div>
        <button id="delete-button">Delete Selected Shape</button>
      </div>         
                   </div> 
                    
                    
                    <div class="clearfix"></div>
                </div>
                
                
              <script src="js/jquery.multiple.select.js"></script>
   		
            </div>
	
		
		
		<!-- seccion del footer-->
		<div class="footer">
		<div class="up-arrow">
			<a class="scroll" href="#home"><img src="images/up.png" alt="" /></a>
		</div>
			<div class="container">
				<div class="copyrights">
					<p>Copyright &copy; 2015 Todos los derechos reservados | Desarrollado por WWW.INNOVUS.CENTER</p>
				</div>
				<div class="footer-social-icons">
					<a href="#"><i class="fb"></i></a>
					<a href="#"><i class="tw"></i></a>
					<a href="#"><i class="in"></i></a>
					<a href="#"><i class="pt"></i></a>
				</div>
				  <div class="clearfix"></div>
			</div>
		</div>
</body>
</html>
<script type="text/javascript">
        function init() {
           com.innovus.domi.entrar.init('https://domi-app.appspot.com/_ah/api');
		  // com.innovus.domi.entrar1.init('https://domi-app.appspot.com/_ah/api');
        }
</script>
<script>
	   function readURL(input) {
        var url="";
		
		if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
            $('#foto').attr('src', e.target.result);			
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#archivo").change(function(){
		readURL(this);
    });
	
	/*------------------------------------------*/
	
	 function readURL2(input) {
        var url="";
		
		if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
            $('#foto2').attr('src', e.target.result);			
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#archivo2").change(function(){
		readURL2(this);
    });
	
	

</script>
<script src="https://apis.google.com/js/client.js?onload=init"></script>

<?php   
}
?>

