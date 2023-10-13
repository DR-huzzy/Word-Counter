const wordsTextarea = document.querySelector("textarea");

const countBtn = document.querySelector(".word-counter-container .count-btn");

const wordCount = document.querySelector(".word-counter-container .word-count span");

const popularWordsList = document.querySelector(".word-counter-container .popular-words");



const countWords = () => {
    let words = wordsTextarea.value;
    let wordsEdited = words.replace(/[^\w\s]/g, '');
    let splitWords = wordsEdited.split(" ");
    let numberOfWords = splitWords.length;

    wordCount.textContent = numberOfWords;

    const wordFrequency = {};

    splitWords.forEach(word => {
        if (wordFrequency[word]) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    });




    const popularWords = Object.keys(wordFrequency)
    .filter(word => wordFrequency[word] > 1) 
    .sort((a, b) => wordFrequency[b] - wordFrequency[a])

    popularWordsList.innerHTML = '';

    popularWords.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = `${word}: ${wordFrequency[word]} times`;
        popularWordsList.appendChild(listItem);
    });
};

countBtn.addEventListener("click", countWords);
