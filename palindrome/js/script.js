function isPalindroma(word) {
    word = word.toLowerCase();

    
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== ' ') {
            newWord += word[i];
        }
    }
    
    let inverted_word = newWord.split('').reverse().join('');

    if (newWord === inverted_word) {
        return true;
    } else {
        return false;
    }
}

let parola_prompt = prompt('Inserisci una parola')

if (isPalindroma(parola_prompt)) {
    console.log(`${parola_prompt} è una parola palindroma`);
    document.write(`${parola_prompt} è una parola palindroma`)
} else {
    console.log(`${parola_prompt} non è una parola palindroma`)
    document.write(`${parola_prompt} non è una parola palindroma`)
}