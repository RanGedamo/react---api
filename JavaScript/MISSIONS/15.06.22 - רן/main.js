// var array = [];
// function printArray(){
//     let ArrayString = document.getElementById("arrayString").value;
//     let result = document.getElementById("result")
    

//         array.push(ArrayString)
//         array.sort()
//         result.innerHTML = array
// }
// let array = [];

// function printSort(){
//     let arrayNum = document.getElementById("arraynum");
//     let result = document.getElementById("result");
    
    
//     array.push(arrayNum.value)
//     array.sort((a,b)=>a-b)
//     result.innerHTML=array
// }

// let arrayName = []
// function printName(){
//     let arrayText = document.getElementById("arraytext").value;
//     let result = document.getElementById("result1");

    
//     arrayName.push(arrayText);
//     arrayName.sort()
//     result.innerHTML = arrayName

//     if(arrayName.length==10){

//        btn.disabled = true
//     }
// }


///--שאלה 5 --///

// let arrayAge = []
// function printAge(){
//     let result2 = document.getElementById("result2");

//     for(let i = 0 ; i<=10;i++){
//         arrayAge.push(Math.floor(Math.random()*30));
//         arrayAge.sort((a,b)=>b-a);
//         result2.innerHTML = arrayAge;
//     }
// }
// printAge()



///// -- שאלה 6 -- ////

let arrayName = []
function printName(){
    let arrayText = document.getElementById("arraytext").value;
    let result = document.getElementById("result1");

    
    arrayName.push(arrayText);
    arrayName.sort().join('-')
    result.innerHTML = arrayName

    if(arrayName.length==10){

       btn.disabled = true
    }
}