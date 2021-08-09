<?
/*
        phpX Logon Using v1.1
     Desenvolvido por:    Milton Teles Filho
     Data da versão:      15/01/2006
     Número da versão:    001
     Versão:              1.1
     Desenvolvido em Poços de Caldas, MG
     http://www.phpx.com.br/

     index.php
*/
 include("conecta.php");
if(!empty($_GET['erro'])){
  echo "<font color=red><b>$erro</b></font><BR>";
}
?>
<form method="POST" action="<?=$url;?>/login.php">
Login: <input type="text" size="20" name="l"><BR>
Senha: <input type="password" size="20" name="s"><BR>
<input type="submit" value="Entrar"><BR><a href=reg.php>Registre-se</a>
</form>
