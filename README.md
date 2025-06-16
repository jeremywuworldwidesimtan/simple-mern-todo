# simple-mern-todo
Simple to-do list web app made using MERN stack with Vite for React and TailwindCSS for styling

## Requirements
You need to have MongoDB and Node.js installed to use this app

## Installation
1. Install the required software if you haven't done yet
2. Clone this repo
3. Run `npm install` to install node modules on both the root directory (for Express) and the client directory (for React with Vite)
4. Create a .env file with your MongoDB URI (default `mongodb://127.0.0.1:27017/todoapp`) or MongoDB Atlas URI if you use Atlas.
5. Run `npm run dev` from the root directory on one terminal for Express API (make sure that your MongoDB service is running)
6. Run `npm run dev` from the client directory on another concurrent terminal for React UI (make sure that your MongoDB service is running)

## Note
This is just a barebones to-do-list app where it just works and the design is not polished yet. Feel free to create a feature branch and submit a PR if you want to make improvements and merge it for me.

## Upcoming features
- Better UI with shared components
- Responsive
- RHF for form
- HeadlessUI
- Delete confirmation
- User authentication