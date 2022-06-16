checkform.onclick = function printname(){
    let result = /^[a-zA-Z ]+{,3}/.test(username.value);
    console.log(result);
}
