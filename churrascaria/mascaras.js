// JavaScript Document

// Máscara para campos de Data
function mascaraData(campo) {
	var data = campo.value;
	
	if(data.length == 2 || data.length == 5) {
		campo.value = data + '/';
	}
}
//-----------------------------------telefone

function mascaraTelefone(campo) {
	var telefone = campo.value;
	if(telefone.length == 3) {
		campo.value = '('+telefone+')';
	}
	else if(telefone.length == 9){
		campo.value = telefone +'-';
	}
	
}
//-----------------------------------hora

function mascaraHora(campo) {
	var hora = campo.value;
	if(hora.length == 2) {
		campo.value = hora + ':';
	}
}
//----------------------------------cpf
function mascaraCpf(campo) {
	var cpf = campo.value;
	if(cpf.length == 3 || cpf.length == 7){
		campo.value = cpf+'.';
	}
	else if(cpf.length == 11){
		campo.value = cpf+'-';
	}
}