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
    // buildBookCard();
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

function buildBookCard(title, author, length, read){
    // let bookCard = document.getElementsByClassName('bookCard');
    let newBookCard = document.createElement("div");
    newBookCard.classList.add("bookCard");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("bookCardHeader");

    let editBookDiv = document.createElement("div");
    editBookDiv.classList.add("editBook");

    let editButton = document.createElement("a");
    editButton.classList.add("editBookButton");

    let img = document.createElement("img");
    img.src = "./icons/editIcon.svg";
    img.style.height = "24px";
    img.style.width = "24px";

    let titleOutput = document.createElement("p");
    let authorOutput = document.createElement("p");
    let lengthOutput = document.createElement("p");
    let readOutput = document.createElement("p");

    titleOutput.innerHTML=title;
    authorOutput.innerHTML=author;
    lengthOutput.innerHTML=length;
    readOutput.innerHTML=read;

    newBookCard.appendChild(cardHeader);
    newBookCard.appendChild(titleOutput);
    newBookCard.appendChild(authorOutput);
    newBookCard.appendChild(lengthOutput);
    newBookCard.appendChild(readOutput);

    cardHeader.appendChild(editBookDiv);
    editBookDiv.appendChild(editButton);
    editButton.appendChild(img);
    
// fix the way it is added
    document.getElementById('booksContainer').appendChild(newBookCard);
}