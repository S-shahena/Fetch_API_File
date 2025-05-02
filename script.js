// let fe = fetch("https://jsonplaceholder.typicode.com/posts")
// console.log(fe)


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data =>console.log(data))

fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())
.then(posts => console.log(posts))

fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())
.then(comments =>{
    console.log(comments)
})

fetch("https://jsonplaceholder.typicode.com/albums")
.then(response => response.json())
.then(albums =>{
    console.log(albums)
})

fetch("https://jsonplaceholder.typicode.com/photos")
.then(response => response.json())
.then( photos =>{
    console.log(photos)
})

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(todos =>{
    console.log(todos)
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users =>{
    console.log(users)
})