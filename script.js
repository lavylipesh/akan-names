var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var radio;

function calculate() {
    var CC = parseInt(document.getElementById("cc").value);
    var YY = parseInt(document.getElementById("yy").value);
    var MM = parseInt(document.getElementById("mm").value);
    var DD = parseInt(document.getElementById("dd").value);
    var d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

function gender(){
    radio = document.getElementsByName("gender");

    if (radio[0].checked == true) {
        var gender = "Male";
    }
    else if (radio[1].checked == true) {
        var gender = "Female";
    }
    else {
        console.log(" radio pass")
    }
    switch (gender) {
        case "Male":

            if (da == 1) {
                alert("Sunday" + " Your Name is "+maleNames[0]);
            }
            else if (da == 2) {
                alert("Monday" + " Your Name is "+maleNames[1]);
            }
            else if (da == 3) {
                alert("Tuesday" +" Your Name is "+ maleNames[2]);
            }
            else if (da == 4) {
                alert("Wednesday" +" Your Name is "+ maleNames[3]);
            }
            else if (da == 5) {
                alert("Thursday" + " Your Name is "+maleNames[4]);
            }
            else if (da == 6) {
                alert("Friday" + " Your Name is "+maleNames[5]);
            }
            else if (da == -0) {
                alert("Saturday" +" Your Name is "+ maleNames[6]);
            }else{
                console.log("male switch");
            }
            break;
        case "Female":

            if (da == 1) {
                alert("Sunday" + " Your Name is "+femaleNames[0]);
            }
            else if (da == 2) {
                alert("Monday" + " Your Name is "+femaleNames[1]);
            }
            else if (da == 3) {
                alert("Tuesday" +" Your Name is "+ femaleNames[2]);
            }
            else if (da == 4) {
                alert("Wednesday" +" Your Name is "+ femaleNames[3]);
            }
            else if (da == 5) {
                alert("Thursday" +" Your Name is "+ femaleNames[4]);
            }
            else if (da == 6) {
                alert("Friday" +" Your Name is "+ femaleNames[5]);
            }
            else if (da == -0) {
                alert("Saturday" + " Your Name is "+femaleNames [6]);
            }else{
                console.log("female switch");
            }
            
            break;
            default:
       
    }

}

function output() {
    da = calculate();
    calculate();
    gender();
}










