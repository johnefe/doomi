
<?php 
$z3fja = $_REQUEST['z3fja'];
if($z3fja==""){
	header ("Location:index.html");
	}
else{
?>
<!DOCTYPE html>
<html>
<head>
<title>Sucursales</title>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<script src="js/prueba.js"></script>
<!-- Custom Theme files -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->
<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
<!-- dropdown -->
<script src="js/jquery.easydropdown.js"></script>
<link href="css/nav.css" rel="stylesheet" type="text/css" media="all"/>

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
                                <input type="hidden" name="lb" value="<?php echo $z3fja;?>" class="lb" id="lb"/>
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
			<div class="navigation">	
			<div>
              <label class="mobile_menu" for="mobile_menu">
              <span>Menu</span>
              </label>
              <input id="mobile_menu" type="checkbox">
				
		</div>			
	 </div>
			</div>
		</div>
		</div>
		<!-- start Contact-page -->
	<!-- content-section-starts -->
	<div class="container">
<div class="dreamcrub">
			   	 <ul class="breadcrumbs">
				 
                    <li class="home">
                      <span class="red">&nbsp;BIENVENIDO:&nbsp;</span>                    </li>
                    <li>
                       <a name="tuNombreCliente" id="tuNombreCliente">TunombreCliente</a>
                    </li>&nbsp;
                       					
                </ul>                <ul class="previous">
                	<li><a href="index.html">Salir de mi plataforma</a></li>
                </ul>
                <div class="clearfix"></div>
			   </div>
			   </div>

<div class="container">
	<div class="coats sing-c text-center">
			<h3 class="c-head">Has entrado a,<a id="nombreEmpresa" class="nombreEmpresa"></a> elige una sucursal</h3>
			<!-- seccion de sucursales-->
            <div class="" id="contenidoSucursales" >
            	
          	    
          	   </div>
               <div class="clearfix"></div>
            </div>            
             

			<!-- fin de seccion de sucursales-->            
		</div>

</div>

	<!-- content-section-ends -->

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
<?php }?>

<script type="text/javascript">
        function init() {
           com.innovus.domi.entrar.init('https://domi-app.appspot.com/_ah/api');
        }
</script>
<script src="https://apis.google.com/js/client.js?onload=init"></script>