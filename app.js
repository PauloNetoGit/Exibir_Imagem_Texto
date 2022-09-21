function carregarConteudo() {
    document.getElementById("idTexto").innerHTML = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit ratione repudiandae inventore perspiciatis maiores dolorem tempora distinctio mollitia magnam odit, voluptatum maxime in a iusto, sit temporibus voluptates sapiente?</p>";

    if (document.getElementById("idImagem").innerHTML = "<img src='/botaoCss/img/img.jpg' width='250px'>") {
        document.getElementById("idImagem").innerHTML = "";
    }
}

function carregarImagem() {
    document.getElementById("idImagem").innerHTML = "<img src='/botaoCss/img/img.jpg' width='250px'>";

    if (document.getElementById("idTexto").innerHTML = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit ratione repudiandae inventore perspiciatis maiores dolorem tempora distinctio mollitia magnam odit, voluptatum maxime in a iusto, sit temporibus voluptates sapiente?</p>") {
        document.getElementById("idTexto").innerHTML = "";
    }
}

function limpar() {
    document.getElementById("idLimpar").innerHTML = (document.getElementById("idTexto").innerHTML = "");
    document.getElementById("idLimpar").innerHTML = document.getElementById("idImagem").innerHTML = "";
}