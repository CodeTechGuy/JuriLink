# Full Stack Lawyers Appointment Platform with Next JS, Neon, Tailwind, Vonage, Shadcn UI Tutorial 🔥🔥


# JuriLink ⚖️

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Node](https://img.shields.io/badge/Node-v18%2B-success)
![NeonDB](https://img.shields.io/badge/Database-NeonDB-green)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-blue)
![Next JS](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Vonage Video](https://img.shields.io/badge/Video%20API-Vonage-F21E3E?style=for-the-badge&logo=vonage&logoColor=white)

---
# Live Working Link  

Project Live Link: [Live Link]([https://juri-link.vercel.app/])


---
## 📚 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Run the Application](#run-the-application)
- [Built With](#️-built-with)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## ⚖️ Project Overview
**JuriLink** is a centralized **online appointment booking platform** connecting clients directly with legal service providers.

It aims to solve the problem of disorganized legal resources and inefficient client-provider matching by offering a searchable, intuitive platform that simplifies collaboration and ensures fast access to authoritative jurisdictional links and **streamlines the appointment scheduling process**.

---


### ✨ Key Features

  * **Jurisdictional Tagging**: Automatically categorize links by country, state, and court level for fast filtering.
  * **Citation Tracker**: Maintain a history of how and where links have been cited within the platform.
  * **Role-Based Access**: Secure private collections of links for specific research teams or firms.
  * **Link Health Monitoring**: Regularly check the validity and status of stored external URLs to prevent dead links.
  * **Advanced Full-Text Search**: Quickly find relevant links and associated metadata using powerful, indexed search algorithms.

-----

<img width="440" height="642" alt="Image" src="https://github.com/user-attachments/assets/ee11ea2d-783c-4f7b-9d57-779dad48cfb9" />

<img width="440" height="642" alt="Image" src="https://github.com/user-attachments/assets/53f378ad-fb2b-45ae-9544-34ba50116df6" />

<img width="3131" height="1755" alt="Image" src="https://github.com/user-attachments/assets/cccc2839-e1ba-48d9-86a1-250141fb340c" />

<img width="3173" height="1741" alt="Image" src="https://github.com/user-attachments/assets/b6479458-ae0b-4b67-8baf-11ba30bdc1a4" />


-----

### 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

You will need the following software installed:

  * **Language/Runtime**: Node.js - v18.x or later
  * **Database**: NeonDB 
  * **Video Call Api**: Vonage
  * **Other tool**: Git

#### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/CodeTechGuy/JuriLink.git
    cd JuriLink
    ```

2.  **Install dependencies**:

    ```bash
    # This installs both frontend and backend dependencies
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your configuration details.

    ```
    # Example .env content
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= [YOUR_KEY]
    CLERK_SECRET_KEY= [YOUR_SECRET_KEY]
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

    NEXT_PUBLIC_VONAGE_APPLICATION_ID= [VIDEO_CALL_API]
    VONAGE_PRIVATE_KEY=lib/private.key

    DATABASE_URL= [DATABASE_STRING]


    ```

4.  **Run the application**:

    ```bash
    # This command typically runs both the backend server and starts the frontend client.
    npm run dev
    ```

    The application should now be running locally at `http://localhost:3000`.

-----

### 🛠️ Built With

| Category | Technology |
| :--- | :--- |
| **Frontend Framework/Library** | React , Next.js |
| **Backend Framework/Library** | Express.js , Node |
| **Database** | NeonDB |
| **Styling/CSS Framework** | Tailwind CSS |

-----

### 🤝 Contributing

We welcome contributions\! If you have suggestions for improvement, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request


-----


### 📧 Contact


Project Link: [https://github.com/CodeTechGuy/JuriLink](https://github.com/CodeTechGuy/JuriLink)

Created by VISHAL PRAJWAL S as part of a Capstone project.
