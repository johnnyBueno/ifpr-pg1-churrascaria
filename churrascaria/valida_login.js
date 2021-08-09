// JavaScript Document

function validaUsuario() {
	var nome = document.frmLogin.txtNome.value;
	var login = document.frmLogin.txtLogin.value;
	var senha = document.frmLogin.txtSenha.value;
	var confSenha = document.frmLogin.txtConfSenha.value;
	
	if(nome == "") {
		alert("Campo 'Nome' deve ser preenchido.");
		document.frmLogin.txtNome.focus();
		return false;
	}
	if(login == "") {
		alert("Campo 'Login' deve ser preenchido.");
		document.frmLogin.txtLogin.focus();
		return false;
	}
	if(senha == "") {
		alert("Campo 'Senha' deve ser preenchido.");
		document.frmLogin.txtSenha.focus();
		return false;
	}
	if(confSenha == "") {
		alert("Campo 'Confirmar Senha' deve ser preenchido.");
		document.frmLogin.txtConfSenha.focus();
		return false;
	}
	
	// Validação da conf. de senha
	if(senha != confSenha) {
		alert("Campo 'Confirmar Senha' diferente do campo 'Senha'.");
		document.frmLogin.txtSenha.value = "";
		document.frmLogin.txtConfSenha.value = "";
		document.frmLogin.txtSenha.focus();
		return false;
	}
	
	return true;
}

function validaLogin() {
	// Aquisição de dados do formulário
	var login = document.frmLogin.txtLogin.value;
	var senha = document.frmLogin.txtSenha.value;
	
	if(login == "") {
		alert("Campo 'Login' deve ser preenchido");
		document.frmLogin.txtLogin.focus();
		return false;
	}
	if(senha == "") {
		alert("Campo 'senha' deve ser preenchido");
		document.frmLogin.txtSenha.focus();
		return false;
	}
	
	return true;
}

function cadastrar(destino) {
	switch(destino) {
		case "bd_cad_usuario.php":
			if(validaUsuario()) { // Se a validação foi concluída
				document.frmLogin.action = destino;
				document.frmLogin.submit();
			}
			break;
		case "autentica.php":			
			if(validaLogin()) { // Se a validação foi concluída
				document.frmLogin.action = destino;
				document.frmLogin.submit();
			}
			break;
	}
}

function limpar(pagina) {
	window.location = pagina;
}