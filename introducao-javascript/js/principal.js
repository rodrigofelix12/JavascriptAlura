var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <=0 || peso > 100) {
        console.log("Peso Inválido");
        tdImc.textContent = "Peso Inválido!";
        pesoEhValido = false;

        paciente.classList.add("paciente-invalido");
    }

    if(altura <=0 || altura > 3.00) {
        console.log("Altura Inválida");
        tdImc.textContent = "Altura Inválida!";
        alturaEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

