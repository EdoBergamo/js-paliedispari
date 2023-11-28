function isPalindroma(word) {
    word = word.toLowerCase();

    let inverted_word = word.split('').reverse().join('');

    if (word === inverted_word) {
        return true;
    } else {
        return false;
    }
}

let parola_prompt = prompt('Inserisci una parola')

if (isPalindroma(parola_prompt)) {
    console.log(`${parola_prompt} è una parola palindroma`);
} else {
    console.log(`${parola_prompt} non è una parola palindroma`)
}