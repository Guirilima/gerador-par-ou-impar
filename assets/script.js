function ValidandoPar(quadro, texto) {
    let n1 = texto.value;
    quadro.value = "";
    // console.log(n1)
    //Primeiro teste para pegarmos apenas números validos de 0 á 100
    if (n1 >= 1 && n1 <= 100) {
        //Loop até alcança o valor do Usúario
        for (var i = 0; i <= n1; i++) {
            //Teste lógico para Restos 0 = Par e 1 = Impar
            if (i % 2 == 0) {
                //Escrever no quadro(area), o valor de 'i,'
                quadro.value += i + ", ";
                //Senão, Continuar o Loop.
            } else {
                continue;
            }
        }
    } else {
        alert("Apenas Valores abaixo de 100 !")
    }
}
//Aqui mesma Função com Teste para Impares
function ValidandoImpar(quadro, texto) {
    let n1 = texto.value;
    quadro.value = "";
    if (n1 >= 0 && n1 <= 100) {
        for (var i = 0; i <= n1; i++) {
            if (i % 2 == 0) {
                continue;
            } else {
                quadro.value += i + ", ";
            }
        }
    } else {
        alert("Apenas Valores abaixo de 100 !")
    }
}