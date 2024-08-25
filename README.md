# GitHub Clone Project
<!-- subtitle -->
A modern, responsive GitHub clone built with React and GraphQL

## Overview

This project is a GitHub clone built using modern web technologies to mimic the core features of GitHub, such as viewing user profiles, repositories, and other essential functionalities. The project aims to provide a seamless and responsive user experience similar to GitHub.


## Features

- User profile viewing
- Repository listing
- Search functionality
- Responsive design

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (v6 or later)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/salskhal/github-react-clone
   cd github-clone
2. **Install Dependencies:**
   ```bash
   npm install
   # or if you use Yarn
   yarn install
3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add the following environment variables:
   ```bash
   VITE_GITHUB_API_URL=https://api.github.com/graphql
   VITE_GITHUB_ACCESS_TOKEN=YOUR_GITHUB_ACCESS_TOKEN
   ```
   Replace `YOUR_GITHUB_ACCESS_TOKEN` with your GitHub access token. You can generate a new access token by following the instructions [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). 
4. **Start the development server:**
   ```bash
    npm run dev
    # or if you use Yarn
    yarn dev
5. **Open the browser and navigate to `http://localhost:5173`**

## Technologies Used

- [React](https://reactjs.org/) - Frontend library for building user interfaces 
- [GraphQL](https://graphql.org/) - Query language for APIs and runtime for executing queries 
- [Apollo Client](https://www.apollographql.com/docs/react/) - State management library for React applications 
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapidly building custom designs 
- [Vite](https://vitejs.dev/) - Build tool that aims to provide a faster and leaner development experience for modern web projects
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript
- [Zustand](https://zustand.surge.sh/) - State management library for React applications
- [React Router](https://reactrouter.com/) - Declarative routing for React applications
- [GitHub GraphQL API](https://docs.github.com/en/graphql) - API for querying GitHub data using GraphQL


## Author

- **Salman-Yusuf Khalid Olaniyi** - [@salskhal](https://twitter.com/salskhal)


## Contributing

Contributions are welcome! To contribute to the project, follow these steps:

1. Fork the project
2. Create a new branch (`git checkout -b feature/feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/feature-name`)
6. Create a new Pull Request


## Contact
Kindly contact me on :email: **olaniyisal@gmail.com**. You can review **[my resume here](https://docs.google.com/document/d/1JhxffbsPiHQ_UABcNNrjR_w9DXrPmdP0i12QqHxBWbM/edit?usp=sharing)**. :nerd_face:. Thank you


