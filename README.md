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
