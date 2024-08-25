
# ZapFlow

ZapFlow is a cutting-edge automation platform designed to streamline workflows, improve efficiency, and enhance productivity. Built with a modern tech stack, ZapFlow provides a powerful backend and a seamless frontend experience for handling complex automation tasks.
- **Test Credentials **:- email: test@gmail.com
                          pass: test123
## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Screenshots](#Screenshots)
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
Follow these steps to get ZapFlow up and running on your local machine.

### Prerequisites
- **Node.js**: Version 14.x or higher.
- **Docker**: Ensure Docker is installed and running.
- **Kafka**: Install Kafka or use a managed Kafka service.

### Installation

1. **Clone the Repository**
2. 
    git clone https://github.com/Rish-it/ZapFlow.git
    cd ZapFlow
   
3. **Set Up Environment Variables**
4. 
    - Create a \`.env\` file in the root directory.
    - Add the necessary environment variables as per the \`.env.example\` file.

5. **Install Backend Dependencies**
6. 
    cd backend
    npm install

7. **Install Frontend Dependencies**
    
    cd ../frontend
    npm install

8. **Start Docker Containers**
    - Make sure Docker is running and execute:
    
    docker-compose up -d 
   
9. **Run the Backend**
 
    cd backend
    npm start
   
10. **Run the Frontend**
    cd ../frontend
    npm run dev
 
## Screenshots


![image](https://github.com/user-attachments/assets/c2598f7b-0420-4f41-bbe3-65f65883d64f)

![image](https://github.com/user-attachments/assets/0b843525-eb44-4587-9f94-af7d6f1aa9cc)


![image](https://github.com/user-attachments/assets/6e29c28f-6688-4b16-b89c-06c73486de62)



## Contact
For questions, suggestions, or contributions, feel free to reach out:

**Rishit**
- GitHub: [Rish-it](https://github.com/Rish-it)
- Email: [rishitsharma2001@gmail.com](mailto:rishitsharma@gmail.com)

---

*ZapFlow - Automating the Future.*
