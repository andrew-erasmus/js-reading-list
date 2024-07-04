const myLibrary = [];

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

function addBookToLibrary(title, author, pages, read){
    let bookToAdd = new Book (title, author, pages, read);
    myLibrary.push(bookToAdd);
}

function displayBooks(){
    myLibrary.forEach(book => {
        console.log(book.info());
    });
}

// const theHobbit = new Book("The Hobbit", "JRR Tolkein", 1234, true);
// let outputString = theHobbit.info();
// console.log(theHobbit.info());