function Soma(){
    let idade = document.getElementById("idade").value;
    

    if(idade == 18){
    document.getElementById("resultado").innerText = "Neutro";
    }

    else if(idade > 18){
    document.getElementById("resultado").innerText = "Maior";
    }

    else
    {document.getElementById("resultado").innerText = "Menor";
    }

    }
