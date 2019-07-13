var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


//calculate day of week
var d;
function calculate() {
    var CC = parseInt(document.getElementById("cc")).value;
    var YY = parseInt(document.getElementById("yy")).value;
    var MM = parseInt(document.getElementById("mm")).value;
    var DD = parseInt(document.getElementById("dd")).value;

    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    return (Math.round(d));
}


//radio buttons
function radio(){
    calculate();
    var rads = document.getElementByName("gender");

    if (rads[0].checked == true) {
        var gender = "male";
    }
    else if (rads[1].checked == true) {
        var gender = "female";
    }
    else {
        console.log("pass")
    }
}
//assign akan names & day of birth
function output() {
    radio();
    switch (gender) {
        case "male":

            if (day === 0) {
                document.write("Sunday" + maleNames[0])
            }
            else if (day === 1) {
                document.write("Monday" + maleNames[1])
            }
            else if (day === 2) {
                document.write("Tuesday" + maleNames[2])
            }
            else if (day === 3) {
                document.write("Wednesday" + maleNames[3])
            }
            else if (day === 4) {
                document.write("Thursday" + maleNames[4])
            }
            else if (day === 5) {
                document.write("Friday" + maleNames[5])
            }
            else if (day === 6) {
                document.write("Saturday" + maleNames[6])
            }
            break;
        case "female":

            if (day === 0) {
                document.write("Sunday" + femaleNames[0])
            }
            else if (day === 1) {
                document.write("Monday" + femaleNames[1])
            }
            else if (day === 2) {
                document.write("Tuesday" + femaleNames[2])
            }
            else if (day === 3) {
                document.write("Wednesday" + femaleNames[3])
            }
            else if (day === 4) {
                document.write("Thursday" + femaleNames[4])
            }
            else if (day === 5) {
                document.write("Friday" + femaleNames[5])
            }
            else if (day === 6) {
                document.write("Saturday" + femaleNames)
            }

    }
}
console.log("pass");
//call functions in html








