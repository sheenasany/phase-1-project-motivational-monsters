// //write your code here!

// document.addEventListener('DOMContentLoaded', () => {

// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });


const commentlist = document.getElementById('comments-list')



form = document.getElementById('comment-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const newComment = event.target.comment.value
    const li = document.createElement("li")
    li.textContent = newComment
    commentList.append(li)
})
