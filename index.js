
var randomNumber=Math.floor(Math.random()*26)
console.log(randomNumber);

// document.querySelectorAll('.box')[randomNumber].addEventListener('click',()=>{

// });


for (let i=0;i<25;i++){
    document.querySelectorAll(".box")[i].addEventListener("click",()=>{
        document.querySelectorAll(".box")[i].style.backgroundColor="green"
        
    });
}

document.querySelector(`.box${randomNumber}`).addEventListener('click',()=>{
    document.querySelector(`.box${randomNumber}`).style.backgroundColor='red'
    setTimeout(() => {
        alert("Game over bro:)")
    }, 0); 
});

document.querySelector("#check").addEventListener("click",()=>{
    for (let i=0;i<25;i++){
        document.querySelectorAll(".box")[i].addEventListener("click",()=>{
            document.querySelectorAll(".box")[i].style.backgroundColor="red"
            setTimeout(() => {
                alert("Game over bro:)")
            }, 0);
            
        });
    }
})


