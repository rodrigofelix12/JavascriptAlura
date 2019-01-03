var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = document.querySelector(".info-imc");
tdImc.textContent = imc;

var alturaEhValida = true;
var pesoEhValido = true;

if(peso <=0 || peso > 100) {
    console.log("Peso Inválido");
    tdImc.textContent = "Peso Inválido!";
    pesoEhValido = false;
}

if(altura <=0 || altura > 3.00) {
    console.log("Altura Inválida");
    tdImc.textContent = "Altura Inválida!";
    alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}