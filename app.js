let myLibrary = [];


const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pages")
const isbnInput = document.querySelector("#isbn")
const button = document.querySelector("#btn")
const bookList = document.querySelector("#book-list")


class Book {
    constructor(title, author, pages, isbn){
        this.title = title;
        this.author = author;
        this.pages = parseInt(pages);
        this.isbn = isbn;
    }
}

function addBook(){
    let title = titleInput.value
    let author = authorInput.value
    let pages = pagesInput.value
    let isbn = isbnInput.value
    let newBookToTheLibrary = new Book(title, author, pages, isbn)
    myLibrary.push(newBookToTheLibrary)
}

function appendOnTable(){
   event.preventDefault()
   
   const bookListRow = document.createElement('tr')

    const newTitle = document.createElement('th')
    newTitle.textContent = titleInput.value
    bookListRow.appendChild(newTitle)

    const newAuthor = document.createElement('th')
    newAuthor.textContent = authorInput.value
    bookListRow.appendChild(newAuthor)
    
    const newPages = document.createElement('th')
    newPages.textContent = pagesInput.value
    bookListRow.appendChild(newPages)

    const newIsbn = document.createElement('th')
    newIsbn.textContent = isbnInput.value
    bookListRow.appendChild(newIsbn)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "X"
    bookListRow.appendChild(deleteButton)
    deleteButton.style.marginLeft = "10px"
    deleteButton.addEventListener("click", ()=>{
        bookListRow.remove("tr")
    })
    
    myLibrary.push(bookList)
    bookList.appendChild(bookListRow)
}


button.addEventListener("click",() => {
    appendOnTable()
    addBook()
    clearForm()
    saveOnLocalStorage()
})

function clearForm(){
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    isbnInput.value = ""
}




