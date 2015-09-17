<!DOCTYPE html>
<html>
<head>
<title>Registrar Empresa</title>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<!-- Custom Theme files -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="domicilios" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->
<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
<!-- dropdown -->
<script src="js/jquery.easydropdown.js"></script>
<script src="js/registrarempresa.js"></script>
<link href="css/nav.css" rel="stylesheet" type="text/css" media="all"/>
<script type="text/javascript" src="js/hover_pack.js"></script>
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
                	<li><a href="signin.html">Regresar a la pagina anterior</a></li>
                </ul>
                <div class="clearfix"></div>
			   </div>
			   </div>

		<section id="main">
		<div class="login-content">
		<div class="container">
			<div class="login-signup-form">
				
                <form method="post" action="javascript:void(0)" id="form">
				<div class="col-md-12 sign-up text-center">
					<h4>Registrate en Doomi</h4>
					<div class="cus_info_wrap">
						<label class="labelTop">
						E-mail:
						<span class="require">*</span>
						</label>
						<input type="text" value="" id="email" name="email">
					</div>
					<div class="clearfix"></div>
				    <div class="cus_info_wrap">
						<label class="labelTop">
						Contraseña:
						<span class="require">*</span>
						</label>
						<input type="password" value="" id="password" name="password">
					</div>
					<div class="clearfix"></div><div class="cus_info_wrap">
						<label class="labelTop confirmpass">
						Confirmar Contraseña:
						<span class="require">*</span>
						</label>
						<input type="password" value="" id="repassword">
					</div>
                    <div class="clearfix"></div><div class="cus_info_wrap">
						<label class="labelTop confirmpass">
						Nombres:
						<span class="require">*</span>
						</label>
						<input type="text" value="" id="nombres">
					</div>
                    <div class="clearfix"></div><div class="cus_info_wrap">
						<label class="labelTop confirmpass">
						Apellidos:
						<span class="require">*</span>
						</label>
						<input type="text" value="" id="apellidos">
					</div>
                    <div class="clearfix"></div>
                    <div class="cus_info_wrap">
						<label class="labelTop confirmpass">
						Telèfono:
						<span class="require">*</span>
						</label>
						<input type="text" value="" name="telefono">
					</div>
                    <div class="clearfix"></div><div class="cus_info_wrap">
						<label class="labelTop confirmpass">
						Cèdula:
						<span class="require">*</span>
						</label>
						<input type="text" value="" name="cedula">
					</div>
                    <div class="clearfix"></div><div class="cus_info_wrap">
						<label class="labelTop confirmpass">
						Pais:
						<span class="require">*</span>
						</label>
						<select id="pais" name="pais" style="width:71%;height:30px">
                        	<option value="" selected="selected" >Seleccione Pais...</option>
                                        <option value="co">Colombia</option>
                                        <option value="pe">Peru</option>
                                        <option value="ec">Ecuador</option>
                                        <option value="ar">Argentina</option>
                                        <option value="br">Brasil</option>
                        </select>
					</div>
                    
                    <div class="clearfix"></div><div class="cus_info_wrap">
						<label class="labelTop confirmpass">
						Ciudad:
						<span class="require">*</span>
						</label>
						<select id="pais" name="ciudad" style="width:71%;height:30px">
                        	<option value="" selected="selected" >Seleccione Ciudad...</option>
                                        <option value="ca">Cali</option>
                                        <option value="med">Medellin</option>
                                        <option value="ps">Pasto</option>
                                        <option value="pop">Popayan</option>
                                        <option value="bg">Bogota</option>
                        </select>
					</div>
                    
                    
                    <br>
					<div class="botton1">
					<input type="submit" value="REGISTRAR" id="registrar" name="registrar" class="botton">
				</div>
				</div>
				</form>
				
			</div>
		</div>
		</div>
		</div>
		</section>
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
           com.innovus.domi.login.init('https://domi-app.appspot.com/_ah/api');
        }
  		</script>
    	<script src="https://apis.google.com/js/client.js?onload=init"></script>