"use strict";
let letters = ['w', 'e', ' ', 'a', 'r', 'e', ' ', 'B', 'S', 'T'];
let words = createWords(letters);
words.forEach(word => {
    console.log(word);
});
function createWords(letters) {
    let temp = "";
    let result = [];
    letters.forEach(ltr => {
        if (ltr != ' ') {
            temp += ltr;
        }
        else {
            result.push(temp);
            temp = "";
        }
    });
    result.push(temp);
    return result;
}
//# sourceMappingURL=index.js.map