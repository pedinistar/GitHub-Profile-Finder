# GitHub Profile Finder

Search any GitHub username and see their profile and latest repositories.

[Live Demo](https://github-profile-finder-two-umber.vercel.app/) • [GitHub](https://github.com/pedinistar)

---

## What it does

Type a GitHub username, hit Search or press Enter. If the user exists you'll see their avatar, name, bio, follower count, and their 3 most recently updated repositories. If they don't exist you get a clear error message.

---

## Built with

- React + Vite
- Tailwind CSS
- GitHub REST API
- react-icons

---

## Features

- Live search with Enter key support
- Four UI states — empty, loading, not found, success
- Repos sorted by most recently updated using GitHub's API parameters
- Searched username saved separately so error message shows correctly even after input clears
- Responsive on mobile and desktop

---

## Run locally

```bash
git clone https://github.com/pedinistar/github-profile-finder
cd github-profile-finder
npm install
npm run dev
```

---

## How the code is structured

```
App.jsx — holds all state and the fetch logic
components/
  Header.jsx      — search bar
  EmptyState.jsx  — before any search
  LoadingState.jsx
  NotFound.jsx    — when user doesn't exist
  UserProfile.jsx — profile details
  ReposList.jsx   — repo cards container
  RepoCard.jsx    — single repo card
  Footer.jsx
```

App owns everything. It passes data down as props. No external state library needed.

---

Made by [Pedini Jayashree](https://github.com/pedinistar)

---

### About this project

This is a GitHub Profile Finder built in React. You type any GitHub username and it fetches their profile data from the GitHub public API and shows their avatar, bio, followers, and their three most recently updated repositories. I managed four different UI states — empty before search, loading while fetching, a not found state if the user doesn't exist, and success when data loads. I also handled a small bug where the searched username was getting cleared before the error message could show it, so I stored the searched username separately in its own state.

### What was the hardest part?

Managing the different states cleanly. I used a single status string — empty, loading, notfound, success — and conditionally rendered the right component based on that. Once I understood that pattern it became straightforward but getting there took some thought.

### Why did you use React instead of vanilla JS?

I actually built the original version in vanilla JS first. In that version I was manually updating the DOM everywhere — innerHTML, querySelector, all of it. Rebuilding it in React meant I just update state and React handles the DOM. The code became much cleaner and easier to read.

### How does the API call work?

I make two fetch calls. First one gets the user profile from api.github.com/users/username. If that returns a not found message I set the status to notfound and stop. If it succeeds I make a second call to get their repositories. I pass sort=updated&per_page=6 as query parameters so GitHub sends me the most recently updated repos directly instead of me sorting on the frontend.

### What would you add if you had more time?

A few things — a dark mode toggle, pagination for repositories so you can see more than 3, and maybe a compare feature where you put two usernames side by side. I'd also add a proper loading skeleton instead of just a spinner.
