# Calculator - to-do list 

1)
** start by creating functions for the following items and testing them in your browser’s console.
-add (DONE)
-subtract (DONE)
-multiply (DONE)
-divide (DONE)

2) (DONE)
** A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later. 

3) (DONE)
** Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

4) (DONE)
** Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
Do not worry about wiring up the JS just yet.
There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
Add a “clear” button.
# I've added tab navigation, this should be added to the README notes when compeleted. i need to add this to other projects to ensure that their all help with accessibility.

5) (DONE)
** Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
# an array/s that can be reset every time the clear button is pressed?
# I need to make the buttons work in the back end too
# the values (inlcucing the operators) should be seen at the top of the calculator so that the user can their calculation 
# only the numbers allowed can be pressed


6) 
** Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
        - You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
        - This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

# I need to assign the the equals button and keys to the calcOperation function.
# I then need to pass the value stored in the variables into the functions 
# then once the function has run, thee updateDisplay function should show the result 

7)
Gotchas: watch out for and fix these bugs if they show up in your code:
Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.
Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).
You should round answers with long decimals so that they don’t overflow the screen.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

# ensure that the calculator is able complete calculation with multiple the figures. I've seen some of the popular examples online not able to do this. it need to be fully functional before publishing it to TOP