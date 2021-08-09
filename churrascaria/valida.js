function validar(){
	var nome = document.frmPrincipal.txtNome.value;
	var data = document.frmPrincipal.txtData.value;
	var hora = document.frmPrincipal.txtHora.value;
	var telefone = document.frmPrincipal.txtTelefone.value;
	var convidados = document.frmPrincipal.txtConvidado.value;
	
	

if(nome == ""){
	alert('O campo Nome deve ser preechido!');
	document.frmPrincipal.txtNome.focus();
	return false;
}
if(!isNaN(nome)){
	alert('O campo Nome não deve conter numeros!');
	document.frmPrincipal.txtNome.value = "";
	document.frmPrincipal.txtNome.focus();
	return false;
}

//--------------------------------------------------------- DATA

 if(data == ""){
	alert('Informe a Data da reserva!');
	document.frmPrincipal.txtData.focus();
	return false;
}




//--------------------------------------------------------- hora
 
 if(hora == ""){
	alert('Informe a Hora desejada para a reserva!');
	document.frmPrincipal.txtHora.focus();
	return false;
}
if(isNaN(hora)){
	alert('O campo Hora deve conter apenas numeros');
	document.frmPrincipal.txtHora.value = "";
	document.frmPrincipal.txtHora.focus();
	return true;
}
 

if(hora >= 23 || hora <= 10){
	alert('horario fora do espediente, ou você esta usando o sistema de 12hrs, use o sistema de 24hrs Exemplo: se a reserva for as 6 é só digitar 18!');
	document.frmPrincipal.txtHora.value = "";
	document.frmPrincipal.txtHora.focus();
	return false;
}
//----------------------------------------------------------- telefone


if(telefone == ""){
	alert('Preencher o campo Telefone');
	document.frmPrincipal.txtTelefone.focus();
	return false;
}
//----------------------------------------------------------convidados

if(isNaN(convidados)){
	alert('O campo Nº de convidados deve conter apenas numeros');
	document.frmPrincipal.txtConvidado.value = "";
	return true;
}
//------------------------------------------------------------
/*if(convidados != ""){
	alert(document.frmPrincipal.txtNome.value + ' sua reserva para o dia ' + document.frmPrincipal.txtData.value  +  ' as ' + document.frmPrincipal.txtHora.value + 'hrs para '+ document.frmPrincipal.txtConvidado.value +  ' pessoas foi realizada com sucesso!');
	
	document.frmPrincipal.action = "bd_reserva.php";
	document.frmPrincipal.submit();
	return true;
}*/
else

document.frmPrincipal.action = "bd_reserva.php";
document.frmPrincipal.submit();
	return true;
}

