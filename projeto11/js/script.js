function validar() {
	var usuario = frmLogin.usuario.value;
	var senha = frmLogin.senha.value;
	var perfil = frmLogin.perfil.value;
	
	if (usuario == ""){
		alert('Preencha com seu Usuário!');
		frmLogin.usuario.focus();
		return false;
	}
	
	if (senha == ""){
		alert('Digite a sua senha!');
		frmLogin.senha.focus();
		return false;
	}
	
	if (perfil == ""){
		alert('Selecione o seu perfil!');
		frmLogin.perfil.focus();
		return false;
	}
}