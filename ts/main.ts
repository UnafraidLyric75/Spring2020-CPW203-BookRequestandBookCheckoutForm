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
    return isValidInfo;
}

/**
 * Gets all input from form and put is in a 
 * placeholdername object
 */
function getBookPullInformation():bookPullInformation{
    let myBook = new bookPullInformation();

    return myBook;
}

/**
 * display name
 * book requested
 * checkout date/ request date
 * in a paper back or hard back divs
 */
function displayBookRequest(book:bookPullInformation){
    
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
function isValidTextInput(id):boolean{

}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void{

}

/**
 * Check to ensure a valid date
 */
function isInValidDate(id):boolean{
    
}