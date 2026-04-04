meuForm.oninput = function(){
    let total = parseFloat(meuForm.elements['totalConta'].value);
    let tip = parseFloat(meuForm.elements['servico'].value);
    let pessoas = parseInt(meuForm.elements['qtdPessoas'].value);

    if(pessoas < 1){
        alert("O número de pessoas não pode ser menor que 1!")
        meuForm.elements['qtdPessoas'].value = 1;
        pessoas = 1;
    }

    let valorPorPessoa = (total + total*tip)/pessoas

    meuForm.elements['total'].value = "R$ " + valorPorPessoa.toFixed(2);
};