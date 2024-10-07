const myLibrary = []

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = () => {
        let reading = ""
        if (this.read){
            reading = "read"
        } else {
            reading = "not read yet"
        }
        return `${this.title}, ${this.author}, ${this.pages} pages, ${reading}`
    }
}

addBookToLibrary = (title, author, pages, read) => {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

displayBooks = () => {
    let titleList = []

    const container = document.querySelector("#main")
    container.innerHTML = ""

    

    for (let item in myLibrary) {
        titleList.push(myLibrary[item].title)

        const card = document.createElement("div")
        card.classList.add("card")
        container.appendChild(card);

        const title = document.createElement("div")
        title.classList.add("title")
        title.textContent = myLibrary[item].title
        card.appendChild(title)

        const author = document.createElement("div")
        author.classList.add("author")
        author.textContent = myLibrary[item].author
        card.appendChild(author)

        const pages = document.createElement("div")
        pages.classList.add("pages")
        pages.textContent = "Pages: " + myLibrary[item].pages
        card.appendChild(pages)

        const read = document.createElement("div")
        read.classList.add("read")
        if (myLibrary[item].read) {
            read.textContent = "Read"
        } else {
            read.textContent = "Not read"
        }
        card.appendChild(read)

        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete Book"
        delBtn.id = "delete-btn"
        card.appendChild(delBtn)

        delBtn.addEventListener("click", () => {
            myLibrary.splice(item,1)
            displayBooks()
        })
    }
}

// template books
addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien', '1077', false)
addBookToLibrary('1984', 'George Orwell', '328', true)
addBookToLibrary('Kafka on the Shore', 'Haruki Murakami', '505', false)

const bookDialog = document.getElementById("book-dialog")
const bookForm = document.getElementById('book-form')
const bookInput = document.getElementById("book-name")
const authorInput = document.getElementById("author-name")
const pagesInput = document.getElementById("pages")
const readInput = document.getElementsByName("reading")
const cfmBtn = document.getElementById("confirm-btn")
const cancelBtn = document.getElementById("cancel-btn")


displayBooks()

// add book button
const zero = document.querySelector('#addBookButton')
zero.addEventListener("click", () => {
    bookDialog.showModal()
})

// confirm button logic
cfmBtn.addEventListener("click", () => {
    if (bookForm.checkValidity()) {
        console.log(bookInput.value)
        console.log(authorInput.value)
        console.log(pagesInput.value)
        
        let readValue = false

        for (i = 0; i < readInput.length; i++) {
            if (readInput[i].checked) {
                if (readInput[i].value === "read"){
                    readValue = true
                }
            }
        }

        addBookToLibrary(bookInput.value, authorInput.value, pagesInput.value, readValue)

        displayBooks(myLibrary)

        event.preventDefault()
        bookDialog.close()
    }
})

// cancel button logic
cancelBtn.addEventListener("click", () => {
    event.preventDefault()
    bookDialog.close()
})


