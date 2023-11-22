function informarplaca(){
    const texto = document.querySelector("h1");
    const descricao = document.querySelector("h2");
    const des = document.querySelector("h3");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const dia = document.querySelector('#dia').value;

    if((valor==1 || valor==2) && (dia==1)){
        texto.innerHTML = "NÃO PODE!"
        descricao.innerHTML = "No dia de hoje, placas que terminam em 1 e 2 NÃO PODEM circular!";
        imagem.setAttribute("src","img/tabela.jpg");
        des.innerHTML = "Para obter outro resultado, atualize a página."
    }
    
    else if((valor==3 || valor==4) && (dia==2)){
        texto.innerHTML = "NÃO PODE!"
        descricao.innerHTML = "No dia de hoje, placas que terminam em 1 e 2 NÃO PODEM circular!";
        imagem.setAttribute("src","img/tabela.jpg");
        des.innerHTML = "Para obter outro resultado, atualize a página."
    }
    
    else if((valor==5 || valor==6) && (dia==3)){
        texto.innerHTML = "NÃO PODE!"
        descricao.innerHTML = "No dia de hoje, placas que terminam em 1 e 2 NÃO PODEM circular!";
        imagem.setAttribute("src","img/tabela.jpg");
        des.innerHTML = "Para obter outro resultado, atualize a página."
    }
    
    else if((valor==7 || valor==8) && (dia==4)){
        texto.innerHTML = "NÃO PODE!"
        descricao.innerHTML = "No dia de hoje, placas que terminam em 1 e 2 NÃO PODEM circular!";
        imagem.setAttribute("src","img/tabela.jpg");
        des.innerHTML = "Para obter outro resultado, atualize a página."
    }
    
    else if((valor==9 || valor==0) && (dia==5)){
        texto.innerHTML = "NÃO PODE!"
        descricao.innerHTML = "No dia de hoje, placas que terminam em 1 e 2 NÃO PODEM circular!";
        imagem.setAttribute("src","img/tabela.jpg");
        des.innerHTML = "Para obter outro resultado, atualize a página."
    }
    else {
        texto.innerHTML = "pode!";
        imagem.setAttribute("src","img/tabela.jpg");
    }

}