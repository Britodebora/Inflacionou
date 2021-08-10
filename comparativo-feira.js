var nomeAlimento = prompt("Escolha entre tomate, laranja, abacaxi, limão");

if(nomeAlimento == "tomate" || nomeAlimento == "laranja" || nomeAlimento == "abacaxi" || nomeAlimento == "limão"){
    var valorSemanaAnterior = prompt("Digite o valor do alimento na semana anterior");
    var valorSemanaAtual = prompt("Digite o valor do alimento na semana atual");
    if(valorSemanaAnterior == valorSemanaAtual){
        alert("Não houve alteração no preço!");
    }else{
        if(valorSemanaAtual > valorSemanaAnterior){
            var diferenca = valorSemanaAtual - valorSemanaAnterior;
            alert("Houve aumento no preço de R$ "+ diferenca);
        }else{
            var diferenca = valorSemanaAnterior - valorSemanaAtual;
            alert("Houve diminuição no preço de R$ "+ diferenca);
        }
    }
}else{
    alert("Alimento indisponível na feira");
}





