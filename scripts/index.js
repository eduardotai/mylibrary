const myBooks = [];  // You have this but you don't use it

function addBookGrid() {
    const newBook = document.getElementById('newBook');
    newBook.addEventListener('click', function(e) {
        const userBook = prompt('insert your book')
        var nHTML = ''

        myBooks.push(userBook)

        myBooks.forEach(function(book) {
            nHTML += '<li>' + book + '</li>';
        })
    const divContent = document.querySelector('#mainContent').innerHTML = 'ul' + nHTML + '</ul>';
    });
}

addBookGrid();
