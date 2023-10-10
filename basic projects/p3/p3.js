

const toggle = document.getElementById("ic");
const button = document.getElementById("lt");
const body = document.querySelector("body");

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high-fill")){
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "2s";
        
    }else{
        body.style.background = "black";
        body.style.color = "white";
        body.style.transition = "2s";
    }
    
});

button.addEventListener("click", function(){
    this.classList.toggle("dk");
    if(this.classList.toggle("light")){
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "2s";
        
    }else{
        body.style.background = "black";
        body.style.color = "white";
        body.style.transition = "2s";
    }
    
});

