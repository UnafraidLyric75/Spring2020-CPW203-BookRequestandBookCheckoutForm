class bookPullInformation{
    name:string;
    title:string;
    checkoutDate:Date;
    isPaperback:boolean;
}

window.onload = function(){
    let bookRequestPull = document.getElementById("add");
    bookRequestPull.onclick = main;
}

function main(){
    resetErrorMessages();
    if(isValid()){
        let book = getBookPullInformation();
        displayBookRequest(book);
    }
}

/**
 * Checks to make sure form has valid information
 */
function isValid():boolean{
    let isValidInfo = true;
    let inputBox;

    // if any folwing statements return false isValid is false
    // ande provides error statement
    if(isInValidTextInput("name")){
        isValidInfo = false;
        inputBox = getById("name");
        inputBox.nextElementSibling.innerHTML = "There must be a name for the person the book is out to";
    }

    if(isInValidTextInput("title")){
        isValidInfo = false;
        inputBox = getById("title");
        inputBox.nextElementSibling.innerHTML = "There must be a title for the book";
    }

    if(isInValidDate("date-checkout")){
        isValidInfo = false;
        inputBox = getById("date-checkout");
        inputBox.nextElementSibling.innerHTML = "There must be a checkout date or requested date ex. mm/dd/yyyy";
    }

    return isValidInfo;
}

/**
 * Gets all input from form and put is in a 
 * placeholdername object
 */
function getBookPullInformation():bookPullInformation{
    let myBook = new bookPullInformation();

    // get name
    let nameInput = getById("name");
    myBook.name = nameInput.value;

    // get title
    let titleInput = getById("title");
    myBook.title = titleInput.value;

    // get checkout date
    let dateInput = getById("date-checkout");
    myBook.checkoutDate = new Date(dateInput.value);

    // get if paperback or not
    let isPaperback = getById("is-paperback");
    myBook.isPaperback = isPaperback.checked;

    return myBook;
}

/**
 * display name
 * book requested
 * checkout date/ request date
 * in a paper back or hard back divs
 */
function displayBookRequest(book:bookPullInformation){
    // gets book information
    let bookName = document.createElement("p");
    bookName.innerText = book.name;

    let bookTitle = document.createElement("p");
    bookTitle.innerText = "requested: " + book.title;

    let bookDate = document.createElement("p");
    bookDate.innerText = " on date: " + book.checkoutDate.toDateString();

    let bookDiv = document.createElement("div");
    if(book.isPaperback){
        bookDiv.classList.add("paperback");
    } else{
        bookDiv.classList.add("hardback");
    }
    
    // puts all date into a div
    bookDiv.appendChild(bookName);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookDate);

    // decides to put it in hardback or paper back div
    if(book.isPaperback){
        let isPaperbackBook = document.getElementById("paperback-book");
        isPaperbackBook.appendChild(bookDiv);
    } else {
        let isHardbackBook = document.getElementById("hardback-book");
        isHardbackBook.appendChild(bookDiv);
    }
}

/**
 * gets element by id
 * @param id is the id for input
 */
function getById(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

/**
 * Validdates all text boxes
 * @param id is text box being validated
 */
function isInValidTextInput(id):boolean{
    let textInput = getById(id).value.trim();
    if(textInput == "" || textInput == null){
        return true;
    }
    return false;
}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void{
    let allSpans= document.querySelectorAll("form span");
    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];
        currSpan.innerText = "*";
    }
}

/**
 * Check to ensure a valid date
 */
function isInValidDate(id):boolean{
    let dateInput = getById(id).value;
    if(isValidDate(dateInput)){
        return false;
    }
    return true;
}

/**
 * continues isInValidDate function
 */
function isValidDate(input:string):boolean{
    // Validating mm/dd/yyyy and m/d/yyyy
    let pattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    return pattern.test(input);
}