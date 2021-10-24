let btnRule = document.querySelector(".button");
let logRule = document.querySelector(".log");
let closeRule = document.querySelector(".close"); 
let gameState = true;

if(window.localStorage.score !== undefined) {
document.querySelector(".score p:nth-child(2)").textContent = window.localStorage.score;
}
else {
    window.localStorage.score = 0;
}
console.log(window.localStorage.score)
let fScore = Number(document.querySelector(".score p:nth-child(2)").textContent);

// For  Agin Button
let rightColor;
let leftColor;

// document.querySelector(".score p:nth-child(2)").textContent = Number(window.localStorage.score)
btnRule.addEventListener("click" , (e) => {
    logRule.style.display = "flex";
}) 
closeRule.addEventListener("click" , (e) => {
    logRule.style.display = "none"
})


// Animation 
let paper = document.querySelector(".paper"); 
let scissors = document.querySelector(".scissors"); 
let rock = document.querySelector(".rock"); 
let root = document.documentElement; 
paper.addEventListener("click" , (e) => {
    if(gameState){
    leftColor = "rgb(80, 108, 244)"
    console.log(window.innerWidth)
    paper.style.animation = "paper 1s";
    paper.style.animationFillMode = "both";
    document.querySelector(".paper:hover img").style.animationPlayState = "paused"
    root.style.setProperty("--after-display" , "none")
    // root.style.setProperty("--state" , "paused")
    scissors.classList.add("hidden");
    rock.classList.add("hidden");
    gameState = false;
    setTimeout(() => { computerDis("paper")} , 1000)
    }
    
})
scissors.addEventListener("click" , (e) => {
    
    leftColor = "rgb(236, 163, 23)"
    let getWidth = window.innerWidth;
    if(getWidth > 500) {
        if(gameState) {

        
        scissors.style.animation = "scissors 1s";
        scissors.style.animationFillMode = "both";
        document.querySelector(".scissors:hover img").style.animationPlayState = "paused"
        root.style.setProperty("--after-display" , "none")
        // root.style.setProperty("--state" , "paused")
        paper.classList.add("hidden");
        rock.classList.add("hidden");
        gameState = false
        setTimeout(() => { computerDis("scissors")} , 1000) 
        }
    }   
    
    else {
        if(gameState) {
        scissors.style.animation = "scissors-mop 1s";
        scissors.style.animationFillMode = "both";
        document.querySelector(".scissors:hover img").style.animationPlayState = "paused"
        root.style.setProperty("--after-display" , "none")
        // root.style.setProperty("--state" , "paused")
        paper.classList.add("hidden");
        rock.classList.add("hidden");
        gameState = false
        setTimeout(() => { computerDis("rock")} , 1000)
        }
    }
   


    

})
rock.addEventListener("click" , (e) => {
    
    leftColor = "rgb(221, 53, 84)"
    let getWidth = window.innerWidth; 
    if(getWidth > 500)  {
        if(gameState){
        rock.style.animation = "rock 1s";
    rock.style.animationFillMode = "both";
    document.querySelector(".rock:hover img").style.animationPlayState = "paused"
    root.style.setProperty("--after-display" , "none")
    // root.style.setProperty("--state" , "paused")
    scissors.classList.add("hidden");
    paper.classList.add("hidden");
    gameState = false
    setTimeout(() => { computerDis(e.target.classList[1])} , 1000)
        }
    }
    
    else {
        if(gameState) {
        rock.style.animation = "rock-mop 1s";
        rock.style.animationFillMode = "both";
        document.querySelector(".rock:hover img").style.animationPlayState = "paused"
        root.style.setProperty("--after-display" , "none")
        // root.style.setProperty("--state" , "paused")
        scissors.classList.add("hidden");
        paper.classList.add("hidden");
        gameState = false
        setTimeout(() => { computerDis(e.target.classList[1])} , 1000)
        }
    }
    

   
    

})
// box-shadow: inset 0 -0.55rem 0 0 rgb(0 0 0 / 30%),
// 0 0 0 0 rgb(187 187 187 / 60%), 0 0 0 0 rgb(187 187 127 / 60%),
// -2px -2px 55px 14px rgb(80, 108, 244);


