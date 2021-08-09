<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Sistema Informática para Internet</title>
    <link rel="stylesheet" href="estilo2.css" type="text/css" />
    <script language="javascript" type="text/javascript" src="valida_login.js">
	</script>
</head>

<body>
	<h1>Login</h1>
    <form name="frmLogin" method="post">
    <table id="formulario">
    	<tr>
        	<td>Login</td>
            <td>
            	<input name="txtLogin" size="50" maxlength="50" />
            </td>
        </tr>
        <tr>
        	<td>Senha</td>
            <td>
            	<input type="password" name="txtSenha" size="20" maxlength="20" />
            </td>
        </tr>
        <tr>
        	<td>&nbsp;</td>
            <td>
            	<input type="button" name="btnEntrar" value="Entrar" onclick="cadastrar('autentica.php');"/>
                <input type="reset" name="btnLimpar" value="Limpar" />
            </td>
        </tr>
    </table>
    <a href="cadasro_cliente.php">Cadastre-se</a>
    </form>
</body>
</html>