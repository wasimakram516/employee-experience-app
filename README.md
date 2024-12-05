# Employee Experience Machine App

The **Employee Experience Machine App** is a React-based platform for measuring and enhancing employee engagement and satisfaction. This app provides interactive components to gather user feedback dynamically and visually.

---

## Features

- **Interactive Components**:
  - Workload satisfaction visualized via drag-and-drop weights.
  - Engagement levels determined via a slider-controlled needle meter.
  - Energy levels tracked interactively.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Feedback**: Real-time updates and user-friendly interfaces.

---

## Tech Stack

- **Frontend**: React.js, Material-UI
- **Styling**: CSS, Material-UI
- **Assets**: Custom SVGs and images for visualization.
- **State Management**: React Hooks (`useState`, `useRef`).

---

## Installation and Setup

### Prerequisites

- **Node.js**: [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/wasimakram516/employee-experience-machine.git
   ```
2. Navigate to the project directory:
   ```bash
   cd employee-experience-machine
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Directory Structure

```plaintext
employee-experience-app/
│
├── public/                 # Public assets
│   ├── index.html          # Main HTML file
│   └── assets/             # Images, SVGs, and static assets
│
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── questions/      # Question-specific components
│   │   │   ├── EnergyLevel.js                # Energy level interaction
│   │   │   ├── Engagement.js                 # Engagement meter with slider
│   │   │   ├── ExpressYourself.js            # Employee feedback form
│   │   │   ├── MoodCheck.js                  # Mood tracking
│   │   │   ├── Recognition.js                # Recognition feedback module
│   │   │   ├── TeamDynamicsInsight.js        # Team dynamics insights
│   │   │   ├── WellnessPoll.js               # Employee wellness polling
│   │   │   ├── WorkEnvironmentFeedback.js    # Work environment feedback form
│   │   │   └── WorkloadSatisfaction.js       # Workload balance interaction
│   │   ├── Navbar.js        # Navigation bar
│   ├── App.js               # Main application entry
│   ├── index.js             # React entry point
│   ├── theme.js             # Theme customization
│   ├── styles/              # Global styles
│   ├── reportWebVitals.js   # Web Vitals reporting
│   ├── setupTests.js        # Testing setup
│
├── .gitignore              # Git ignore file
├── package.json            # Project configuration
├── package-lock.json       # Dependency lock file
└── README.md               # Project documentation
```

---

## Components Overview

### Navbar.js
- A navigation bar to switch between different components.

### Questions Components
- **EnergyLevel.js**:
  - Interactive module to track energy levels.
  - Utilizes drag-and-drop for dynamic feedback.
- **Engagement.js**:
  - A slider-controlled needle to measure engagement levels.
  - Real-time engagement level feedback (`Low`, `Moderate`, `High`).
- **ExpressYourself.js**:
  - Feedback form for employees to express their views.
  - Simple text-based inputs.
- **MoodCheck.js**:
  - A graphical representation of mood levels.
  - Drag-and-drop for mood tracking.
- **Recognition.js**:
  - Module for recognizing and appreciating colleagues.
  - Includes dropdowns and text areas.
- **TeamDynamicsInsight.js**:
  - A tool to measure and visualize team dynamics.
  - Charts and interactive elements for insight visualization.
- **WellnessPoll.js**:
  - Polling mechanism for employee wellness.
  - Multiple-choice polling with results summary.
- **WorkEnvironmentFeedback.js**:
  - Form-based feedback for improving the work environment.
  - Includes ratings and textual suggestions.
- **WorkloadSatisfaction.js**:
  - Visual representation of workload satisfaction using drag-and-drop weights.
  - Dynamic balancing visualization.

---

## Deployment to GitHub Pages

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following scripts to `package.json`:
   ```json
   "homepage": "https://wasimakram516.github.io/employee-experience-machine",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the app:
   ```bash
   npm run deploy
   ```
4. Access your deployed app at:
   [https://wasimakram516.github.io/employee-experience-machine](https://wasimakram516.github.io/employee-experience-machine).

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Author

**Wasim Akram**  
GitHub: [@wasimakram516](https://github.com/wasimakram516)  
Email: [contact@wasimakram.com](mailto:contact@wasimakram.com)

---
