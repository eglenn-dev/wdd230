// Declaring variables to hold DOM element references
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

buttonElement.addEventListener('click', function () {
    if (inputElement.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = inputElement.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        listElement.appendChild(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            inputElement.focus();
        });
        inputElement.focus();
        inputElement.value = '';
    }
});