
document.addEventListener('DOMContentLoaded', () => {
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
    // console.log(randomQuote)
    const buttonContainer = document.getElementById('button-Container')
    let buttonOne = document.getElementById("mad-button")
    buttonOne.addEventListener('click',() => {
        const randomQuote = (data[Math.floor(Math.random() * data.length)])
        const boxOne = document.createElement('p')
        boxOne.textContent = randomQuote.text
        //console.log(boxOne.textContent)
        buttonContainer.append(boxOne)
        })
    })
 // Comments section
 const commentList = document.getElementById("comment-list")
 //console.log(commentList);
 const form = document.getElementById("comment-form");
 //console.log(form)
 form.addEventListener("submit", (event) => {
    event.preventDefault()
    const newComment = (event.target.comment.value)
    const lia = document.createElement("li")
    lia.textContent = newComment
    commentList.append(lia)
 })
 // Like count goes up
 // const likeCountOne = document.getElementById("like-count1")
 // const likeButtonOne = document.getElementById("like-button1")
 // likeButtonOne.addEventListener('click', () => {
 //     console.log(likeCountOne.dataset.likeCountOne++)
   
 //     likeCountOne.textContent = likeCountOne.dataset.likeCountOne + " likes"
 // })
 const likeCount = document.getElementById("like-count1")
 const likeButton = document.getElementById("like-button1")
 likeButton.addEventListener('click', () => {
    let count = parseInt(likeCount.innerText)
    count++
    likeCount.textContent = `${count} likes`
  
 })
 const likeCountTwo = document.getElementById("like-count2")
 const likeButtonTwo = document.getElementById("like-button2")
 likeButtonTwo.addEventListener('click', () => {
    let count = parseInt(likeCountTwo.innerText)
    count++
    likeCountTwo.textContent = `${count} likes`
  
 })
 const likeCountThree = document.getElementById("like-count3")
 const likeButtonThree = document.getElementById("like-button3")
 likeButtonThree.addEventListener('click', () => {
    let count = parseInt(likeCountThree.innerText)
    count++
    likeCountThree.textContent = `${count} likes`
  
 })
 const likeCountF = document.getElementById("like-count4")
 const likeButtonF = document.getElementById("like-button4")
 likeButtonF.addEventListener('click', () => {
    let count = parseInt(likeCountF.innerText)
    count++
    likeCountF.textContent = `${count} likes`
  
 })
  
  
  
 // created mouse over event to show description of gifs
 // mouse over for dino gifs
 const dinoContainer = document.getElementById('dino-p')
 //console.log(dinoContainer)
 const dinoBox = document.createElement('p')
 const dinoGif = document.getElementById("dino-monster")
 //console.log(dinoGif)
 dinoGif.addEventListener("mouseover", (event) => {
    dinoBox.textContent = "Code Rage Monster: I rage against coding because nothing is working no matter how much I google!"
    dinoContainer.append(dinoBox)
 })
 // mouse out event
 dinoGif.addEventListener("mouseout", (event) => {
    dinoBox.remove()
 })
 // mouse over for eyeball gif
 const eyeballContainer = document.getElementById('eyeball-p')
 //console.log(eyeballContainer)
 const eyeballBox = document.createElement('p')
 //console.log(eyeballBox)
 const eyeballGif = document.getElementById("eyeball-monster")
 //console.log(eyeballGif)
 eyeballGif.addEventListener("mouseover", (event) => {
    eyeballBox.textContent = "Monster Imposter: Everyone's watching my code and I have no idea what I'm doing!"
    eyeballContainer.append(eyeballBox)
 })
 // mouse out event
 eyeballGif.addEventListener("mouseout", (event) => {
    eyeballBox.remove()
 })
 // mouse over for bomb gif
 const bombContainer = document.getElementById('bomb-p')
 //console.log(bombContainer)
 const bombBox = document.createElement('p')
 //console.log(bombBox)
 const bombGif = document.getElementById("bomb-monster")
 //console.log(bombGif)
 bombGif.addEventListener("mouseover", (event) => {
    bombBox.textContent = "Time-Sucker Monster: Wasting all my time Googling and staring at this empty code editor!"
    bombContainer.append(bombBox)
 })
 // mouse out event
 bombGif.addEventListener("mouseout", (event) => {
    bombBox.remove()
 })
 // mouse over for bomb gif
 const blobContainer = document.getElementById('blob-p')
 //console.log(blobContainer)
 const blobBox = document.createElement('p')
 //console.log(blobBox)
 const blobGif = document.getElementById("blob-monster")
 //console.log(blobGif)
 blobGif.addEventListener("mouseover", (event) => {
    blobBox.textContent = "Swamp Monster: So little time, SO MUCH to do! Drowning in all this new information my brain can't handle!"
    blobContainer.append(blobBox)
 })
 // mouse out event
 blobGif.addEventListener("mouseout", (event) => {
    blobBox.remove()
 })
 })
 