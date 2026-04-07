const meuForm = document.forms['meuForm'];
const displayTotal = document.getElementById('valorTotal');
const avisoTaxa = document.getElementById('avisoTaxa');

meuForm.oninput = function() {
    // 1. Valores Iniciais
    const valorBasePorPessoa = 80;
    let qtd = parseInt(meuForm.elements['qtdConvidados'].value) || 0;
    let subtotal = qtd * valorBasePorPessoa;
    let adicionaisSoma = 0;

    // 2. Loop nos Checkboxes (Iteração de Coleção)
    // meuForm.elements['adicionais'] retorna uma lista de todos os checkboxes
    const listaAdicionais = meuForm.elements['adicionais'];

    listaAdicionais.forEach(checkbox => {
        if (checkbox.checked) {
            let valorExtra = parseFloat(checkbox.value);
            
            // Regra especial: Open Bar é por pessoa (usamos um data-attribute para identificar)
            if (checkbox.dataset.perPerson) {
                adicionaisSoma += valorExtra * qtd;
            } else {
                adicionaisSoma += valorExtra;
            }
        }
    });

    // 3. Soma Parcial
    let totalFinal = subtotal + adicionaisSoma;

    // 4. Regra de Negócio: Mínimo Garantido (< 50 convidados)
    if (qtd > 0 && qtd < 50) {
        totalFinal *= 1.15; // Aplica 15% de acréscimo
        avisoTaxa.textContent = "* Taxa de conveniência de 15% aplicada (menos de 50 pessoas).";
    } else {
        avisoTaxa.textContent = "";
    }

    // 5. Saída formatada
    displayTotal.textContent = totalFinal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}