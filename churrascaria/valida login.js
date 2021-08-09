// JavaScript Document

function validaUsuario() {
	var nome = document.frmPrincipal.txtNome.value;
	var login = document.frmPrincipal.txtLogin.value;
	var senha = document.frmPrincipal.txtSenha.value;
	var confSenha = document.frmPrincipal.txtConfSenha.value;
	
	if(nome == "") {
		alert("Campo 'Nome' deve ser preenchido.");
		document.frmPrincipal.txtNome.focus();
		return false;
	}
	if(login == "") {
		alert("Campo 'Login' deve ser preenchido.");
		document.frmPrincipal.txtLogin.focus();
		return false;
	}
	if(senha == "") {
		alert("Campo 'Senha' deve ser preenchido.");
		document.frmPrincipal.txtSenha.focus();
		return false;
	}
	if(confSenha == "") {
		alert("Campo 'Confirmar Senha' deve ser preenchido.");
		document.frmPrincipal.txtConfSenha.focus();
		return false;
	}
	
	// Validação da conf. de senha
	if(senha != confSenha) {
		alert("Campo 'Confirmar Senha' diferente do campo 'Senha'.");
		document.frmPrincipal.txtSenha.value = "";
		document.frmPrincipal.txtConfSenha.value = "";
		document.frmPrincipal.txtSenha.focus();
		return false;
	}
	
	return true;
}

function validaLogin() {
	// Aquisição de dados do formulário
	var login = document.frmPrincipal.txtLogin.value;
	var senha = document.frmPrincipal.txtSenha.value;
	
	if(login == "") {
		alert("Campo 'Login' deve ser preenchido");
		document.frmPrincipal.txtLogin.focus();
		return false;
	}
	if(senha == "") {
		alert("Campo 'senha' deve ser preenchido");
		document.frmPrincipal.txtSenha.focus();
		return false;
	}
	
	return true;
}

function cadastrar(destino) {
	switch(destino) {
		case "bd_cad_usuario.php":
			if(validaUsuario()) { // Se a validação foi concluída
				document.frmPrincipal.action = destino;
				document.frmPrincipal.submit();
			}
			break;
		case "autentica.php":			
			if(validaLogin()) { // Se a validação foi concluída
				document.frmPrincipal.action = destino;
				document.frmPrincipal.submit();
			}
			break;
	}
}

function limpar(pagina) {
	window.location = pagina;
}