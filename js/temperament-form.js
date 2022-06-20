//buttons that navigate to forward section
const navigateToGait = document.getElementById("front-to-gait");
const navigateToComplexion = document.getElementById("front-to-complexion");
const navigateToClimate = document.getElementById("front-to-climate");
const navigateToFood = document.getElementById("front-to-food");
const navigateToDrink = document.getElementById("front-to-drink");
const navigateToSleep = document.getElementById("front-to-sleep");
const navigateToHours = document.getElementById("front-to-hours");
const navigateToSpeech = document.getElementById("front-to-speech");
const navigateToPersonality = document.getElementById("front-to-personality");
const navigateToEmotional = document.getElementById("front-to-emotional");
const navigateToHealth = document.getElementById("front-to-health");

//buttons that navigate to previous section
const navigateBackToFrame = document.getElementById("back-to-frame");
const navigateBackToGait = document.getElementById("back-to-gait");
const navigateBackToComplexion = document.getElementById("back-to-complexion");
const navigateBackToClimate = document.getElementById("back-to-climate");
const navigateBackToFood = document.getElementById("back-to-food");
const navigateBackToDrink = document.getElementById("back-to-drink");
const navigateBackToSleep = document.getElementById("back-to-sleep");
const navigateBackToHours = document.getElementById("back-to-hours");
const navigateBackToSpeech = document.getElementById("back-to-speech");
const navigateBackToPersonality = document.getElementById("back-to-personality");
const navigateBackToEmotional = document.getElementById("back-to-emotional");

//various sections of the form
const frameSection = document.getElementById("frame-section");
const gaitSection = document.getElementById("gait-section");
const complexionSection = document.getElementById("complexion-section");
const climateSection = document.getElementById("climate-section");
const foodSection = document.getElementById("food-section");
const drinkSection = document.getElementById("drink-section");
const sleepSection = document.getElementById("sleep-section");
const hoursSection = document.getElementById("hours-section");
const speechSection = document.getElementById("speech-section");
const personalitySection = document.getElementById("personality-section");
const emotionalSection = document.getElementById("emotional-section");
const healthSection = document.getElementById("health-section");

//Forward button event handlers that hide current section and display next section by changing css classes
navigateToGait.addEventListener("click", () => {

    frameSection.classList.remove("form-step-active");
    gaitSection.classList.add("form-step-active");
});

navigateToComplexion.addEventListener("click", () => {

    gaitSection.classList.remove("form-step-active");
    complexionSection.classList.add("form-step-active");
});

navigateToClimate.addEventListener("click", ()=> {

    complexionSection.classList.remove("form-step-active");
    climateSection.classList.add("form-step-active");
});

navigateToFood.addEventListener("click", () => {

    climateSection.classList.remove("form-step-active");
    foodSection.classList.add("form-step-active");    
});

navigateToDrink.addEventListener("click", () => {

    foodSection.classList.remove("form-step-active");
    drinkSection.classList.add("form-step-active"); 
});

navigateToSleep.addEventListener("click", () => {

    drinkSection.classList.remove("form-step-active");
    sleepSection.classList.add("form-step-active");     
});

navigateToHours.addEventListener("click", () => {

    sleepSection.classList.remove("form-step-active");
    hoursSection.classList.add("form-step-active");       
});

navigateToSpeech.addEventListener("click", () => {

    hoursSection.classList.remove("form-step-active");
    speechSection.classList.add("form-step-active"); 
});

navigateToPersonality.addEventListener("click", () => {

    speechSection.classList.remove("form-step-active");
    personalitySection.classList.add("form-step-active"); 
});

navigateToEmotional.addEventListener("click", ()=> {

    personalitySection.classList.remove("form-step-active");
    emotionalSection.classList.add("form-step-active"); 
});

navigateToHealth.addEventListener("click", ()=> {

    emotionalSection.classList.remove("form-step-active");
    healthSection.classList.add("form-step-active");
});

//Previous button event handlers that hide current section and display previous section by changing css classes

navigateBackToFrame.addEventListener("click", ()=> {

    gaitSection.classList.remove("form-step-active");
    frameSection.classList.add("form-step-active");
});

navigateBackToGait.addEventListener("click", () => {

    complexionSection.classList.remove("form-step-active");
    gaitSection.classList.add("form-step-active");
});

navigateBackToComplexion.addEventListener("click", () => {

    climateSection.classList.remove("form-step-active");
    complexionSection.classList.add("form-step-active");
});

navigateBackToClimate.addEventListener("click", () => {

    foodSection.classList.remove("form-step-active");
    climateSection.classList.add("form-step-active");
});

navigateBackToFood.addEventListener("click", () => {

    drinkSection.classList.remove("form-step-active");
    foodSection.classList.add("form-step-active");
});

navigateBackToDrink.addEventListener("click", () => {

    sleepSection.classList.remove("form-step-active");
    drinkSection.classList.add("form-step-active");
});

navigateBackToSleep.addEventListener("click", () => {

    hoursSection.classList.remove("form-step-active");
    sleepSection.classList.add("form-step-active");
});

navigateBackToHours.addEventListener("click", () => {

    speechSection.classList.remove("form-step-active");
    hoursSection.classList.add("form-step-active");
});

navigateBackToSpeech.addEventListener("click", () => {

    personalitySection.classList.remove("form-step-active");
    speechSection.classList.add("form-step-active");
});

navigateBackToPersonality.addEventListener("click", () => {

    emotionalSection.classList.remove("form-step-active");
    personalitySection.classList.add("form-step-active");
});

navigateBackToEmotional.addEventListener("click", () => {

    healthSection.classList.remove("form-step-active");
    emotionalSection.classList.add("form-step-active");
});