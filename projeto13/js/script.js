function validar() {
		var usuario = frmLogin.usuario.value;
		var senha = frmLogin.senha.value;
		var perfil = frmLogin.perfil.value;

		if (usuario == ""){
			alert("Preencha o seu nome de Usuário!");
			frmLogin.usuario.focus();
			return false;
		}

		if (senha == ""){
			alert("Digite sua senha!");
			frmLogin.senha.focus();
			return false;
		}

		if (perfil == ""){
			alert("Escolha o seu perfil!");
			frmLogin.perfil.focus();
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
	var nome = document.getElementById("usuario").value+"="+document.getElementById("perfil").value+"="+str_data+"="+str_hora;;
	criarCookie("login", nome, 1);	
}