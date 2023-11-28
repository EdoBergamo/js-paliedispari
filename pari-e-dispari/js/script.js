function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1
}

function isEven(num) {
    return num % 2 === 0
}

function evenOdd(choice, number) {
    if (choice !== 'pari' && choice !== 'dispari') {
        return 'Scegli \'Pari\' o \'Dispari\'';
    }

    const randomNum = generateRandomNumber();

    const somma = parseInt(number) + randomNum;

    const sommaEven = isEven(somma);

    if ((sommaEven && choice === 'pari') || (!sommaEven && choice === 'dispari')) {
        return `Hai vinto! La somma (${somma}) è ${choice}. Il tuo numero: ${number} - PC: ${randomNum}`
    } else {
        return `Hai perso! La somma (${somma}) è ${(sommaEven ? 'pari' : 'dispari')}. Il tuo numero: ${number} - PC: ${randomNum}`
    }
}

const sceltaPlayer = prompt("Scegli pari o dispari")
const numeroPlayer = prompt("Inserisci un numero")

const result = evenOdd(sceltaPlayer, numeroPlayer)
console.log(result)