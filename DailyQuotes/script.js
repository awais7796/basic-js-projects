const apiLink ='https://api.quotable.io/random';
const quote=document.querySelector(".quote");
const author =document.querySelector(".author");
const newBtn=document.querySelector(".new");
const tweetBtn= document.querySelector(".tweet");


 const getquote= async()=>{
    let quoteline=await fetch(apiLink);
    let data= await quoteline.json()

    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
document.addEventListener("DOMContentLoaded",()=>{
    getquote();
})
newBtn.addEventListener('click', getquote)

tweetBtn.addEventListener('click',()=>{
    window.open(href='https://twitter.com/intent/tweet?text='+quote.innerHTML+author.innerHTML ,"Tweet Window", "height =400px","width=700px")
})