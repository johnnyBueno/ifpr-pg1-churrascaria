<?php
	require_once("conecta.php");
	
	// Aquisição dos dados do form
	$login = $_POST['txtLogin'];
	$senha = $_POST['txtSenha'];
	
	$login_sql = "select cli_nome, senha
				  from churrascaria.cliente
				  where cli_nome = '$login' and senha = md5('$senha')";
	$login_result = pg_query($conect,$login_sql) or die("Falha na consulta");
	
	$rlogin = pg_fetch_result($login_result,"cli_nome");
	
	if($rlogin == $login) {	
		session_start();
		$_SESSION['login'] = $rlogin;	
		print("<script>window.location='formulario.php';</script>");
	}
	else {
		print("<script>alert('Login ou senha incorretos');</script>");
		print("<script>window.location='formulario.php';</script>");
	}		
?>