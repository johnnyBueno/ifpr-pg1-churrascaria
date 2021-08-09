// JavaScript Document
function valida(){
	var nome = document.frmCliente.txtNome.value;
	var cidade = document.frmCliente.txtCidade.value;
	var bairro = document.frmCliente.txtBairro.value;
	var rua = document.frmCliente.txtRua.value;
	var numero = document.frmCliente.txtNumero.value;
	var cpf = document.frmCliente.txtCpf.value;
	var senha = document.frmCliente.txtSenha.value;
	var confsenha = document.frmCliente.txtConfSenha.value;
	
	if(nome == ""){
		alert('O campo Nome deve ser preechido!');
		document.frmCliente.txtNome.focus();
		return false;
	}
	//-------------------------------------------------cidade
	if(cidade == ""){
		alert('O campo Cidade deve ser preechido!');
		document.frmCliente.txtCidade.focus();
		return false;
	}
	//----------------------------------------------------bairro
	if(bairro == ""){
		alert('O campo Bairro deve ser preechido!');
		document.frmCliente.txtBairro.focus();
		return false;
	}
	//------------------------------------------------------rua
	if(rua == ""){
		alert('O campo Rua deve ser preechido');
		document.frmCliente.txtRua.focus();
		return false; 
	}
	//-------------------------------------------------------numero end
	if(numero == ""){
		alert('O campo Numero deve ser preechido');
		document.frmCliente.txtNumero.focus();
		return false; 
	}

	if(isNaN(numero)){
		alert('O campo Numero deve conter apenas numeros');
		document.frmCliente.txtNumero.value = "";
		document.frmCliente.txtNumero.focus();
		return false;
	}
	//------------------------------------------------------cpf
	if(cpf == ""){
		alert('O campo CPF deve ser preenchido');
		document.frmCliente.txtCpf.focus();
		return false;
	}
	//-----------------------------------------------------senha
	if(senha == ""){
		alert('O campo Senha deve ser preenchido!');
		document.frmCliente.txtSenha.focus();
		return false;
	}
    if(confsenha == ""){
		alert('A senha deve ser confirmada!');
		document.frmCliente.txtConfSenha.focus();
		return false;
	}
	if(confsenha != senha){
		alert('As senhas não correspondem!');
		document.frmCliente.txtSenha.value = "";
		document.frmCliente.txtConfSenha.value = ""; 
		document.frmCliente.txtSenha.focus();
		return false;
	}
	//----------------------------------------------------else
	
	else 
		document.frmCliente.action = "bd_cad_cliente.php";
		document.frmCliente.submit();
		return true;
}