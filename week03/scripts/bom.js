const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    listElement.appendChild(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        inputElement.focus();
        deleteChapter(item);
    });
}

function setChapterList() {
    localStorage.setItem('BOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('BOMList'));
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

buttonElement.addEventListener('click', function () {
    if (inputElement.value != '') {
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        inputElement.value = '';
        inputElement.focus();
    }
});