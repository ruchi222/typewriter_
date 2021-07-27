// const sentence = "hello there from lighthouse labs";
// setTimeout(() => {
// for (const char of sentence) {
//     process.stdout.write(char);
//   }
// }, 1000)

const sentence = "hello there from lighthouse labs";

const printSentence = function(sentence) {
    for (let char in sentence) {
        let letter = sentence[char];
        setTimeout(() => {
            process.stdout.write(letter);
        }, char * 50);
    }
    setTimeout(() => {
        process.stdout.write('\n');
    }, sentence.length * 50);
};

printSentence(sentence);