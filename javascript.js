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

displayBooks = (myLibrary) => {
    let titleList = []
    
    for (let item in myLibrary) {
        titleList.push(myLibrary[item].title)
    }

    return titleList
}

addBookToLibrary('aa', 'bb', '22', false)
addBookToLibrary('cc', 'dd', '3213', true)
addBookToLibrary('ee', 'ff', '1', false)

console.log(displayBooks(myLibrary))
