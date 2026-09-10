const promise=new promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise is resolved");

    }
    else{
        reject("Promise is rejected");
    }
})
promise.then((message)=>{
    console.log("Success: "+message);
}).catch((message)=>{
    console.log("Error: "+message);
})

