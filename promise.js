promise= new promise((resolve, reject) => {
  setTimeout(() => {
    let food=true
    if (food) {
        resolve("food is ready");}

    else{
        reject("food is not ready")
    }
  }, 2000);



})