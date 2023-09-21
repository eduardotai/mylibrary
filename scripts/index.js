const table = document.getElementById('tableList');
const myBooks = [];
const newBook = document.getElementById('newBook');

newBook.addEventListener('click', function () {
    const index = myBooks.length;
    const userBook = prompt('Enter book title');
    const userAuthor = prompt('Enter book author');
    const row = table.insertRow(0);
    
    row.insertCell(0).innerHTML = userBook;
    row.insertCell(1).innerHTML = userAuthor;
    const readStatusButton = document.createElement('button');
    readStatusButton.className = 'readStatus';
    readStatusButton.textContent = 'Not Read';
    row.insertCell(2).appendChild(readStatusButton);
    row.insertCell(3).innerHTML = `<button class="removeBook" type="button">Remove Book</button>`;
    
    myBooks.push({ userBook, userAuthor, read: false });
    addEventListenersToRow(row, index, readStatusButton);
});

function addEventListenersToRow(row, index, readStatusButton) {
    const removeBookButton = row.querySelector('.removeBook');

    readStatusButton.addEventListener('click', function () {
        toggleReadStatus(index, readStatusButton);
    });

    removeBookButton.addEventListener('click', function () {
        removeBook(index);
        row.remove();
    });
}

function toggleReadStatus(index, button) {

    if (index < 0 || index >= myBooks.length) {
        console.error("Índice inválido:", index);
        return;
    }
    const book = myBooks[index];
    book.read = !book.read;
    button.classList.toggle('read');
    button.textContent = book.read ? 'Read' : 'Not Read';
    button.style.backgroundColor = book.read ? 'green' : 'red'; // Aqui você altera a cor de fundo do botão
}

function removeBook(index) {
    myBooks.splice(index, 0);
}

function updateIndexes() {
    // assumindo que você está começando da 1ª linha, ajuste se necessário
    Array.from(table.rows).slice(1).forEach((row, updatedIndex) => { 
        const readStatusButton = row.querySelector('.readStatus');
        const removeBookButton = row.querySelector('.removeBook');
        
        // Obtém os listeners antigos para removê-los
        const { readListener, removeListener } = listenersMap.get(updatedIndex) || {};
        
        // Remova os listeners antigos
        if (readListener) readStatusButton.removeEventListener('click', readListener);
        if (removeListener) removeBookButton.removeEventListener('click', removeListener);
        
        // Crie e adicione os novos listeners com o índice atualizado
        const newReadListener = () => toggleReadStatus(updatedIndex, readStatusButton);
        const newRemoveListener = () => {
            removeBook(updatedIndex);
            row.remove();
            updateIndexes();
        };
        
        readStatusButton.addEventListener('click', newReadListener);
        removeBookButton.addEventListener('click', newRemoveListener);
        
        // Atualiza o mapa de listeners com os novos listeners
        listenersMap.set(updatedIndex, { readListener: newReadListener, removeListener: newRemoveListener });
    });
}
    const userBook = prompt('type a book to ad')
    const userAuthor = prompt('type a book to ad')

    cell1.innerHTML = `${userBook}`;   
    cell2.innerHTML = `${userAuthor}`;
    cell3.innerHTML = "<button id='readStatus' type='button'>Not Read</button>"

    myBooks.push(userBook)
    console.log(myBooks)  
    
    const buttonRead = document.getElementById('readStatus')


buttonRead.classList.toggle('notRead');

const notRead = document.getElementsByClassName('notRead')

buttonRead.addEventListener('click', function() {
    buttonRead.classList.toggle('read');
    buttonRead.textContent = buttonRead.textContent === "Read" ? "Not Read" : "Read";
})







