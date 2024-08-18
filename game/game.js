// get dom elements
const gameContainer =document.querySelector(".container"),
userResult =document.querySelector(".user_result img"),
cpuResult =document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages =document.querySelectorAll(".option_image");
var audio = new Audio("F:\mearn\javascipt\game\goodresult-82807.mp3")

console.log(gameContainer,userResult,cpuResult,result,optionImages);
optionImages.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active")

        optionImages.forEach((image2,index2)=>{
index!==index2 && image2.classList.remove("active")
// let imageSrc =            

        })
        // get the source of the clicked option image
        let imageSrc = e.target.querySelector("img").src;
        // set the user image to the clicked option image
        userResult.src =imageSrc;
        // generate a random number between 0 and 2
let randomNumber =Math.floor(Math.random()*3)
// create an array of cpu image options
let cpuImages = ["./stone.png","./paper.png","./scissor.png"]
cpuResult.src = cpuImages[randomNumber]
// assign a letter value to the cpu option (R for stone,p for paper,s for scissor)
let cpuValue =["R","P","S"][randomNumber]
let userValue =["R","P","S"][index]
// create an object with all positive outcomes
let outcomes={
    RR:"draw",
    RP:"Cpu",
    RS:"User",
    PP:"Draw",
    PR:"User",  
    PS:"Cpu",
    SS:"Draw",
    SR:"Cpu",
    SP:"User",

}
// look up outcome value based on user and cpu options
let outComeValue = outcomes[userValue +cpuValue]
// display result
result.textContent=userValue===cpuValue ? "Match Draw":`${outComeValue}Won` 
audio.play()
console.log(outComeValue);

    })
})