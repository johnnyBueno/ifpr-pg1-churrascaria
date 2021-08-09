<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script language="javascript" type="text/javascript" src="validar cliente.js">
</script>
<script language="javascript" type="text/javascript" src="mascaras.js">
</script>
<link rel="stylesheet" type="text/css" href="estioloform.css" />
</head>

<body onload="alert('Você tem que ser maior de 18 anos para acessar está pagina!')">
	<h1>Cadastre-se para receber informações</h1>
    <form name="frmCliente" method="post">
    	<table>
        	<tr>
            	<td>Nome:</td><td><input type="text" name="txtNome" /></td>
            </tr>
            <tr>
            	<td>Cidade:</td><td><input type="text" name="txtCidade" /></td>
            </tr>
            <tr>
            	<td>Bairro:</td><td><input type="text" name="txtBairro" /></td>
            </tr>
            <tr>
            	<td>Rua:</td><td><input type="text" name="txtRua" /></td>
            </tr>
             <tr>
            	<td>Numero:</td><td><input type="text" name="txtNumero" /></td>
            </tr>
            <tr>
            	<td>CPF:</td><td><input type="text" name="txtCpf" maxlength="14" onkeyup="mascaraCpf(this)" /></td>
            </tr>
            <tr>
            	<td>Senha:</td><td><input type="password" name="txtSenha" /></td>
            </tr>
            <tr>
            	<td>Confirme a senha:</td><td><input type="password" name="txtConfSenha" /></td>
            </tr>
            <tr>
            	<td>Email:</td><td><input type="text" name="txtEmail" /></td>
            </tr>
            <tr>
            	<td>Telefone:</td><td><input type="text" name="txtTelefone" maxlength="14" onkeyup="mascaraTelefone(this)" /></td>
            </tr>
            <tr>
            	<td>Celular:</td><td><input type="text" name="txtCelular" maxlength="14" onkeyup="mascaraTelefone(this)"/></td>
            </tr>
            <tr>
            	<td align="right"><input type="button" name="btnEnviar" value="Enviar" onclick="valida()"></td>
                <td><input type="reset" name="btnApagar" value="Apagar" /></td>
            </tr>
        </table>
    </form>
    <a href="formulario.php">reserva</a>
</body>
</html>
