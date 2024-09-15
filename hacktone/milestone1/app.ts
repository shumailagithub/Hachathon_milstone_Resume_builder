let toggleButton = document.getElementById("toggle_button") as HTMLButtonElement

let Skills = document.getElementById("skills") as HTMLElement

toggleButton.addEventListener("click", ()=> {
    if(Skills.style.display === "none"){
        Skills.style.display = "bloock"
    }else{
        Skills.style.display = "none"
    }
});