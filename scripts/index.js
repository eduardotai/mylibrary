const table =document.getElementById('tableList')


const myBooks = []

const newBook = document.getElementById('newBook')

newBook.addEventListener('click', function(e) {

    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    const userBook = prompt('type a book to ad')
    const userAuthor = prompt('type a book to ad')

    cell1.innerHTML = `${userBook}`;   
    cell2.innerHTML = `${userAuthor}`;
    cell3.innerHTML = "<button id='readStatus' type='button'> Not Read </button>"

    myBooks.push(userBook)
    console.log(myBooks)    
})

