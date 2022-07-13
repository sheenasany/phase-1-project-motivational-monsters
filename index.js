// //write your code here!



// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

const dinosaurGif = "./images/dinosaur-monster.gif"
document.addEventListener('DOMContentLoaded', () => {
    console.log("hello")
})


const commentlist = document.getElementById('comments-list')

form1 = document.getElementById('comment-form')
form1.addEventListener('submit', (event) => {
    event.preventDefault()
    const newComment1 = event.target.comment.value
    const li = document.createElement("li")
    li.textContent = newComment1
    commentList.append(li)
    console.log(form1)
})

form2 = document.getElementById('comment-form2')
form2.addEventListener('submit', (event) => {
    event.preventDefault()
    const newComment2 = event.target.comment.value
    const li = document.createElement("li")
    li.textContent = newComment2
    commentList.append(li)
})
