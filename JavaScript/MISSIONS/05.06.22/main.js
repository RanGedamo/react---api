

// var newdate = new Date();
// var userdate = new Date(date1.value)
// var x = document.getElementById("welcome")
// var z = document.getElementById("user")
// var age = newdate.getFullYear() - userdate.getFullYear()

// DateButton.onclick = function printDate() {
//     if (age > 18) {
//         x.innerHTML = "welcome"
//         x.style = "color:blue"
//         z.innerHTML = text1.value
//         z.style = "color:blue"

//         x.addEventListener("mouseover", () => {
//             x.style = "color:green";
//             z.style = "color:green";
//         })
//     }
//     else {
//         x.innerHTML = "No Entry" + "<br>" + "<img src='No Entry.png'>"
//         x.style = "color:red"
//     }
// }

var firstname = [];
var lastname =[];
var count = 0;
var counter = 0;
sendarray.onclick = ()=>{
    firstname.push(firstnum.value);
    lastname.push(lastnum.value);

    ran.innerHTML += "<li id='id_'"+ count++ +">"+firstname[counter++]+" : "+lastname[0]+"</li>"
}

