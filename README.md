# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw/hub/credit-card-form-using-plain-js-and-tailwind-css-69RGGSAt_R
- Live Site URL: https://glowing-tiramisu-25966b.netlify.app/

## My process

### Built with

- Plain JavaScript
- Tailwind CSS
- Flexbox

### What I learned

* Set up project with parcel and tailwind [source](https://tailwindcss.com/docs/guides/parcel)
* Don't override the font size, this leads to a lot of custom classes in tailwind like `mb-[2.6rem]`
  ```
  html {
      font-size: 62.5%; /* 10px */
  }
  ```
* Make a border with color gradient
  ```css
  .form-input:active,
  .form-input:focus,
  .form-input:hover,
  .form-input:not(:placeholder-shown) {
      background:
              linear-gradient(white, white) padding-box,
              linear-gradient(to bottom, #6348FE, #610595) border-box;
      opacity: 1;
      border: 1px solid transparent;
  }
  ```

### Continued development

* Tailwind CSS

## Author

- GitHub - [movileanuv](https://github.com/movileanuv/)
- Frontend Mentor - [@movileanuv](https://www.frontendmentor.io/profile/movileanuv)
