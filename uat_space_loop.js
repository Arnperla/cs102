// used to create login function to create variables and give purpose to them
function login() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    // makes it so full name can only be between 2 and 20 characters long or it returns invalid message
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
// if badge number is not 3 numbers long returns invalid message
    } else if (badgeNumb > 999 || badgeNumb < 100) {
        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";
//if all conditions are met properly access maessage is displayed
    } else {
        alert("Access Granted, Welcome " + fullName + "!");
        //upon access message being displayed transfer user to new web page
        location.replace("html_loop.html");
    }
}