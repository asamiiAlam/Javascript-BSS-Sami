fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>console.log(data))


async function getUsers(){
    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await(data.json());
    console.log(users);
    return users;
}
//fetch with async await
async function get(){

    try{

      const response=await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await(response.json());
      console.log(data);
    }
    catch(error){
        console.log(error)
    }
}