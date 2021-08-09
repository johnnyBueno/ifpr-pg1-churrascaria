// JavaScript Document

function mudar(){
	
	var num = Math.floor(Math.random()*3);
	
	
	
	imagem = document.getElementById("imagem");
	if(num == 0){
		var figura = "<img src='IMAGENS/maxi.gif'>";
		
		
	}else if(num ==1){
		
		var figura = "<img src='IMAGENS/skol.gif'> ";
		
		
	}else if(num ==2){
		
		var figura = "<img src='IMAGENS/MTV-Logo.jpg'> ";
		
		
		
		
	}
	
	
	imagem.innerHTML = figura;
	
	
	
	
	
}



function mudar2(){
	
	var num = Math.floor(Math.random()*4);
	
	
	
	imagem = document.getElementById("imagem2");
	if(num == 0){
		var figura = "<img src='IMAGENS/maxi.gif'>";
		
		
	}else if(num ==1){
		
		var figura = "<img src='IMAGENS/skol.gif'> ";
		
		
	}
		
		
	else{
		 
		var figura = "<img src='IMAGENS/MTV-Logo.jpg'>";
		
		
		
	}
	
	
	imagem.innerHTML = figura;
	
	
	
	
	
}

