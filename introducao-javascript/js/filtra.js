// Selecionando o campo de input
var campoFiltro = document.querySelector("#filtrar-tabela");

// Adicionar o evento de input que é responsável por detectar quando o usuário
// começar a digitar no campo

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value, "i");   // O modificador "i" é para identificar que
                                                            //estamos buscando por case insensitive.
            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});