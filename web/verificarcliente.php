
<?php 
$z3fja = $_REQUEST['z3fja'];
if($z3fja==""){
	header ("Location:http://localhost:83/web/index.html");
	}
else{
?>
<!DOCTYPE html>
<html>
<head>
<title>productos</title>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<!-- Custom Theme files -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/form.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Pakhi Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->
<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
<!-- dropdown -->
<script src="js/jquery.easydropdown.js"></script>
<script src="js/prueba.js"></script>
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
			<div class="navigation">	
			<div>
              <label class="mobile_menu" for="mobile_menu">
              <span>Menu</span>
              </label>
              <input id="mobile_menu" type="checkbox">
				<ul class="nav">
              <li class="active"><a href="index.html">Home</a></li>                      
          </ul>
		</div>			
	 </div>
			</div>
		</div>
		</div>
		<!-- start Dresses-page -->
	<!-- content-section-starts -->
	<div class="container">
	
			   </div>
			   <div class="container">
	   <div class="ft-ball">
       <!-- seccion de productos -->
		<div class="cont span_2_of_3">
		  <div class="mens-toolbar">
             <!-- para ordenar productoss -->
              <div class="sort">
              
               	<div class="sort-by">
		            <label>Ordenar productos</label>
		            <select>
		                            <option value="">
		                    Popularity               </option>
		                            <option value="">
		                    Price : High to Low               </option>
		                            <option value="">
		                    Price : Low to High               </option>
		            </select>
		            <a href=""><img src="images/arrow2.gif" alt="" class="v-middle"></a>
               </div>
              
    		</div>
             <!-- para ordenar productoss -->
             
	          <!-- ver por paginas productoss -->
              <div class="pager">   
	           <div class="limiter visible-desktop">
	            <label>Show</label>
	            <select>
	                            <option value="" selected="selected">
	                    9                </option>
	                            <option value="">
	                    15                </option>
	                            <option value="">
	                    30                </option>
	                        </select> per page        
	             </div>
	       		<ul class="dc_pagination dc_paginationA dc_paginationA06">
				    <li><a href="#" class="previous">Pages</a></li>
				    <li><a href="#">1</a></li>
				    <li><a href="#">2</a></li>
			  	</ul>
		   		<div class="clearfix"></div>
	    	</div>
            <!-- fin ver por paginas productoss -->
     	    <div class="clearfix"></div>
	       </div>
			    <div class="box1">
                <!-- prodcutos 1 --->
				   
				    
                    <h4>Iniciar Sesiòn</h4></br>
					<form method="post" action="javascript:void(0)" id="form">				
					<div class="cus_info_wrap">
						<label  class="lb" id="lb"><?php echo $z3fja;?></label>               
						<input type="text" name="email" id="email">
					</div>
					<div class="clearfix"></div>
					<div class="cus_info_wrap">
						<label class="labelTop">
						Contraseña:
						<span class="require">*</span>
						</label>
						<input type="password" value="" name="password" id="password">
					</div>
					<div class="clearfix"></div>
					<div class="sky-form span_99">
					<label class="checkbox"><input type="checkbox" name="checkbox" >Recordar contraseña</label>
				</div>
				<div class="botton1">
					<input type="submit" value="Iniciar" id="iniciar" class="botton">
				</div>
                </form>
				  <div class="clearfix"></div>
                  
			  </div>
			   
			  
			  </div>
        <!-- fin  seccion de productos -->
        
        <!-- seccion de menu de opciones -->
     	    <div class="rsidebar span_1_of_left">
				   <section  class="sky-form">
				   <div class="product_right">
     			<h3 class="m_2">Tus Categorias</h3>
     			    <select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"metro"}'>
            			<option value="0">New</option>	
						<option value="1">tempor</option>
						<option value="2">congue</option>
					</select>
				   
			       </div>
                   	  
				</section>
		        <section  class="sky-form">
					<h4>Brand</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Adidas by Stella McCartney</label>
							</div>
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Asics</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Bloch</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Bloch Kids</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Capezio</label>
								<label class="checkbox"><input type="checkbox" name="checkbox" ><i></i>Capezio Kids</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Nike</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Zumba</label>
							</div>
						</div>
		       </section>
		       
		       
		       
		</div>
			  <div class="clearfix"></div>
		   </div>
        <!-- fin seccion de menu de opciones -->    
			</div>
    
    
		<!-- content-section-ends -->

		<!--footer -->
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
        <!-- fin footer -->
</body>
</html>
<?php }?>

<script type="text/javascript">
        function init() {
           com.innovus.domi.entrar.init('https://domi-app.appspot.com/_ah/api');
        }
</script>
<script src="https://apis.google.com/js/client.js?onload=init"></script>