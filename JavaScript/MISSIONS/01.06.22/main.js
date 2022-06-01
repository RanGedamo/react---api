
//--1--//

// const ran = document.getElementById("rans");
// ran.onclick = function printalert() {
//     alert("ran gedamo")
// }


//--2--//

// function printp(){
//     console.log("ran gedamo")
// }


//--3--//

// function changecolor(){
//     const ran = document.getElementById("ran2")
//     ran.style="color:red";
// }

//--4--//

// function changewidth() {
//     const change1 = document.getElementById("change");
//     change1.style = "font-size:250px"
// }

//--5--//

// function change3(){
//     const ran2 = document.getElementById("change2");
//     ran2.innerHTML="kfar yona"
// }


//--6--//

// document.getElementById("button1").onclick = function () {
// const text3 = document.getElementById("input1").value;
// const h2 = document.getElementById("h2");
// h2.innerText = text3
// }

//--7--//

// const dat = new Date('12/5/2022 08:22:05')
// console.log(dat)
// function printdate(){
//    if(dat.getHours()>12){
//        document.body.style = "background:blue"
//        document.write("<h1>Good Night</h1>")
//    }
//    else if(dat.getHours()<12){
//        document.body.style="background:yellow"
//        document.write("<h1>Good Morning</h1>")
//    }
// }
// printdate()


//--8--//

//     const num = +prompt("age?");
//     let text2 = document.getElementById("col");
//     if (num >= 18) {
//         text2.textContent="Welcome";
//         text2.style="color:red"
//     }
//     if(num<18){
//         text2.textContent="Welcome";
//         text2.style="color:blue"
//     }
// text2.onmouseover=function(){
//     text2.style="color:green"
// }


//--9--//

for(let i = 0 ;i<5;i++){
const num = document.getElementById("button");
num.onclick = function () {
    const numb = document.getElementById("num1").value;
    const h2 = document.getElementById("h2");
    h2.textContent+=numb
}
}

...
