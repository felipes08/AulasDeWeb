// Selecionamos o formulário e os elementos de exibição
const form = document.getElementById('meuForm');
const displayResultado = document.getElementById('valorPessoa');
const msgErro = document.getElementById('msgErro');

// Evento oninput: dispara sempre que QUALQUER campo do form mudar
form.oninput = function() {
    // Captura de valores usando form.elements
    const total = parseFloat(form.elements['totalConta'].value);
    const taxaGorjeta = parseFloat(form.elements['servico'].value);
    const pessoas = parseInt(form.elements['qtdPessoas'].value);

    // Reset de mensagens e valores
    msgErro.textContent = "";
    displayResultado.textContent = "R$ 0,00";

    // Validação
    if (isNaN(total) || total <= 0) return;

    if (pessoas < 1 || isNaN(pessoas)) {
        msgErro.textContent = "Mínimo de 1 pessoa.";
        return;
    }

    // Cálculo da Fórmula: (Total + (Total * Gorjeta)) / Pessoas
    const valorGorjeta = total * taxaGorjeta;
    const totalComGorjeta = total + valorGorjeta;
    const divisao = totalComGorjeta / pessoas;

    // Exibição formatada para moeda
    displayResultado.textContent = divisao.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};