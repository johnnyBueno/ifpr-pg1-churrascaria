<?php
	// Arquivo que realiza o cadastro no Banco de Dados
	
	require_once("conecta.php"); // Chama o arquivo de conexão com o BD
	
	// Aquisição de dados do formulário
	$nome = $_POST['txtNome'];	
	$cidade = $_POST['txtCidade'];
	$bairro = $_POST['txtBairro'];
	$rua = $_POST['txtRua'];
	$numero = $_POST['txtNumero'];
	$cpf = $_POST['txtCpf'];
	$senha = $_POST['txtSenha'];
	$email = $_POST['txtEmail'];
	$senha = $_POST['txtSenha'];
	
	
	
	$telefone = $_POST['txtTelefone'];
	$celular = $_POST['txtCelular'];
		
		// Inserção do BD
		$sql_insert = "insert into churrascaria.cliente(cli_nome,cli_end_cidade,cli_end_bairro,cli_end_rua,cli_end_numero,cli_cpf,email,senha) values ('$nome','$cidade','$bairro','$rua','$numero','$cpf','$email',md5('$senha'))";
		 pg_query($conect,$sql_insert) or die("Falha na inserção");
		 
		 $sql_select ="select cli_cod from churrascaria.cliente where cli_cpf='$cpf'";
		 echo $sql_select;
		 $result=pg_query($conect,$sql_select) or die("Falha na inserção");
		 
		 $cli_cod=pg_fetch_result($result,"cli_cod");
		
		 $sql_insert_tel = "insert into churrascaria.cliente_telefone(tel_1,tel_2,cli_cod) values('$telefone','$celular','$cli_cod' )";
		
		 
		
		pg_query($conect,$sql_insert_tel) or die("Falha na inserção");
		$operacao = "Inserção";


	
	// Volta para a página de cadastro
	print("<script>alert('$operacao efetuada com sucesso!');</script>");
	print("<script>window.location='formulario.php';</script>");
?>