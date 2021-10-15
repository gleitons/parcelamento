function senhaSandro() {
    senha = prompt("digite sua senha: Digite sair para cancelar","");
	if (senha =="sramos"){
	document.getElementById('pagina').style.display = 'block';
	}else if(senha ==""){
		alert("campo obrigatorio");window.location = "login.html" 
		}else if(senha =="sair"){
		alert("cancelado");window.location = "https://salamineira.com"
}else{
alert("senha errada");window.location = "login.html"
}
}