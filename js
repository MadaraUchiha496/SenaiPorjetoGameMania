//alert('Exemplo comando alert');
//console.log('Mensagem enviada pelo console');
/*
    var x = document.getElementById('contextText');
    if (x.style.display === 'none'){
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
*/
function validarSenhaForca() {
    var senha = document.getElementById("input-senha").value;
    var forca = 0;
    //document.getElementById("imprSenha").innerHTML = "senha " + senha;
if ((senha.length >= 4) && (senha.length <=7) || (senha.match(/[a-z]+/))) {
    forca += 10;
}else if(senha.length>7){
    forca += 25;
 }
 if ((senha.length >= 5) && (senha.match(/[A-Z]+/))){
    forca += 10;
}
if((senha.length >= 6) && (senha.match(/[a-z]+/))){
    forca += 20;
}
 mostrarForca(forca);
}

function mostrarForca(forca){
     //document.getElementById("imprForca").innerHTML = "força " + forca;
    if (forca < 30) {
        document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #ff0000'>Fraca</span>";
    }else if ((forca >= 30) && (forca < 50)) {
        document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #ffd700'>Média</span>";
    }else if ((forca >= 50) && (forca < 70)) {
        document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #7fff00'>Forte</span>";
    }


}

// --Jquery--
/*$('#navbar-items').on('mouseenter',botao)
function botao() {
    $('li').css({'color':'red'})
}*/


$(function(){  
    $("#footer-details").hover(
        function(){$(this).css("background", "rgb(3, 34, 100)")},
        function(){$(this).css("background", "rgb(80, 130, 240)")}
    );
});

setInterval (function (){
    $('h2').fadeOut(300)
    $('h2').fadeIn(600)
},1000)
