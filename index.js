// higher order function
function a(b){
// console.log(b);
b()
}


function greet(){
    console.log("hello")
}

a(greet);