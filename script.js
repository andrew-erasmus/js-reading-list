const readingList = [];

// Constructor for a new book
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        let output = this.title+ ", "+this.author+ ", "+this.pages+ ", "+this.read+ ".";
        return output;
    };
}

function addBookToList(title, author, pages, read){
    let bookToAdd = new Book (title, author, pages, read);
    readingList.push(bookToAdd);
}

function displayBooks(){
    readingList.forEach(book => {
        console.log(book.info());
    });
}