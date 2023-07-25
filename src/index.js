import validator from './validator.js';

const btnCard= document.getElementById("btnValidate"); // atribui o elemento do botão a uma const chamda "btnCard"
const alertCard= document.getElementById("card-result"); // atribui a uma const chamada "alertCard"

btnCard.addEventListener("click", cardValidator); // um evento de clique ao botão com o ID "btnCard", quando o botão é clicado, a função "cardValidator" será executada.

function cardValidator() {

  const creditCardNumber= document.getElementById("number").value; // pega o valor do num do cartão
  const finalResult= validator.isValid(creditCardNumber); // vai linkar com a formula do validator.js
  const maskedNumbers= validator.maskify(creditCardNumber); // vai linkar com a formula do validator.js


  if (creditCardNumber === "") {
    return alertCard.innerText= "Digite o número do seu cartão"; // verificação pra ver se o campo 'creditCardNumber" está vazio. Se estiver vazio, defini o texto "digite o num do cartão". Garante que o usuário insira um num de cartão antes de prosseguir com a validação.
  }
  else if (creditCardNumber.length <= 13) {
    return alertCard.innerText= "Favor verificar o número do seu cartão";
  }
  else if (finalResult === true) {
    return alertCard.innerText= "Seu cartão de número" + maskedNumbers + "está válido. Estamos processando sua compra!";
  }
  else {
    return alertCard.innerText= "Seu cartão de número" + maskedNumbers + " não está válido. Verifique o número novamente.";
  }
}

// código para obter referências aos elementos específicos do seu documento HTML usando os IDs correspondentes

const cardNumber= document.getElementById("number");
const cardName= document.getElementById("name");
const cardExpiration= document.getElementById("expiration-date");
const cardCvv= document.getElementById("cvv");

//"keyup" fornece uma maneira de capturar as ações do usuário em tempo real enquanto ele digita ou interage com elementos de entrada de texto ou outros elementos interativos.

cardNumber.addEventListener("keyup", cloneCardNumber);
cardName.addEventListener("keyup", cloneCardName);
cardExpiration.addEventListener("keyup", cloneCardExpiration);
cardCvv.addEventListener("keyup", cloneCardCvv);

function cloneCardNumber () {
  // Obtém o valor do campo de entrada com o id "number" (provavelmente o número do cartão)
  const value= document.getElementById ("number").value;
  // Chama uma função chamada "validator.maskify" passando o valor obtido do campo de entrada.
  // Essa função aplica uma máscara ao número do cartão.
  const mask= validator.maskify(value);
  
  // Define o valor do campo de entrada com o id "card-number" com o valor retornado pela função de máscara.
  document.getElementById("card-number").value= mask;
}
  
function cloneCardName () {
  // Obtém o valor do campo de entrada com o id "name" (provavelmente o nome do titular do cartão)
  const value= document.getElementById("name").value;

  // Define o valor do campo de entrada com o id "card-name" com o valor obtido do campo de entrada "name".
  document.getElementById("card-name").value= value;
}
  
function cloneCardExpiration () {
  const value= document.getElementById("expiration-date").value;
  
  document.getElementById("card-expiration").value= value;
}
  
function cloneCardCvv () {
  const value= document.getElementById("cvv").value;
  
  document.getElementById("card-cvv").value= value;
}

console.log(validator);