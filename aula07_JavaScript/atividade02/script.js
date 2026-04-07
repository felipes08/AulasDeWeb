const meuForm = document.forms["meuForm"];
const total = document.getElementById("valorTotal")

meuForm.oninput = function(){
    const valorBasePorPessoa = 80;
    let qntDePesoas = parseInt(meuForm.elements["qtdConvidados"].value);
    let subtotal = qntDePesoas * valorBasePorPessoa;
    let adicionaisSoma = 0;

    const listaAdicionais = meuForm.elements['adicionais'];

    listaAdicionais.forEach(checkbox => {
        if (checkbox.checked){
            let valorExtra = parseFloat(checkbox.value)
        }
        
    });

    total.textContent = "R$" + qntDePesoas.toFixed(2);


}
/*
// 1. Declarar as referências corretamente
const meuForm = document.forms['meuForm'];
const displayTotal = document.getElementById('valorTotal'); // Fora do form, usa-se getElementById

meuForm.oninput = function() {
    const valorBasePorPessoa = 80;
    
    // 2. Pegar o VALOR e converter para número
    let qtd = parseInt(meuForm.elements["qtdConvidados"].value) || 0;

    // 3. Calcular (exemplo simples apenas com a quantidade)
    let total = qtd * valorBasePorPessoa;

    // 4. Atualizar o elemento correto com a formatação
    displayTotal.textContent = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};*/