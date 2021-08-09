<?php
	
	require_once('conecta.php');
	
	$nome = $_POST['txtNome'];
	$senha = $_POST['txtSenha'];

	$sql_select = "select * from 'churrascaria'.cliente
where cli_nome = '$nome' and email = '$senha'";

	if($nome == 'cli_nome' && $senha == 'email'){
		echo "<script>alert(os campos correspondem)</script>";
	}
	else if($nome != 'nome' && $senha != 'email'){
		echo "<script>alert(não correspondem)</script>";
	}
?>