document.addEventListener('DOMContentLoaded', function() {
    // ---------- Acessibilidade ----------
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    alternaContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });

    // ---------- Imagens (troque os links RAW do GitHub) ----------
    const imagens = {
        logoNav: "",
        boasVindas: {
            lado: "",
            abaixo: "https://raw.githubusercontent.com/priscillawy/site.alura/main/IMG_20250628_211234_396.jpg"
        },
        tropicalia: "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%2018%20%5B338DA26%5D.png", // Coloque aqui o RAW da imagem da seção Tropicália
        galeria: [
            "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%205%20%5BAEAC05B%5D.png", // galeria1
            "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%205%20%5B87DEA31%5D.png", // galeria2
            "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%205%20%5B6BFF6DB%5D.png", // galeria3
            "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%205%20%5BF7834FB%5D.png", // galeria4
            "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%205%20%5B2716FB3%5D.png",  // galeria5
            "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%206%20%5BD098EAB%5D.png",  // galeria6
            "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%206%20%5B45C2CC4%5D.png",  //galeria7
            "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%206%20%5BAE24368%5D.png",  //galeria8
            "https://raw.githubusercontent.com/priscillawy/site.alura/main/Novo%20projeto%206%20%5BCF76EF7%5D.png"  //galeria9
        ]
    };

    // Carregar imagens automaticamente
    document.getElementById('logoNav').src = imagens.logoNav;
    document.getElementById('imagemLadoBoasVindas').src = imagens.boasVindas.lado;
    document.getElementById('imagemAbaixoBoasVindas').src = imagens.boasVindas.abaixo;
    document.getElementById('imagemTropicalia').src = imagens.tropicalia;

    imagens.galeria.forEach((link, index) => {
        const img = document.getElementById(`galeria${index + 1}`);
        if(img && link) img.src = link;
    });

    // ---------- ScrollReveal ----------
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#tropicalia', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
});
