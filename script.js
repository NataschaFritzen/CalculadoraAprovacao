function verificaAprovacao() {
    let nota = parseFloat(document.getElementById("nota").value);
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Por favor, insira uma nota válida entre 0 e 10.");
        return;
    }

    let resultado = document.getElementById("resultado");

    if (nota >= 7) {
        resultado.innerHTML = "✅ Aluno(a) Aprovado(a)!";
        resultado.style.color = "#4CAF50"; // Verde
    } else {
        resultado.innerHTML = "❌ Aluno(a) Reprovado(a)!";
        resultado.style.color = "#FF5252"; // Vermelho
    }
}
