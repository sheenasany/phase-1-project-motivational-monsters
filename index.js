document.addEventListener('DOMContentLoaded', () => {



const commentList = document.getElementById("comment-list")
console.log(commentList);
 const form = document.getElementById("comment-form");
 console.log(form)

 form.addEventListener("submit", (event) => {
    event.preventDefault()
    // console.log("hello")
    // console.log(event.target.comment.value)
    const newComment = (event.target.comment.value)
    const lia = document.createElement("li")
    lia.textContent = newComment
    commentList.append(lia)


 })

const likeCount = document.getElementById("like-count")

const likeButton = document.getElementById("like-button")
likeButton.addEventListener('click', () => {
    likeCount.dataset.likeCount++
    likeCount.textContent = likeCount.dataset.likeCount + " likes"
})

const dinoGif = document.getElementById("dinosaur-monster")
const btn = document.createElement("button")
btn.textContent = "RAWR"
dinoGif.append(btn)



})

