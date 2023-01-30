let letters = [ 'w', 'e', ' ', 'a', 'r', 'e', ' ', 'B', 'S', 'T' ];

let words: string[] = createWords(letters);

words.forEach(word => {
    console.log(word);
});

function createWords(letters: string[]): string[]
{
    let temp = "";
    let result: string[] = [];

    letters.forEach(ltr => {
        if (ltr != ' ') {
            temp += ltr;
        } else {
            result.push(temp);
            temp = "";
        }
    });
    return result;
}

console.log(createWords(letters));