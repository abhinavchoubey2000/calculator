const pannel = document.getElementById("pannel");
const allButtons = document.querySelectorAll(".bt-button");
let string = "";
let valMul = "";
let valDot = "";
for (let index = 0; index < allButtons.length; index++) {
    allButtons[index].addEventListener("click",(e)=>{
        valMul = allButtons[index].innerHTML==='X'?'*':allButtons[index].innerHTML;
        string= string+ valMul;
        pannel.value = string;
    })  
}
const clearAll=()=>{
    pannel.value = ""; 
    string = "";
    
  }

const equal=()=>{
    pannel.value = `Ans:- ${eval(pannel.value)}`;
    let stur = "";
    stur = pannel.value;
    const interval = setInterval(() => {
        if(pannel.value ===stur){
            console.log();   
        }
        else{
            clearInterval(interval);
            string = pannel.value.slice(pannel.value.length-1,pannel.value.length);
            pannel.value = pannel.value.slice(pannel.value.length-1,pannel.value.length);
            
        }
    }, 1);
}

const cl=()=>{
    pannel.value = pannel.value.slice(0,pannel.value.length-1);
    string = pannel.value.slice(0,pannel.value.length);
}