function add(a,b){

    return a+b;
}

const add=(a,b)=>a+b;
console.log(add(5,6));
const array1=(a,b)=>{
    return a*b;
}

function greet(name, callback){

  console.log("Hello " + name);

  callback();

}


function message(){
  console.log("Welcome to JavaScript");
}


greet("Arman", message);