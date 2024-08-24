
# AutomateIQ

AutomateIQ is a cutting-edge automation platform designed to streamline workflows, improve efficiency, and enhance productivity. Built with a modern tech stack, AutomateIQ provides a powerful backend and a seamless frontend experience for handling complex automation tasks.
- **Deployed Link**: https://automateiq.vercel.app
## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Contact](#contact)

## Features
- **Task Automation**: Efficiently automate repetitive tasks.
- **Scalable Architecture**: Designed to handle large-scale automation with ease.
- **Secure Authorization**: JWT-based authentication and authorization.
- **Real-Time Processing**: Kafka for robust queue management.
- **Modern UI**: Built with React and Next.js for a responsive and dynamic user experience.

## Tech Stack

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Kafka**: Distributed streaming platform for real-time data processing.
- **JWT**: Secure token-based authentication and authorization.
- **Postgres**: Relational database management system.
- **Prisma**: Next-generation ORM for working with databases.
- **Docker**: Containerization platform to simplify deployment and scaling.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.

## Getting Started
Follow these steps to get AutomateIQ up and running on your local machine.

### Prerequisites
- **Node.js**: Version 14.x or higher.
- **Docker**: Ensure Docker is installed and running.
- **Kafka**: Install Kafka or use a managed Kafka service.

### Installation

1. **Clone the Repository**
    \`\`\`bash
    git clone https://github.com/Rish-it/AutomateIQ.git
    cd AutomateIQ
    \`\`\`

2. **Set Up Environment Variables**
    - Create a \`.env\` file in the root directory.
    - Add the necessary environment variables as per the \`.env.example\` file.

3. **Install Backend Dependencies**
    \`\`\`bash
    cd backend
    npm install
    \`\`\`

4. **Install Frontend Dependencies**
    \`\`\`bash
    cd ../frontend
    npm install
    \`\`\`

5. **Start Docker Containers**
    - Make sure Docker is running and execute:
    \`\`\`bash
    docker-compose up -d
    \`\`\`

6. **Run the Backend**
    \`\`\`bash
    cd backend
    npm start
    \`\`\`

7. **Run the Frontend**
    \`\`\`bash
    cd ../frontend
    npm run dev
    \`\`\`
 
## Configuration
AutomateIQ is highly configurable via environment variables and configuration files.

### Environment Variables
- **JWT_SECRET**: Secret key for JWT.
- **DATABASE_URL**: Connection string for the Postgres database.
- **KAFKA_BROKER**: Kafka broker URL.
- **PORT**: Port number on which the backend server runs.

### Docker Configuration
Docker Compose is used to manage containers for the backend, Postgres, and Kafka. The configuration can be found in the \`docker-compose.yml\` file.


## Contact
For questions, suggestions, or contributions, feel free to reach out:

**Rishit**
- GitHub: [Rish-it](https://github.com/Rish-it)
- Email: [rishitsharma2001@gmail.com](mailto:rishitsharma@gmail.com)

---

*AutomateIQ - Automating the Future.*
