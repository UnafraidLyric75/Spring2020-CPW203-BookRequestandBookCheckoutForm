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

    // if any folwing statements return false isValid is false
    if(isInValidTextInput("name")){
        isValidInfo = false;
    }

    if(isInValidTextInput("title")){
        isValidInfo = false;
    }

    if(isInValidDate("date-checkout")){
        isValidInfo = false;
    }

    return isValidInfo;
}

/**
 * Gets all input from form and put is in a 
 * placeholdername object
 */
function getBookPullInformation():bookPullInformation{
    
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