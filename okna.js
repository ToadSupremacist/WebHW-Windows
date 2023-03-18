//window options select algo
let radios = Array.from(document.querySelectorAll(".sect-radio"));

let second = document.querySelector(".second-sect");
let third = document.querySelector(".third-sect");
let fourth = document.querySelector(".fourth-sect");

for (i of radios){
    let v = i.value;
    i.addEventListener("input", ()=> {
        if (v==2){
            second.classList.remove("--visually-hidden");
            third.classList.add("--visually-hidden");
            fourth.classList.add("--visually-hidden");
        }else if (v==3){
            second.classList.remove("--visually-hidden");
            third.classList.remove("--visually-hidden");
            fourth.classList.add("--visually-hidden");
        }else if (v==4){
            second.classList.remove("--visually-hidden");
            third.classList.remove("--visually-hidden");
            fourth.classList.remove("--visually-hidden");
        }else {
            second.classList.add("--visually-hidden");
            third.classList.add("--visually-hidden");
            fourth.classList.add("--visually-hidden");
        }
    });
};

/////////////////////////////////////////////////////////////////////////
//add new window algo
let confDiv = document.querySelector(".configure-div");
let addWinBtn = document.querySelector(".add-window");
let refNode = document.querySelector(".configure-section");

addWinBtn.addEventListener("click", ()=> {
    let confDivCopy = confDiv.cloneNode(true);
    refNode.insertBefore(confDivCopy, addWinBtn);
});