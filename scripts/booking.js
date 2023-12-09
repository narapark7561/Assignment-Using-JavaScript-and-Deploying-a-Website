/********* create variables *********/
let dailyRate = 35; // Assuming the default rate is $35 per full day
let dayCounter = 0; // Counter for the selected days

const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];

/********* colour change days of week *********/
daysOfWeek.forEach(function(day) {
    const dayElement = document.getElementById(day);
    
    dayElement.addEventListener("click", function() {
        if (!dayElement.classList.contains("clicked")) {
            dayElement.classList.add("clicked");
            dayCounter++;
        } else {
            dayElement.classList.remove("clicked");
            dayCounter--;
        }

        calculate();
    });
});

/********* clear days *********/
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function() {
    daysOfWeek.forEach(function(day) {
        const dayElement = document.getElementById(day);
        dayElement.classList.remove("clicked");
    });

    dayCounter = 0;
    calculate();
});

/********* change rate *********/
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");

halfButton.addEventListener("click", function() {
    dailyRate = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculate();
});

fullButton.addEventListener("click", function() {
    dailyRate = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculate();
});

/********* calculate *********/
function calculate() {
    const calculatedCost = dayCounter * dailyRate;
    document.getElementById("calculated-cost").innerText = calculatedCost;
}