function computerDis(checedBox) {
let i = 3;
let tempCounter = 0;
let randNum = Math.floor(Math.random() * 3)  + 1;
console.log(randNum)
if(randNum === 1) {
    whereStop = 9;
}
else if(randNum == 2) {
    whereStop = 11;
}
else {
    whereStop = 10
}
document.querySelector(".computer").style.display = "block"
let boxes = document.querySelector(".computer .boxes"); 
let pC = boxes.querySelector(`.box:nth-child(1)`);
let pS = boxes.querySelector(`.box:nth-child(2)`);
let pR= boxes.querySelector(`.box:nth-child(3)`);
let fState = document.querySelector(".final .text")
let refreshBox = setInterval(() => {
    if(i === 3) {
        pR.style.visibility = "visible"
        pC.style.visibility = "hidden"
        pS.style.visibility = "hidden"
        i--;
        tempCounter++;
        if(tempCounter === whereStop) {
            if(checedBox === "paper") {
                fState.textContent = "winner! :)"
                window.localStorage.score = Number(window.localStorage.score) + 1
                document.querySelector(".score p:nth-child(2)").textContent =window.localStorage.score;
                document.querySelector(".final").style.display = "block"

            }
            else if(checedBox === "scissors") {
                fState.textContent = "Loser! :3"
                document.querySelector(".final").style.display = "block"

            } else {
                fState.textContent = "Draw"
                document.querySelector(".final").style.display = "block"
            }
            rightColor = "rgb(221, 53, 84)"
            document.querySelector(".final button").style.background = `linear-gradient(90deg, ${leftColor} 50%, ${rightColor} 10%)`
            clearInterval(refreshBox)
        }
    }
    else if(i === 2) {
        pS.style.visibility = "visible"
        pC.style.visibility = "hidden"
        pR.style.visibility = "hidden"
        i--;
        tempCounter++;
        if(tempCounter === whereStop) {
            console.log(checedBox)
            if(tempCounter === whereStop) {
                if(checedBox === "paper") {
                    fState.textContent = "Loser! :3"
                    document.querySelector(".final").style.display = "block"

                }
                else if(checedBox === "scissors") {
                    fState.textContent = "Draw!"
                    document.querySelector(".final").style.display = "block"

                } else {
                    fState.textContent = "winner! :)"
                    window.localStorage.score = Number(window.localStorage.score) + 1
                    document.querySelector(".score p:nth-child(2)").textContent =window.localStorage.score;


                    document.querySelector(".final").style.display = "block"

    
                }
                rightColor = "rgb(236, 163, 23)"
            document.querySelector(".final button").style.background = `linear-gradient(90deg, ${leftColor} 50%, ${rightColor} 10%)`

            clearInterval(refreshBox)
        }
    }
    }

    
    else {
        pC.style.visibility = "visible"
        pS.style.visibility = "hidden"
        pR.style.visibility = "hidden"
        i = 3; 
        tempCounter++;
        if(tempCounter === whereStop) {
            console.log(checedBox)
            if(checedBox === "paper") {
                fState.textContent = "Draw!"
                document.querySelector(".final").style.display = "block"

            }
            else if(checedBox === "scissors") {
                fState.textContent = "winner! :)"
                window.localStorage.score = Number(window.localStorage.score) + 1
                document.querySelector(".score p:nth-child(2)").textContent =window.localStorage.score;
                document.querySelector(".final").style.display = "block"
               


            } else {
                fState.textContent = "Loser! :3"
                document.querySelector(".final").style.display = "block"


            }
            rightColor = "rgb(80, 108, 244)"
            document.querySelector(".final button").style.background = `linear-gradient(90deg, ${leftColor} 50%, ${rightColor} 10%)`

            clearInterval(refreshBox)
        }
    }


} , 100)
// boxes.querySelector(`.box:nth-child(${i})`).style.visibility = "hidden"
}

function agin() {

window.location.reload()
}

// setInterval(() => {

// } , 1000)
