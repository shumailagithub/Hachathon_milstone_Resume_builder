var toggleButton = document.getElementById("toggle_button");
var Skills = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (Skills.style.display === "none") {
        Skills.style.display = "bloock";
    }
    else {
        Skills.style.display = "none";
    }
});
