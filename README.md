# 🚀 Containerized Web Application with Docker

A production-ready containerized web application demonstrating the use of **Docker and Docker Compose** to run a frontend, backend, and database in isolated environments with proper networking and volume management.

---

## 📂 Project Structure

Containerisation-and-devops-Assignment_1/
├── backend/                  # Backend service  
├── database/                 # Database setup  
├── Screenshots_Assignment/   # Output screenshots  
├── docker-compose.yml        # Multi-container orchestration  
├── index.html                # Frontend  
├── .dockerignore  
├── Docker_Project_Report.pdf  
└── README.md  

---

## ⚡ Quick Start

### 🔧 Prerequisites
- Docker installed  
- Docker Compose installed  
- Git installed  

---

### 1️⃣ Clone the Repository
git clone https://github.com/vedantpare0203/Containerisation-and-devops-Assignment_1.git  
cd Containerisation-and-devops-Assignment_1  

---

### 2️⃣ Build and Run Containers
docker-compose up --build  

---

### 3️⃣ Verify Running Containers
docker ps  

---

### 4️⃣ Access Application
Open in browser:  
http://localhost:3000  

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Home route |
| GET    | /health  | Health check |
| GET    | /data    | Retrieve data |
| POST   | /data    | Add new data |

---

## 🧪 Testing Commands

### Check running containers
docker ps  

### Stop containers
docker-compose down  

### Restart containers
docker-compose up -d  

---

## 💾 Volume Persistence Test

### 1. Add data
curl -X POST http://localhost:3000/data \
-H "Content-Type: application/json" \
-d '{"text":"Testing persistence"}'

### 2. Stop containers
docker-compose down  

### 3. Restart containers
docker-compose up -d  

### 4. Verify data
curl http://localhost:3000/data  

---

## 🌐 Network

Docker Compose automatically creates a network allowing communication between containers.

### Inspect network
docker network inspect containerisation-and-devops-assignment_1_default  

---

## 📸 Screenshots

![Output](Screenshots_Assignment/your-image.png)

---

## ⚙️ Build Optimization

- Lightweight Docker images  
- Efficient layering  
- Faster deployment  
- Reduced image size  

---

## 📊 Key Features

- Multi-container architecture  
- Backend + Database integration  
- Docker Compose orchestration  
- Persistent storage using volumes  
- Scalable and portable setup  

---

## 🎯 Learning Outcomes

- Learned Docker fundamentals  
- Understood container lifecycle  
- Implemented multi-container applications  
- Worked with Docker networking  
- Managed volumes and persistence  

---

## 📄 Report

Refer to `Docker_Project_Report.pdf` for detailed explanation and implementation.

---

## 📄 Conclusion

This project demonstrates how Docker simplifies deployment by creating a consistent and portable environment. It eliminates dependency issues and improves scalability.

---

## 👨‍💻 Author

Vedant Pare
