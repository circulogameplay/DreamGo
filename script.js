function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.lenght);

    if ((usuario.lenght >=1) &&
        (dominio.lenght >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.lenght - 1)) {
            document.getElementById("msgemail").innerHTML="E-mail válido";
            alert("E-mail válido");
        }
        else {
            document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
            alert("E-mail inválido")
        }
}