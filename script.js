const readingList = [];
const addBookDialog = document.getElementById('addBookDialog');


let exitButton = document.getElementById('closeAddModal');
let titleInput = document.getElementById('titleInput');
let authorInput = document.getElementById('authorInput');
let lengthInput = document.getElementById('lengthInput');
let yesRadio = document.getElementById('yesRadio');
let noRadio = document.getElementById('noRadio');
let submitBookButton = document.getElementById('submitBook');

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

function displayAddBookModal(){
    addBookDialog.showModal();
    exitButton.addEventListener('click', ()=>{
        addBookDialog.close()
    });
}

submitBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    let title = titleInput.value;
    let author = authorInput.value;
    let length = lengthInput.value;
    let read = false;
    if (yesRadio.checked) {
        read = true;
    }

    addBookToList(title, author, length, read);
});

function addBookToList(title, author, pages, read){
    let bookToAdd = new Book (title, author, pages, read);
    readingList.push(bookToAdd);
    console.log(bookToAdd.info());
}

function displayBooks(){
    readingList.forEach(book => {
        console.log(book.info());
    });
}