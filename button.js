const upperCaseBtn = document.getElementById('upper-case');
const lowerCaseBtn = document.getElementById('lower-case');
const properCaseBtn = document.getElementById('proper-case');
const sentenceCaseBtn = document.getElementById('sentence-case');
const saveFile = document.getElementById('save-text-file');

const text = document.querySelector('textarea');

upperCaseBtn.addEventListener('click', () => {
    text.value = text.value.toUpperCase();
});

lowerCaseBtn.addEventListener('click', () => {
    text.value = text.value.toLowerCase();
});

properCaseBtn.addEventListener('click', () => {
    const word = text.value.split(' ');

    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }

    text.value = word.join(' ');

});

sentenceCaseBtn.addEventListener('click', () => {
    const sentence = text.value.toLowerCase().split('. ');

    for (let i = 0; i < sentence.length; i++) {
        if (i < sentence.length -1) {
            sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1) + '.';
        } else {
            sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
        }
    }
    text.value = sentence.join(' ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

saveFile.addEventListener('click', () => {
    download("text.txt", text.value);
});
