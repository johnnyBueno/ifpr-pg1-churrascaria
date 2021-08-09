<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script language="javascript" type="text/javascript" src="valida.js">
</script>
<script language="javascript" type="text/javascript" src="mascaras.js">
</script>
<link rel="stylesheet" type="text/css" href="estioloform.css" />
</head>

<body>
	<form name="frmPrincipal" method="post">
    	<table>
        	<tr>
            	<td align="right">Nome:</td><td><input type="text" name="txtNome" /></td>
            </tr>
            <tr>
            	<td align="right">Data:</td><td>
               		<input type="text" name="txtData"  size="10" maxlength="10" onkeyup="mascaraData(this)" />
                	
            </tr>
            <tr>
            	<td align="right">Hora:</td><td><input type="text" name="txtHora" size="4" onmouseup="alert('Use o padrão 24hrs!')"/></td>
            </tr>
            <tr>
            	<td align="right">Nº de Convidados:</td><td><input type="text" name="txtConvidado" size="2" onmouseup="alert('Apenas preecha esse campo se tiver algum covidado!')" /><font color="#FF0000" >*Apenas preecha esse campo se tiver convidados</font></td>
            </tr>
            <tr>
            	<td align="right">Telefone:</td><td><input name="txtTelefone" type="text" onkeyup="mascaraTelefone(this)" maxlength="14" /></td>
            </tr>
        
            <tr>
            	<td align="center">
                	<input type="button" name="btnEnviar" value="Enviar" onclick="validar()">
                    <input type="submit" name="btnApagar" value="Apagar" />
                </td>
            </tr>
          
        </table>
    </form>
</body>
</html>