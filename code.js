// This is our main function   
function validateInput() {  
    // Grabs the data from the text box in our html using the id
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const zip = document.getElementById("zip").value;
    // Combines the names 
    const name = first + " " + last;
    // If / else ladder for the logic
    if (first.length > 1 && last.length > 1) {
        // Checks to see if we exceeded max characters
        if (name.length > 20) {
            alert( 'Input exceeds max characters alowed!');
        // Checks to see the zip code is 5 digits in length
        } else if (zip.length !== 5) {
            alert( 'Not a valid Zip Code!');  
        // If no errors were detected in the inputs then we reach the secret message!
        } else {
            alert( 'Correct Input achieved! ' + name + ' ' + zip);  
        }
    // Issues error warning if inputs are empty
    } else {
        alert( 'Fields cannot be blank!'); 
    }

}

// Function called by our button listener to paly a ding when pressed
function playSound() {
    // Finds our audio element and issues it the play() function
    document.getElementById('sound1').play();
}

// Listens for submit button being clicked then calls our playSound function
document.getElementById("submit").addEventListener("click", playSound);