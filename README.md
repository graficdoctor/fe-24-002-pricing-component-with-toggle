# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Gitub](https://github.com/graficdoctor/fe-24-002-pricing-component-with-toggle)
- Live Site URL: [Deployed on Netlify](https://magnificent-basbousa-ebe39d.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- [Centering grid items in an auto-fill container](https://stackoverflow.com/questions/49514794/centering-grid-items-in-an-auto-fill-container) - Something I've been bumping into regularly when using `auto-fit` for grid, is the grid no longer being centered. I usuasllu would look for work-arounds, but thought today that that was a silly solution and I should have a look at Stackoverflow. The solution is too straight-forward actually: `justify-content: center`.

```css
.cards-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(16.5rem, 20rem));
	justify-content: center;
	gap: 2rem;
	margin-inline: auto;
	margin-top: 4rem;
}
```

### Useful resources

- [Build a toggle button with only HTML and CSS](https://dev.to/danielpdev/html-css-only-toggle-button-598f) - I used this code to create my toggle.
- [CSS Demystified by Kevin Powell](https://www.example.com) - These price cards are exactly the example Kevin uses in the first chapter of his CSS Demystified course, talking about inheritance and custom variables. So I implemented his suggestion.

## Author

- Website - [Katrien Schuermans](https:/www.katriens.be)
- Frontend Mentor - [@graficdoctor](https://www.frontendmentor.io/profile/graficdoctor)
- Twitter - [@graficdoctor](https://www.twitter.com/graficdoctor)
