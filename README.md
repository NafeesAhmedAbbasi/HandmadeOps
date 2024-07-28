# Digital Marketplace Assistance Tool (DMS)

A digital marketplace assistant tool is a versatile solution designed to help online e-commerce platforms manage daily operations comprehensively and address current marketplace challenges. 
The ultimate goal is to fully automate key business operations while integrating and managing existing e-commerce platforms using digital assistance tools.

## Project Structure

├── packages
│ ├── backend # Express-based Node.js backend
│ └── webapp # React frontend

## Features

- Order Management
- Vendor Management
- Shipping Management
- Customer Management
- Employee Management
- Financial Reporting
- User Management
- AI Integration for Automated Email Replies
- Integration Testing

## Technology Stack

- **Frontend**: React, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Testing**: Playwright, Jest
- **AI Integration**: ChatGPT 3.5 or LLaMA
- **UI Controls and Theme**: Material-UI or similar library
- **Project Management**: GitHub, Scrum
- **Package Manager**: Yarn

## Prerequisites

- **Node.js** (>=12.x, with npm >=6.x or yarn >=1.x)
- **Visual Studio Code** (for debugging)

## Installation

### Clone the Repository

First, clone the repository and navigate into the project directory:

```bash
    git clone https://github.com/NafeesAhmedAbbasi/digital-marketplace-assistance-tool.git
    cd digital-marketplace-assistance-tool
```

Install Dependencies
Install dependencies for the root project and each package:

```sh
    yarn install       # Install root dependencies
    yarn run install:all  # Install all dependencies for subprojects

```



## Run the Application

```sh
    yarn start      
```

Running Individually
If you need to run the backend or frontend individually:

Backend
```sh
    npm run start:backend
    This will start the backend server on http://localhost:8080.
```
Webapp (Frontend)

```sh
npm run start:webapp
This will start the frontend development server on http://localhost:3000.

```