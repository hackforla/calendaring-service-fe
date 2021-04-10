# Project title and description

Include a project description that explains **what** your project is and **why** it exists. Aim for no more than 3-5 concise sentences. For example, you might say:

## Introduction

Welcome to Hack for LA's host homes project! Hack for LA is a brigade of Code for America, and we're working with our partners at Safe Place for Youth (SPY) to enhance their host homes program. Together, we're developing a workflow management tool, digitizing key moments within SPY’s host homes initiative to make the process scaleable, reduce institutional bias, and effectively capture data.

## Overview

SPY’s host homes program is centered around housing young people, 18 - 25 years old. Their approach focuses on low-cost, community-driven intervention by matching a willing host with a guest or group of guests, providing a stable housing environment for youths who are experiencing homelessness and seeking stable housing.

## Home unite us links

https://www.hackforla.org/projects/home-unite-us
https://homeunite.us/

# How to run the project

To run the project, enter `cd app` from the project directory and run `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Technologies used

- This project is built in [React](https://reactjs.org/docs/getting-started.html)
- It heavily relies on the [MaterialUI](https://material-ui.com/) library for components and themed styles

### Material Theme guidelines

- The following HTML elements should not be used
  - `<h1>` - `<h6>`. Instead, use Material's `<Typography>`
- The following styles should not be defined at a a component level because they are defined in `theme.js`
  - Typography colors (the `<Typography>` accepts a `color=""` prop)
  - Typography sizes (the `<Typography>` accepts a `variant={insert h1-6}` prop)
  - Icon colors (Material icons accept a `color=""` prop)

### Branching

- Create a branch off of main and name it according to the Jira ticket (run `git checkout -b CS-6`)
- Push this branch to the remote

### Working with pull requests and reviews

- When you are finished building the Jira ticket, submit a PR of your branch against `main`. 
- I will look at it, and leave some comments
- If any of them are confusing please let me know.
- Once your PR is approved, I will merge it to `main`

### Licensing

Include details about the project's open source status.

_this readme file sourced from [Jessica Sand](http://jessicasand.com/other-stuff/just-enough-docs/)_
