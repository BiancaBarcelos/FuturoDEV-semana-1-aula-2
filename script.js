function cadastrarCarro(event) {

    event.preventDefault();

    //Obter informações
    const modelo = document.getElementById("modelo").value;
    const marca = document.getElementById("marca").value;
    const cor = document.getElementById("cor").value;
    const placa = document.getElementById("placa").value;
    const ano = document.getElementById("ano").value;


    //Condição de preencher todos os campos
    if (modelo != "" &&  marca != "" && cor != "" && placa != "" && ano != "") {
        document.getElementById("frase").innerHTML =  `O carro foi cadastrado com sucesso Modelo:${modelo} | Marca:${marca} | Cor:${cor} | Placa:${placa} | Ano:${ano}`
        
    }else {
        alert("Preencha todos os campos indicados!")
    }

}