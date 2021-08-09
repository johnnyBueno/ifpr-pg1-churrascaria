<?php
	@session_start();
	if(!isset($_SESSION['login'])){
		print("<script>window.location='login.php';</script>");			
	}


?>