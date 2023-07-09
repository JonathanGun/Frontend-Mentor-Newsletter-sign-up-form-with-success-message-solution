# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

This is my attempt to learn [Svelte](https://svelte.dev/) with [SvelteKit](https://kit.svelte.dev/) framework and also enhancing my [TailwindCSS](https://tailwindcss.com/) skill.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

<!-- TODO -->

## My process

### Built with

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Playwright](https://playwright.dev/)
- [Vite](https://vitejs.dev/)
- Mobile-first workflow

### What I learned

## SvelteKit Routing

SvelteKit has filesystem-based router. To create a route, you only need to create `+page.svelte` file under `src/route/path/to/your/route` directory. For example

* `src/routes/about/+page.svelte` will define `/about` route

## Svelte Syntax

Svelte is superset of HTML. It means, any HTML file is a valid Svelte file, but not the other way around. This makes learning curve to start Svelte from learning HTML is incredibly easy.

## Svelte REPL

When in doubt, you can launch [Svelte REPL](https://svelte.dev/repl/) online and test your Svelte code there. Lot of people shared their knowledge throught snippets using online Svelte REPL. This makes the community grows fast.

## Decomposing Components

We can decompose a page into smaller and reusable chunks / components. We can pass props to the component, make it reactive, and integrate with Svelte directives.

## Author

- [Jonathan Yudi](https://github.com/JonathanGun)
