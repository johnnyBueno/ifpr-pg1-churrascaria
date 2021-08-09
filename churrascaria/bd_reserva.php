<?php
	require_once("conecta.php"); // chama o arquivo de conexão com o banco
	
	//dados do formulario
	$nome = $_POST['txtNome'];
	$data = $_POST['txtData'];
	$hora = $_POST['txtHora'];
	$convidado = $_POST['txtConvidado'];
	$telefone = $_POST['txtTelefone'];
	
	
	// Inserção do BD
		 
		 
	
	$sql_insert = "insert into churrascaria.reserva(res_cliente, res_data, res_hora, res_quantidade, res_tel_cliente) values ('$nome','$data','$hora','$convidado','$telefone')";
	
	pg_query($conect, $sql_insert) or die("Falha na inserção");
	
	// Volta para a página de cadastro
	if($convidado != ""){
		print("<script>alert('$nome sua reserva para $convidado convidados para o dia $data as $hora hrs foi realizada com sucesso')</script>");
	print("<script>window.location='formulario.php';</script>");
	return true;
	}
	else if($convidado == ""){
	print("<script>alert('$nome sua reserva foi realizada com sucesso para o dia $data as $hora hrs!');</script>");
	print("<script>window.location='formulario.php';</script>");
	}
?>