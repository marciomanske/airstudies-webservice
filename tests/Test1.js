function reverseWord(S) {

    var reversedWord = "";
    for (var index = S.length-1; index >= 0; index--) {




        reversedWord += S[index];

    }
    return reversedWord;
}


function solution(S) {

    var result = "";
    var index = 0;
    var word = "";
    while (index < S.length) {

        if (S[index] === " " || index === S.length-1) {
            //Found a word
            if (index === S.length-1) {
                word += S[index];
            }
            var reversedWord = reverseWord(word);
            result += reversedWord + " ";
            word = "";
            index++;
        } else {
            word += S[index];
            index++;
        }
    }
    return result;


}

var sol = solution("meu nome e marcio");

console.log(sol);