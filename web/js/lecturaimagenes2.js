// JavaScript para la lectura de imagenes en subir imagenes en registro empresa


$(document).ready(function() {
			
			var wrapper= $("<div/>").css({height:0,width:0,'overflow':'hidden'});
			var wrapper1= $("<div/>").css({height:0,width:0,'overflow':'hidden'});
			/*-------------------foto de portada--------------------------*/
			var fileInput0=$("#file-0").wrap(wrapper);
			$("#photo-0").on("click",function(){
				fileInput0.click();
				}).show();				
			/*-----------------------------------------------------------*/	
			
			
            /*--------------------foto de perfil -------------------------*/
			
			//var fileInput1=$("#file-1").wrap(wrapper1);
			//$("#photo-1").on("click",function(){
			//	fileInput1.click();
			//	}).show();
            /*-----------------------------------------------------------*/
			
			
			fileInput0.on("change", function(){
				var file= this.files[0],
				fileName=this.name,
				fileSize=this.size;
				var fileType=this.type;
				
				if(file.type.match(/image.*/)){
			//validamos el tipo de archivo o file que deseamos subir.	
			//FileReader API HTML5
			
			var reader = new FileReader();
				reader.onload= function(e){
			//console.log("<img src='"+e.target.result+"'/>")
			$("#photo-0").html("");
			$("#cerrar-0").html("");
			$("#photo-0").append("<img src='"+e.target.result+"' id='thumb-0' class='thumb'/>");
			$("#cerrar-0").show(function(){
				$("#cerrar-0").append("<img src='images/closed.png' widht='22' height='22' alt='close' />");
				});
				}
			
			reader.readAsDataURL(file);
			}else{
					alert("Solo se permiten, JPG, GIF,PNG");
					}
				
				});//preload de imagenes
				
				//boton cerrar
				$(" #cerrar-0").on("click",function(){
					$("#thumb-0,#cerrar-0").hide();
					fileInput0.replaceWith(fileInput0=fileInput0.val('').clone(true));
					
					});				
							
			
        });//fin del dom-- 
		

