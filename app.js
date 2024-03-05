let albox = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");

let newgame=document.querySelector("#New-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let trunO = true; //player X player O

let winningPatten = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetgame=()=>{
    trunO=true;
    enablebtn();
    msgcontainer.classList.add("hide");

}
albox.forEach((box1) => {
  box1.addEventListener("click", () => {
    if (trunO) {
      box1.innerText = "O";
      trunO = false;
    } else {
      box1.innerText = "X";
      trunO = true;
    }
    box1.disabled = true;
    checkWinner();
  });
});

const disabledbtn=()=>{
    for(box of albox){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(box of albox){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winneris)=>{
    msg.innerText=`congatulation , Wnner is ${winneris}`;
    msgcontainer.classList.remove("hide");
    disabledbtn();
    enablebtn();

}
const checkWinner = () => {
  for (patten of winningPatten) {
    
      let pos1val=albox[patten[0]].innerText;
      let pos2val=albox[patten[1]].innerText;
      let pos3val=albox[patten[2]].innerText;

      if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
        }
      }

  }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
