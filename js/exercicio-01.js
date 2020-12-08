function Exemplo(){
//document.write("Escrevendo na tela");

//document.getElementById("mensagem").innerText = "Escrevendo 
na tela";

document.getElementById("mensagem").innerHTML = "<em>Escrevendo
 na tela</em>";

document.getElementById("numero").value = "teste";

console.log(documento.getElementById("mensagem").innerHTML);

let numero = document.getElementById("numero").value;
console.log(numero);
}

//Exercicio 01
function Trocar(){
    let numero = document.getElementById("numero").value;
    if(numero<20){ //teste
        //resposta verdadeira
        document.getElementById("mensagem").innerText = "Menor que 20";
    }
    else if(numero == 20)
    document.getElementById("mensagem").innerText = "Igual";
    else {
        // resposta falsa
        document.getElementById("mensagem").innerText = "Maior que 20";
    }
    
}

/*)ESCREVA UM ALGORITMO QUE PERGUNTA, LÊ E TESTA SE UM NÚMERO (NÚMERO) É MENOR QUE 20. DEPOIS ESCREVE <"MENOR QUE 20"> OU <"MAIOR QUE 20"> CONFORME
O RESULTADO DO TESTE.



2)ESCREVA UM ALGORITMO QUE PERGUNTA E LÊ DOIS NÚMEROS 
(NÚMERO1 E NÚMERO2), SOMA (SOMA) TAIS NÚMEROS E TESTA 
SE A SOMA É POSITIVA, NEGATIVA OU NEUTRA. DEPOIS ESCREVE 
<"SOMA POSITIVA"> OU <"SOMA NEGATIVA" > OU <"SOMA NEUTRA"> 
CONFORME O RESULTADO DO TESTE.



3)ESCREVA UM ALGORITMO QUE PERGUNTA, LÊ E TESTA SE UM 
NÚMERO (NÚMERO) É 100, MAIOR OU MENOR QUE 100. DEPOIS 
ESCREVE <"MAIOR QUE 100"> OU <"100"> OU <"MENOR QUE 100">
 CONFORME O RESULTADO DO TESTE.





4)ESCREVA UM ALGORITMO QUE PERGUNTA E LÊ UMA IDADE (IDADE) 
E DEPOIS ESCREVE <"MAIOR"> SE A IDADE FOR MAIOR OU IGUAL A 
18 E <"MENOR"> NOS OUTROS CASOS.*/