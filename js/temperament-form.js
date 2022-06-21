//Get a nodelist of the next and prev buttons
const nextBtns = document.querySelectorAll(".temperament-next-button");
const prevBtns = document.querySelectorAll(".temperament-prev-button");

//Get a nodelist of all the form steps 
const formSteps = document.querySelectorAll(".form-step");

//Number to keep track of the current form step
let formStepsNum = 0;

//Event listener added to all next step buttons

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        if(formStep.classList.contains("form-step-active")){
            formStep.classList.remove("form-step-active");
        }
    });

    formSteps[formStepsNum].classList.add("form-step-active");
}