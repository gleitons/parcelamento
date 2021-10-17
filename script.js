function senhaSandro() {
    senha = prompt("digite sua senha: Digite sair para cancelar","");
	var nomesan = window.prompt("Digite seu nome:")
	nomesandro.innerHTML = `<h1 class="titleBemVindo">Bem vindo ${nomesan}</h1>`
	if (senha =="sramos"){
	document.getElementById('pagina').style.display = 'block';
	}else if(senha ==""){
		alert("campo obrigatorio");window.location = "sandro-ramos.html" 
		}else if(senha =="sair"){
		alert("cancelado");window.location = "https://salamineira.com"
}else{
alert("senha errada");window.location = "sandro-ramos.html"
}
}

function lembrese() {
	window.alert('Lembre-se dos dados para emitir a parcela: CPF, CNPJ e código do Simples')
}

function senhatutu() {
	
    senha = prompt("digite sua senha: Digite sair para cancelar","");
	var nome = window.prompt("Digite seu nome:")
	
	if (senha =="tramos"){
	nometutu.innerHTML = `<h1 class="titleBemVindo">Bem vindo ${nome}</h1>`	
	document.getElementById('pagina').style.display = 'block';
	}else if(senha ==""){
		alert("campo obrigatorio");window.location = "tutu-ramos.html" 
		}else if(senha =="sair"){
		alert("cancelado");window.location = "https://salamineira.com"
}else{
alert("senha errada");window.location = "tutu-ramos.html"
}

}
function voltar() {
	window.history.back()
}
function construcao(){
	alert("Estamos em construção, em breve este tutorial estará pronto:")
}