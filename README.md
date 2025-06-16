
# 🎮 Netflix-DevOps Clone - CI/CD, Monitoring, and Secure Deployment on AWS

This project is a **DevOps-focused Netflix Clone** built to showcase modern cloud-native deployment techniques using:

- Docker & Docker Compose  
- Jenkins for CI/CD  
- Prometheus & Grafana for monitoring  
- Node.js backend, React frontend  
- AWS EC2 hosting  
- Secure deployment with NGINX and optional HTTPS  

It’s a full pipeline project designed for DevOps engineers who want to practice real-world automation, observability, and production-grade deployment practices.

---

## 🔍 Project Goals

- Build and containerize a full-stack app (frontend + backend)
- Automate CI/CD pipeline with Jenkins
- Monitor the application using Prometheus and Grafana
- Deploy securely on an AWS EC2 instance using Docker Compose
- Apply DevSecOps basics and observability practices

---

## 🧱 Tech Stack

| Layer        | Tools Used                                  |
|--------------|----------------------------------------------|
| Frontend     | React, TMDB API, styled components           |
| Backend      | Node.js, Express, REST API                   |
| CI/CD        | Jenkins, GitHub Webhooks, SSH Credentials    |
| Monitoring   | Prometheus, Grafana, Custom Node Exporters   |
| Container    | Docker, Docker Compose                       |
| Cloud Infra  | AWS EC2 (Linux), NGINX    |

---

## 🧱 Project Structure

```bash
netflix-devOps/
├── backend/               # Node.js Express API
├── frontend/              # React-based frontend using TMDB
├── docker-compose.yml     # Service orchestration
├── jenkins/               # Jenkins pipeline & job configs
├── monitoring/            # Prometheus, Grafana, alert rules
│   ├── prometheus.yml
│   ├── grafana/
│   └── alertmanager/
└── README.md              # Project documentation
```

---

## ✨ How to Run It

### 1. Clone the project

```bash
git clone https://github.com/NazBilgic/netflix-devOps.git
cd netflix-devOps
```

### 2. Start the application locally

```bash
docker-compose up --build
```

This spins up:

- `frontend`: React app with TMDB movies  
- `backend`: REST API server  
- `prometheus`: for monitoring  
- `grafana`: for dashboarding  

---

## 🤖 Jenkins CI/CD

Jenkins automatically builds and deploys the app when you push changes.

### What it does:

- Builds backend and frontend Docker images  
- SSHs into EC2 and pulls latest code  
- Restarts the containers with new images  

> SSH Key ID used in Jenkins: `jenkins-github-key` (stored securely as Jenkins credentials)

---

## 📊 Monitoring with Prometheus & Grafana

- Prometheus scrapes custom metrics from backend  
- Grafana visualizes app performance and error rates  
- Alertmanager configured for HTTP 500 errors

To access dashboards:

```
http://<your-ec2-ip>:3000  # Grafana (default login: admin/admin)
http://<your-ec2-ip>:9090  # Prometheus
```

---

## 🔐 Security (Optional)

- NGINX reverse proxy setup planned for HTTPS with Let's Encrypt
- Basic auth or token-based access possible for backend

---

## 🧪 Observability Features

- Custom `/metrics` endpoint in backend exposes:
  - Request count
  - HTTP status codes
  - Response time
- Prometheus scrapes every 15s and stores time-series data
- Grafana panels include error alerts and usage trends

---

## 🌍 Live Demo (Optional)

Deployed on AWS EC2:  
**http://<your-ec2-ip>:3000** (Grafana)  
**http://<your-ec2-ip>:3001** (Frontend)  
**http://<your-ec2-ip>:5000** (Backend API)

---

## 📌 Future Improvements

- Add HTTPS with Let's Encrypt  
- Integrate Slack/Email alerts in Alertmanager  
- Publish Docker images to Docker Hub  
- Terraform the entire infrastructure

---

## 👩‍💻 Author

**Naz Bilgic**  
AWS DevOps Engineer | Cloud Enthusiast  
📍 Based in London  
🔗 [GitHub: @NazBilgic](https://github.com/NazBilgic)
