document.addEventListener('DOMContentLoaded', () => {



const commentList = document.getElementById("dinosaur-monster")
console.log(commentList);
 const form = document.getElementById("comment-form");
 console.log(form)

 form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("hello")
 })
    // console.log("hello")
    // console.log(event.target.comment.value)

    // const newComment = (event.target.comment.value)
    // const li = document.createElement("li")
    // li.textContent = newComment
    // commentList.append(li)

    // console.log(form)
// })
// const commentlist = document.getElementById('comments-list')
// const form = document.getElementById('comment-form1')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const newComment1 = event.target.comment.value
//     const li = document.createElement("li")
//     li.textContent = newComment1
//     commentlist.append(li)
// })

const likeCount = document.getElementById("like-count")

const likeButton = document.getElementById("like-button")
likeButton.addEventListener('click', () => {
    likeCount.innertext = likeCount.dataset.likeCount + "likes"
})

})

