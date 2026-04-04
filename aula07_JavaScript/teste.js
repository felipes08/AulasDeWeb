function sayhello(){
    let nome = prompt("Digite se nome");
    let resposta = confirm("O Brasil vai ganhar hoje " +nome+"?");
    if (resposta){
        alert("É ISSO CARALHO, O BRASIL VAI GANHAR HOJE PORRA!!!!!");
    }
    else{
        alert("vai tomar no **!!");
    }
    
 }

 function message(){
    //let nome = document.getElementById("nome").value;

    let nome = document.getElementByName("nome").value;
    alert("Bem vindo " +nome);
 }