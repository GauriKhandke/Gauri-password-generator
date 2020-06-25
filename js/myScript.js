// function To generate Password when 'Generate Password' button is clicked
function generatePassword()
{
    // take input from user for password length
    var length = prompt("How many caracters would you like your password to contain?");
    
    //Check for password length : if length is less than 8 or greater than 128, alert will pop up. 
    if(length < 8 || length > 128)
    {
        alert("Password length must be between 8 to 128");
    }
    else{

        //If length is between 8-128 else will execute

        //take input from user for include lower, upper case letters, numbers and special characters 
        var lower = confirm("Click OK to include lowercase letters.");
        var upper = confirm("Click OK to include uppercase letters.");
        var numeric = confirm("Click OK to include numbers.");
        var special = confirm("Click OK to include special characters.");

        // If all character types are false, it will show alert
        if(!lower && !upper && !numeric && !special)
        {
            alert("Must select atleast one character type.");     
        }
        else{

            // If atleast one character type is selected, else will execute
            var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            var numbers = ["0","1","2","3","4","5","6","7","8","9"];
            var specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

            var set = [];  //empty array
            
            if(lower) // If lower is true it will execute
            {
                set = set.concat(lowerCase);
            }
            if(upper) //If upper is true, it will execute
            {
                set = set.concat(upperCase);
            }
            if(numeric) // If numeric is true, it will execute
            {
                set = set.concat(numbers);
            }
            if(special) //If special is true, it will execute
            {
                set = set.concat(specialChar);
            }
           
            result = ""; //empty string

            //loop till length number
            for (var i = 0 ,n = set.length; i < length; ++i){
                //calculate Math.floor(Math.random() * n) and give it as index to set, so it will return value at that index in set.
                result += set[Math.floor(Math.random() * n)]; 
            }

            //document.getElementById("textarea") : select element having id 'textarea'
            //innerHTML : display value at that element on HTML
            document.getElementById("textarea").innerHTML = result;

            // Copy to Clipboard Button enabled
            copybutton.disabled = false;
        }

    }
}

// Function to copy password
function copyToClipboard()
{
    textarea.select(); //The select() method selects the entire contents of a text area.

    // browser extensions can interact with the system clipboard by document.execCommand("copy");
    document.execCommand("copy");
}