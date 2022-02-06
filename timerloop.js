//Arnold Perla

// used to create a function named countdown to operate the count down timer
function Countdown() {
    // variable used to set count down timer to 10
    var currtime = 10
    // for loop where if the timer is = to 11 it prints blastoff
    for (var i = 1; i <=11; i++) {
        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdowntimer").innerHTML = "Blastoff!";
            }, 1000 * i);
            // used to display warning message when timer is halfway done
        } else if (i > 6){
            setTimeout(function () {
                document.getElementById("countdowntimer").innerHTML =
                "Warning! Halfway to launch, time left =" + currtime;
                currtime = currtime - 1;
            }, 1000 * i);
            // used to display current time
        }else {
            setTimeout(function () {
              document.getElementById("countdowntimer").innerHTML = "the time left is" + currtime;  
              currtime = currtime - 1;
            }, 1000 * i);
        }
    }
}
// function created to play david bowie
function playbowie(){
    mysound = new sound("David_Bowie.mp3");
    mysound.play();
}
//used to create audio element
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    // used to play sound files
    this.play = function(){}
        this.sound.play();
    }