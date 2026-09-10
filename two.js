async function getPost() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const post = await response.json();

  console.log(post);
}

getPost();

async function getPost() {
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post=await(response.json());
    console.log(post);
}


async function getPost() {
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post=await(response.json());
    console.log(post);
}
async function getallposts(){

    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts=await(response.json());
    console.log(posts);
}