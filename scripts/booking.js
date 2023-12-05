/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const HALF_DAY_RATE = 20;
const FULL_DAY_RATE = 35;

let costPerDay = FULL_DAY_RATE;
let daysSelected = 0;


// containers needed
const COST_CONTAINER = document.getElementById("calculated-cost");

// week buttons
const MONDAY_BUTTON = document.getElementById("monday");
const TUESDAY_BUTTON = document.getElementById("tuesday");
const WEDNESDAY_BUTTON = document.getElementById("wednesday");
const THURSDAY_BUTTON = document.getElementById("thursday");
const FRIDAY_BUTTON = document.getElementById("friday");

//now create an array of these buttons to make looping through them easier
const DAY_BUTTONS = [
    MONDAY_BUTTON,
    TUESDAY_BUTTON,
    WEDNESDAY_BUTTON,
    THURSDAY_BUTTON,
    FRIDAY_BUTTON
];

// day buttons
const FULL_DAY_BUTTON = document.getElementById("full");
const HALF_DAY_BUTTON = document.getElementById("half");

//clear button
const CLEAR_BUTTON = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

//build a function to set the days
const addDay = (event) => {
    let element = event.target;
    let prevClicked = element.classList.contains("clicked");

    //check if the element contains the 'clicked' class
    if (prevClicked) {
        daysSelected--;
        element.classList.remove("clicked");
    } else {
        daysSelected++;
        element.classList.add("clicked");
    }

    calculate();
};

//Add an eventlistener to the day buttons that calls the addDay function
for (let i = 0; i < DAY_BUTTONS.length; i++) {
    let currButton = DAY_BUTTONS[i];
    currButton.addEventListener("click", addDay);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearDays = () => {

    //reset the daysSelected to 0, and clear the clicked class from the day buttons
    daysSelected = 0;

    for (let i = 0; i < DAY_BUTTONS.length; i++) {
        let currButton = DAY_BUTTONS[i];
        currButton.classList.remove("clicked");
    }
    
    //recalculate, to ensure the rest of the page knows what is going on
    calculate();
};

//add an event listener to the clear-days button that calls clearDays
CLEAR_BUTTON.addEventListener("click", clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const changeRateToHalf = () => {

    //set the cost per day to the half day rate
    costPerDay = HALF_DAY_RATE;

    //set the half day to clicked, and the full day to not clicked
    HALF_DAY_BUTTON.classList.add("clicked");
    FULL_DAY_BUTTON.classList.remove("clicked");

    //recalculate
    calculate();
};


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const changeRateToFull = () => {

    //set the cost per day to the half day rate
    costPerDay = FULL_DAY_RATE;

    //set the full day to clicked and the half day to not clicked
    FULL_DAY_BUTTON.classList.add("clicked");
    HALF_DAY_BUTTON.classList.remove("clicked");

    //recalculate
    calculate();
};


//add event listeners to the two rate buttons
FULL_DAY_BUTTON.addEventListener("click", changeRateToFull);
HALF_DAY_BUTTON.addEventListener("click", changeRateToHalf);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const calculate = () => {
    let cost = daysSelected * costPerDay;

    COST_CONTAINER.innerHTML = cost;
};
