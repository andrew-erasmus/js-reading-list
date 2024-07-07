const readingList = [];
const addBookDialog = document.getElementById('addBookDialog');
let bookCount=0;

let exitButton = document.getElementById('closeAddModal');
let titleInput = document.getElementById('titleInput');
let authorInput = document.getElementById('authorInput');
let lengthInput = document.getElementById('lengthInput');
let yesRadio = document.getElementById('yesRadio');
let noRadio = document.getElementById('noRadio');
let submitBookButton = document.getElementById('submitBook');
let numBooks = document.getElementById('numBooks');
let numRead = document.getElementById('numRead');
let editBookButtons = document.querySelectorAll('.editBookButton');


// Constructor for a new book
function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        let output =this.id +", " +this.title+ ", "+this.author+ ", "+this.pages+ ", "+this.read+ ".";
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
    bookCount++;
    let id = bookCount
    let title = titleInput.value;
    let author = authorInput.value;
    let length = lengthInput.value;
    let read = false;
    if (yesRadio.checked) {
        read = true;
        yesRadio.checked = false;
    } else {
        read = false;
        yesRadio.checked = false;
    }

    titleInput.value="";
    authorInput.value="";
    lengthInput.value="";

    addBookDialog.close();
    addBookToList(id, title, author, length, read);
});

function updateListeners(){
    editBookButtons.forEach( book => {
        book.addEventListener('click', (event)=> {
            console.log(event.target.parentElement.parentElement);
        });
    });
}

function editBook(id){
    
}

function addBookToList(id, title, author, pages, read){
    let bookToAdd = new Book (id, title, author, pages, read);
    readingList.push(bookToAdd);
    buildBookCard(id, title, author, pages, read);
}

function displayBooks(){
    readingList.forEach(book => {
        console.log(book.info());
    });
}

function buildBookCard(id, title, author, length, read){
    // let bookCard = document.getElementsByClassName('bookCard');
    let newBookCard = document.createElement("div");
    newBookCard.classList.add("bookCard");
    newBookCard.classList.add("book"+id);

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("bookCardHeader");

    let editBookDiv = document.createElement("div");
    editBookDiv.classList.add("editBook");
    editBookDiv.setAttribute("id",id);

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

    titleOutput.innerHTML= 'Title: '+title;
    authorOutput.innerHTML='Author: '+author;
    lengthOutput.innerHTML='Length: '+length;
    readOutput.innerHTML='Read?: '+read;

    newBookCard.appendChild(cardHeader);
    newBookCard.appendChild(titleOutput);
    newBookCard.appendChild(authorOutput);
    newBookCard.appendChild(lengthOutput);
    newBookCard.appendChild(readOutput);

    cardHeader.appendChild(editBookDiv);
    editBookDiv.appendChild(editButton);
    editButton.appendChild(img);
    
    document.getElementById('booksContainer').appendChild(newBookCard);
    updateStatistics();
    editBookButtons = document.querySelectorAll('.editBookButton');
    updateListeners();
    
}

function updateStatistics(){
    numBooks.innerHTML = "Number of books: " + readingList.length;
    let readCount = 0;
    readingList.forEach(e => {
        if (e.read == true){
            readCount++;
        }
    });
    numRead.innerHTML = "Number of books read: " + readCount;
}