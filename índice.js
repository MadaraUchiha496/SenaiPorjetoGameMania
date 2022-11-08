----------PRODUTOS-BLUR-------------//
varimg1=documento. getElementById ("img-pqn1");
varimg2=documento. getElementById ("img-pqn2");
vartextoImg1=documento. getElementById("texto-img1");
vartextoImg2=documento. getElementById("texto-img2")
seção varPromocao=documento. getElementById ("section-promocao")

borradesborra função() {
    Img1. adicionarEventListener ("mouseover",função(){
        Img1. estilo. filter='blur(5px)';
        Img1. estilo. opacidade='0,5';
        textoImg1. innerHTML='COMPUTADORES';
        textoImg1. estilo. display='block';
        seçãoPromocao. estilo. top='-100px'
    })
    
    Img1. addEventListener ("mouseout",função(){
        Img1. estilo. filter='blur(0px)';
        Img1. estilo. opacidade='1';
        textoImg1. estilo. display='nenhum';
        seçãoPromocao. estilo. top='-40px'
    })

    img2. adicionarEventListener ("mouseover",função(){
        img2. estilo. filter='blur(5px)';
        img2. estilo. opacidade='0,5';
        textoImg2. innerHTML='VIDEOGAMES'
        textoImg2. estilo. display='block';
        seçãoPromocao. estilo. top='-100px'
    })
    
    img2. addEventListener ("mouseout",função(){
        img2. estilo. filter='blur(0px)';
        img2. estilo. opacidade='1';
        textoImg2. estilo. display='nenhum';
        seçãoPromocao. estilo. top='-40px'
    })
};

borraDesborra();



