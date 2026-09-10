fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log(users);
  })
  .catch(error => {
    console.error(error);
  });

  async function getUsers(){
   const response=await fetch("https://jsonplaceholder.typicode.com/users");
   const users=await(response.json());
   console.log(users);

  }

array1=[

    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"},
    {id: 4, name: "David"}
    
]