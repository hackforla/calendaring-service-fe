# Home Unite Us project

Welcome to Hack for LA's host homes project! Hack for LA is a brigade of Code for America, and we're working with our partners at Safe Place for Youth (SPY) to enhance their host homes program. Together, we're developing a workflow management tool, digitizing key moments within SPY’s host homes initiative to make the process scaleable, reduce institutional bias, and effectively capture data.

We're working with community non-profits who have a Host Home initiative to develop a workflow management tool to make the process scaleable (across all providers), reduce institutional bias, and effectively capture data.

Host Home programs are centered around housing young people, 18 - 25 years old. Their approach focuses on low-cost, community-driven intervention by matching a willing host with a guest or group of guests, providing a stable housing environment for youths who are experiencing homelessness and seeking stable housing.

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

- Create a branch off of main and name it according to the Jira ticket 
  - (For example if you want to create a new branch for Jira ticket CS-6, run `git checkout -b CS-6`)
- Push this branch to the remote
- Ensure that you create only one branch per Jira ticket

### Working with pull requests and reviews

- When you are finished building the Jira ticket, submit a PR of your branch against `main`, but do not merge it.
- I will look at it, and leave some comments.
- If any of them are confusing please let me know.
- Once your PR is approved, I will merge it to `main`

### Licensing

Include details about the project's open source status.

_this readme file sourced from [Jessica Sand](http://jessicasand.com/other-stuff/just-enough-docs/)_
