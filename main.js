const generateMemeBtn = document.querySelector(".meme-generator  .generate-meme-btn");
const memeImg = document.querySelector("img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");
const updateDetails = (url , title , author ) =>{
    memeImg.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `meme by - ${author}`;
}
generateMemeBtn.addEventListener("click",() => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(res => res.json())
    .then(data => {
        updateDetails(data.url , data.title , data.author)
    })

});
generateMemeBtn();