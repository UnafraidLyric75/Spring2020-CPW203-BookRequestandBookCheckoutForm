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
    return isValidInfo;
}
function getBookPullInformation() {
    var myBook = new bookPullInformation();
    return myBook;
}
function displayBookRequest(book) {
}
function getById(id) {
    return document.getElementById(id);
}
function isValidTextInput(id) {
}
function resetErrorMessages() {
}
function isInValidDate(id) {
}
