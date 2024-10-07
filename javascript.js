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

    const container = document.querySelector("#main")

    

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
    }
}

addBookToLibrary('The Lord of the Rings', 'J. R. R. Tolkien', '1077', false)
addBookToLibrary('1984', 'George Orwell', '328', true)
addBookToLibrary('Kafka on the Shore', 'Haruki Murakami', '505', false)

displayBooks(myLibrary)

console.log('myLibrary')


