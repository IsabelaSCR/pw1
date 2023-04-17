function validar() {
		var usuario = frmLogin.validationCustomUsername.value;
		var senha = frmLogin.exampleInputPassword1.value;


		if (usuario == ""){
			frmLogin.validationCustomUsername.focus();
			return false;
		}

		if (senha == ""){
			frmLogin.exampleInputPassword1.focus();
			return false;
		}

		
		gravarCookie();
}

function criarCookie(nomeCookie, valorCookie, dias) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + dias	);
	document.cookie = nomeCookie+"="+valorCookie+"; expires="+exdate.toUTCString();
}

function gravarCookie() {
	var nome = document.getElementById("validationCustomUsername").value+"=";
	criarCookie("login", nome, 1);	
}