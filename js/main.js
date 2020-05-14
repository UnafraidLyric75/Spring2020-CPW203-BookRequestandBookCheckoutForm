var bookPullInformation = (function () {
    function bookPullInformation() {
    }
    return bookPullInformation;
}());
window.onload = function () {
    var bookRequestPull = document.getElementById("add");
    bookRequestPull.onclick = main;
};
function main() {
    resetErrorMessages();
    if (isValid()) {
        var book = getBookPullInformation();
        displayBookRequest(book);
    }
}
function isValid() {
    var isValidInfo = true;
    var inputBox;
    if (isInValidTextInput("name")) {
        isValidInfo = false;
        inputBox = getById("name");
        inputBox.nextElementSibling.innerHTML = "There must be a name for the person the book is out to";
    }
    if (isInValidTextInput("title")) {
        isValidInfo = false;
        inputBox = getById("title");
        inputBox.nextElementSibling.innerHTML = "There must be a title for the book";
    }
    if (isInValidDate("date-checkout")) {
        isValidInfo = false;
        inputBox = getById("date-checkout");
        inputBox.nextElementSibling.innerHTML = "There must be a checkout date or requested date ex. mm/dd/yyyy";
    }
    return isValidInfo;
}
function getBookPullInformation() {
    var myBook = new bookPullInformation();
    var nameInput = getById("name");
    myBook.name = nameInput.value;
    var titleInput = getById("title");
    myBook.title = titleInput.value;
    var dateInput = getById("date-checkout");
    myBook.checkoutDate = new Date(dateInput.value);
    var isPaperback = getById("is-paperback");
    myBook.isPaperback = isPaperback.checked;
    return myBook;
}
function displayBookRequest(book) {
}
function getById(id) {
    return document.getElementById(id);
}
function isInValidTextInput(id) {
    var textInput = getById(id).value.trim();
    if (textInput == "" || textInput == null) {
        return true;
    }
    return false;
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        currSpan.innerText = "*";
    }
}
function isInValidDate(id) {
    var dateInput = getById(id).value;
    if (isValidDate(dateInput)) {
        return false;
    }
    return true;
}
function isValidDate(input) {
    var pattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    return pattern.test(input);
}
