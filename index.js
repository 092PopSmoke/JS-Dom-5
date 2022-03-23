var rand = Math.ceil(Math.random()*9);
console.log(rand)

var gulFarge = "box_" + rand;
console.log(gulFarge);

var box = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];
var boxLenght = box.length;

// var box = document.qu


var win =""
var lose = ""
var counter = 0;

var random = document.getElementById("box" + rand);
console.log(random.id);

function revel(verdi) {
    if (counter == 3) {
        document.getElementById("text").innerHTML = "You've reached the guessing cap, please click Reset below!";
        return false;
    }
    else {
        console.log(counter);
        counter++;
    }

    for (var i = 0; i <= boxLenght; i++) {
        if (verdi == box[i]) {
            tempBox = "#"+box[i]
            var temp = document.querySelector(tempBox);
            temp.style.backgroundColor = "red";
            document.getElementById("text").innerHTML = "Nope, Try again!";

        if (verdi == random.id) {
            var gul = document.getElementById("box" + rand).style.backgroundColor = "#00FFFF";
            document.getElementById("text").innerHTML = "Amazing! You found the Diamond";
        }
    }

}

}

function reset() {
    document.location.reload(true);
}

// function revel(verdi) {
    
//     if (counter == 3) {
//         return false;
//     } else {
//         console.log(counter);
//         counter++;
//     }
//     if (verdi == "box1") {
//         var box1 = document.querySelector("#box1");
//         box1.style.backgroundColor = "red";
//     }  
//     if (verdi == "box2") {
//         var box2 = document.querySelector("#box2");
//         box2.style.backgroundColor = "red"
//     }
//     if (verdi == "box3" && gulFarge == "box_3") {
//         var box3 = document.querySelector("#box3");
//         box3.style.backgroundColor = "blue"
//     }
//     if (verdi == "box3" && gulFarge != "box_3") {
//         var box3 = document.querySelector("#box3");
//         box3.style.backgroundColor = "red"
//     }
//     if (verdi == "box4") {
//         var box4 = document.querySelector("#box4");
//         box4.style.backgroundColor = "red"
//     }
//     if (verdi == "box5") {
//         var box5 = document.querySelector("#box5");
//         box5.style.backgroundColor = "red"
//     }
//     if (verdi == "box6") {
//         var box6 = document.querySelector("#box6");
//         box6.style.backgroundColor = "red"
//     }
//     if (verdi == "box7") {
//         var box7 = document.querySelector("#box7");
//         box7.style.backgroundColor = "red"
//     }
//     if (verdi == "box8") {
//         var box8 = document.querySelector("#box8");
//         box8.style.backgroundColor = "red"
//     }
//     if (verdi == "box9") {
//         var box9 = document.querySelector("#box9");
//         box9.style.backgroundColor = "red"
//     }

//     if (verdi == random) {
//         document.getElementById("box" + rand).style.backgroundColor = "#FFDF00"