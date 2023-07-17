const validator = {
  
  isValid (creditCardNumber) { // valida o número do cartão com base no algoritmo Luhn (mod. 10)

    const newArray = []; // array vazio para receber os dados do usuário 
    for(let i = 0; i < creditCardNumber.length; i++) { // cria a var i = 0, verifica se i < comp. do num do cartão
      const numCard = parseInt(creditCardNumber[i]); // parseInt() é para converter uma string em um número inteiro. Ela recebe como argumento uma string que representa um número e retorna o valor num correspondente. 
      newArray.push(numCard) // faz com que cada número convertido do cartão ao array newArray, resultando em um array que contém os números do cartão na mesma ordem.
    }

    const cardNumReverse = newArray.reverse(); // reverse() é utilizado em arrays para inverter a ordem dos elementos. Ele modifica o próprio array, invertendo os elementos em suas posições originais.

    // proximos passos:
    // - encontrar os nums que estão nas posições pares
    // - somar esses nums
    // - se a soma der > 9, pegar esse resultado e subtrair 9

    for (let i = 0; i < cardNumReverse.length; i++) { // var i = 0 e check se o resultado da expressão (i + 1) % 2 é igual a 0.
      if ((i + 1) % 2 === 0) { // % verificar se os nums são pares no array cardNumReverse
        cardNumReverse[i] = cardNumReverse[i] * 2; // multiplicar por 2 os dígitos em posições pares
      }
      if (cardNumReverse[i] >= 10) {   //ajustar os valores dos dígitos que se tornam maiores ou iguais a 10 após a multiplicação por 2, subtraindo 9 para obter um novo valor entre 1 e 9.
        cardNumReverse[i] = cardNumReverse[i] - 9;
      }
    }

    // proximos passos:
    // - somar todos os nums
    // - verificar se o result é multiplo de 10; se for, o cartão é válido e se não, o cartão é inválido

    let finalNum = 0 // utilizada para armazenar a soma dos elementos do array cardNumReverse
    for (let i = 0; i < cardNumReverse.length; i++) { //percorre cd elemento do array cardNumReverse e guarda a soma dos elementos na var finalNum. Depois, a var finalNum terá o resultado da soma dos elementos do array 
      finalNum = finalNum + cardNumReverse[i]
    }
    if (finalNum % 10 === 0) { // verifica se a soma dos dígitos do num cartão é múltiplo de 10 para determinar a sua validade
      return true
    } else {
      return false
    }
  },

  maskify (creditCardNumber) { //mascarar o número do cartão, substituindo todos os dígitos, exceto os últimos 4
    const maskNumber = []; // array vazio pra receber num do cartão 
    for (let i = 0; i < creditCardNumber.length; i++) { 
      if(i < creditCardNumber.length - 4) { // verifica se o caractere atual está dentro dos últimos 4 dígitos do número do cartão
        maskNumber.push("#");
      } else {
        maskNumber.push(creditCardNumber[i])
      }
    }
    const masked = maskNumber.join("");
    return masked;
  }
};

export default validator;
