//Constants representing temperaments
const SANGUINOUS = 0;
const PHLEGMATIC = 1;
const BILIOUS = 2;
const MELANCHOLIC = 3;

//Variable to store the sorted answers in descending order to determine dominant/subdominant temperament
var sortedAnswers = [];

//Get a nodelist of the next and prev buttons
const nextBtns = document.querySelectorAll(".temperament-next-button");
const prevBtns = document.querySelectorAll(".temperament-prev-button");
const submitButton = document.querySelector(".temperament-submit-button");

//Get the retake and book appointment buttons
const retakeButton = document.querySelector(".temperament-reload-button");
const bookButton = document.querySelector(".temperament-book-button");

//Get a nodelist of all the form steps 
const formSteps = document.querySelectorAll(".form-step");



//Number to keep track of the current form step
let formStepsNum = 0;

//Event listener for booking button and reload buttons
retakeButton.addEventListener("click", ()=>{
    location.reload();
});

bookButton.addEventListener("click", ()=>{
    window.open("https://clientportal.powerdiary.com/clientportal/thetibbdoctor", "_self");
});

//Event listener added to all next step buttons

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        window.scrollTo(0, 0); // values are x,y-offset
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        window.scrollTo(0, 0); // values are x,y-offset
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        if(formStep.classList.contains("form-step-active")){
            formStep.classList.remove("form-step-active");
        }
    });

    formSteps[formStepsNum].classList.add("form-step-active");
    console.log(formSteps[formStepsNum]);
}

//count the amount of checked radio buttons and determine the temperament based on answers
submitButton.addEventListener("click", ()=>{
    const answerList = document.querySelectorAll('input[type="radio"]:checked');
    const answerListArray = Array.from(answerList);

    var answerObj = [
        {
            temperament: "sanguinous",
            count: 0
        },

        {
            temperament: "phlegmatic",
            count: 0
        },

        {
            temperament: "bilious",
            count: 0
        },

        {
            temperament: "melancholic",
            count: 0
        }
    ];

    answerListArray.forEach((answer) =>{
        switch(answer.value){
            case "sanguinous":
                answerObj[SANGUINOUS].count += 1;
                break;
            case "phlegmatic":
                answerObj[PHLEGMATIC].count += 1;
                break;
            case "bilious":
                answerObj[BILIOUS].count += 1;
                break;
            default:
                answerObj[MELANCHOLIC].count +=1;
        }
    });

    sortedAnswers = answerObj.sort((a,b)=>{
        if(a.count > b.count) return -1;
        else return 1;
    })

    console.log(sortedAnswers);

    //Dominant icon and text
    const dominantIcon = document.querySelector(".dominant-icon");
    const dominantText = document.querySelector(".dominant-text");

    //Subdominant icon and text
    const subdominantIcon = document.querySelector(".subdominant-icon");
    const subdominantText = document.querySelector(".subdominant-text");
    

    if(sortedAnswers[0].temperament == "sanguinous"){
        dominantIcon.src = "images/samguine.png";
        const temperamentDescription = document.querySelector(".sanguinous-description");
        dominantText.textContent ="Sanguinous";

        temperamentDescription.classList.add("description-active");
    }

    if(sortedAnswers[0].temperament == "phlegmatic"){
        dominantIcon.src = "images/phlegmatic.png";
        const temperamentDescription = document.querySelector(".phlegmatic-description");
        dominantText.textContent ="Phlegmatic";

        temperamentDescription.classList.add("description-active");
    }

    if(sortedAnswers[0].temperament == "bilious"){
        dominantIcon.src = "images/bilious.png";
        const temperamentDescription = document.querySelector(".bilious-description");
        dominantText.textContent ="Bilious";

        temperamentDescription.classList.add("description-active");
    }

    if(sortedAnswers[0].temperament == "melancholic"){
        subdominantIcon.src = "images/melancholic.png";
        const temperamentDescription = document.querySelector(".melancholic-description");
        subdominantText.textContent ="Melancholic";

        temperamentDescription.classList.add("description-active");
    }

    if(sortedAnswers[1].temperament == "sanguinous"){
        subdominantIcon.src = "images/samguine.png";
        const temperamentDescription = document.querySelector(".sub-sanguinous-description");
        subdominantText.textContent ="Sanguinous";

        temperamentDescription.classList.add("description-active");
    }

    if(sortedAnswers[1].temperament == "phlegmatic"){
        subdominantIcon.src = "images/phlegmatic.png";
        const temperamentDescription = document.querySelector(".sub-phlegmatic-description");
        subdominantText.textContent ="Phlegmatic";

        temperamentDescription.classList.add("description-active");
    }

    if(sortedAnswers[1].temperament == "bilious"){
        subdominantIcon.src = "images/bilious.png";
        const temperamentDescription = document.querySelector(".sub-bilious-description");
        subdominantText.textContent ="Bilious";

        temperamentDescription.classList.add("description-active");
    }

    if(sortedAnswers[1].temperament == "melancholic"){
        subdominantIcon.src = "images/melancholic.png";
        const temperamentDescription = document.querySelector(".sub-melancholic-description");
        subdominantText.textContent ="Melancholic";

        temperamentDescription.classList.add("description-active");
    }

    const resultsDiv =  document.querySelector(".temperament-results");

    formSteps[formStepsNum].classList.remove("form-step-active");

    window.scrollTo(0, 0); // values are x,y-offset

    resultsDiv.classList.add("temperament-results-active");

    resultsDiv.classList.remove("temperament-results");



});