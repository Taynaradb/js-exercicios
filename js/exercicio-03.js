function Soma(){
    let numero1 = document.getElementById("numero1").value;
    

    if(numero1 == 100){
    document.getElementById("resultado").innerText = "Neutro";
    }

    else if(numero1 > 100){
    document.getElementById("resultado").innerText = "Maior que 100";
    }

    else
    {document.getElementById("resultado").innerText = "Menor que 100";
    }

    }
