// let fe = fetch("https://jsonplaceholder.typicode.com/posts")
// console.log(fe)


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data =>console.log(data))

// posts
// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(response => response.json())
// .then(posts => console.log(posts))

// // comments
// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(response => response.json())
// .then(comments =>{
//     console.log(comments)
// })

// // albums
// fetch("https://jsonplaceholder.typicode.com/albums")
// .then(response => response.json())
// .then(albums =>{
//     console.log(albums)
// })

// // photos
// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(response => response.json())
// .then( photos =>{
//     console.log(photos)
// })

// // todos
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(response => response.json())
// .then(todos =>{
//     console.log(todos)
// })

// // users
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users =>{
//     console.log(users)
// })









let data = document.getElementById("data")

// // 1.step
// let url1 = "https://jsonplaceholder.typicode.com/posts"
// fetch(url1)
// .then(response => response.json())
// .then(posts =>{
// console.log(posts)
//  data.innerHTML = posts[0].title

// })

// // 2.step
// let url2 = "https://jsonplaceholder.typicode.com/posts"
// fetch(url2)
// .then(response => response.json())
// .then(posts =>{
//     let li = document.createElement("li")
//     li.innerHTML = posts[0].title
//     data.appendChild(li)

// })

// 3.step
let url3 = "https://jsonplaceholder.typicode.com/posts"
fetch(url3)
.then(response => response.json())
.then(posts =>{
  posts.forEach(datas => {

    let li  = document.createElement("li")
    li.innerHTML = datas.title
    data.appendChild(li)
    
  });

})