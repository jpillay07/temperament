const navigateToGait = document.getElementById("front-to-gait");

const frameSection = document.getElementById("frame-section");
const gaitSection = document.getElementById("gait-section");

navigateToGait.addEventListener("click", () => {

    

});

//function that navigates from one section to another by changing classes for each gaitSection

function navigateForward(currentSection, nextSection){

    currentSection.classList.remove("form-step-active");
    nextSection.classList.add("form-step-active");
}