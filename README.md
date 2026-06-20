# On My Grind

A React + Vite lab project inspired by Wordle where users guess the ingredient components of a Starbucks-style drink recipe. The app quizzes users on four drink categories: temperature, syrup, milk, and blendedness, then checks each answer for correctness based on a drinks JSON dataset.

## Project Overview

This lab focuses on building a React form from scratch, using state to track user input, importing JSON data, rendering dynamic answer choices, and validating guesses against a randomly selected drink recipe. The stretch work replaces radio-button selection with text inputs and adds validation so users can only submit values that match the allowed ingredient options.

## Features

### Required Features

- Display one drink at a time for the user to solve.
- Let the user choose one option for each of the four ingredient categories.
- Show the selected choice inside the answer box above each option list.
- Replace a previous selection when the user picks a new option in the same category.
- Check the submitted answer against the true recipe.
- Visually show which answers are correct or incorrect after submission.
- Load a new drink and clear previous inputs when the user clicks **New Drink**.

### Stretch Features

- Replace radio-button selection with text-box inputs.
- Validate typed answers so they must match the predefined ingredient choices.
- Alert or otherwise notify the user when typed input is not a valid option.

## Build Checklist

### Step 0: Set up

- [X] Create the app with `npm create vite@latest barista-app`.
- [X] Choose the React framework in JavaScript during setup.
- [X] Run `cd barista-app`.
- [X] Run `npm install`.
- [X] Run `npm run dev`.
- [X] Clean `App.jsx` by removing the starter return content.
- [X] Delete the unused Vite and React logo imports from `App.jsx`.

### Step 1: Create the form structure

- [X] Create a `components` folder inside `src`.
- [X] Create `BaristaForm.jsx` inside `src/components`.
- [X] Import `BaristaForm` into `App.jsx`.
- [X] Add a title container with the app heading `On My Grind`.
- [X] Add the subtitle text: `So you think you can barista? Let's put that to the test...`.
- [X] Render the `BaristaForm` component in `App.jsx`.
- [X] Add starter component code in `BaristaForm.jsx`.
- [X] Add a `form` element inside `BaristaForm`.
- [X] Add a `Check Answer` button with an `onCheckAnswer` click handler.
- [X] Add a `New Drink` button with an `onNewDrink` click handler.
- [X] Create empty arrow functions for `onCheckAnswer` and `onNewDrink`.
- [X] Add the `Hi, I'd like to order a` heading above the form.

### Step 2: Create dynamic inputs

- [ ] Create a state object called `inputs` using `useState` for `temperature`, `milk`, `syrup`, and `blended`.
- [ ] Create an `ingredients` object containing the possible answer choices for each category.
- [ ] Create `RecipeChoices.jsx` in the `components` folder.
- [ ] Pass props into `RecipeChoices` for `handleChange`, `label`, `choices`, and the current selected value.
- [ ] Use `.map()` inside `RecipeChoices` to render the answer choices.
- [ ] Render category sections for temperature, syrup, milk, and blended.
- [ ] Add an answer display box above each list of choices.
- [ ] Update parent state when the user selects a value.
- [ ] Ensure selecting a new option replaces the current answer shown in the box.

### Step 3: Import drinks and randomize a new drink

- [ ] Add `drinks.json` to the project.
- [ ] Import `drinks.json` into `BaristaForm.jsx`.
- [ ] Create state for `currentDrink`.
- [ ] Create state for `trueRecipe`.
- [ ] Create a `getNextDrink` function to pick a random drink from the JSON file.
- [ ] Set `currentDrink` to the selected drink name.
- [ ] Set `trueRecipe` to the selected drink ingredients.
- [ ] Reset all input values inside `onNewDrink`.
- [ ] Call `getNextDrink()` from `onNewDrink`.
- [ ] Render the current drink name in a `drink-container`.
- [ ] Add a visible `New Drink` button near the displayed drink.

### Step 4: Check answers

- [ ] Create state variables for ingredient correctness, one for each category.
- [ ] Reset correctness state values when a new drink loads.
- [ ] Compare `inputs.temperature` to `trueRecipe.temp` in `onCheckAnswer`.
- [ ] Compare `inputs.syrup` to `trueRecipe.syrup` in `onCheckAnswer`.
- [ ] Compare `inputs.milk` to `trueRecipe.milk` in `onCheckAnswer`.
- [ ] Compare `inputs.blended` to `trueRecipe.blended` in `onCheckAnswer`.
- [ ] Set each result state to values like `correct` or `wrong`.
- [ ] Attach the correctness state to each answer-space so CSS can change its visual style.

### Step 5: Add styling

- [ ] Change the form to use `className="container"`.
- [ ] Wrap each ingredient section in a `mini-container`.
- [ ] Style `.container` with Flexbox.
- [ ] Style `.mini-container` with Flexbox column layout.
- [ ] Add spacing and alignment so ingredient groups display cleanly.
- [ ] Style correct and wrong answer states with different background colors.
- [ ] Style `.answer-space` so it remains visible even when empty.
- [ ] Remove list bullets from answer choices.
- [ ] Add your own visual polish to the app.

### Step 6: Stretch feature – switch to text input

- [ ] Replace radio-button inputs in `RecipeChoices.jsx` with a text input.
- [ ] Keep the list of valid choices visible under the text box.
- [ ] Set the text input `name`, `value`, `placeholder`, `onChange`, and `className` props as described in the lab.
- [ ] Update the parent state from typed input the same way as before.

### Step 7: Stretch feature – validate typed input

- [ ] Add validation in `onCheckAnswer` to verify the typed value exists in the allowed list for that category.
- [ ] Use an alert or another visual method when the typed answer is not a valid option.
- [ ] Keep answer checking behavior working for valid inputs.
- [ ] Optionally restyle the `.textbox` class in `App.css`.

## Suggested README Sections to Customize

- Add screenshots or a GIF of the app in use.
- Include a short tech stack list: React, Vite, JavaScript, CSS.
- Link the project repository and deployed version if available.
- Add notes on what was most challenging during the lab.

## Tech Stack

- React  
- Vite  
- JavaScript  
- CSS  
- JSON data import  
