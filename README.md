# Netflix-Inspired DevOps Project: CI/CD, Monitoring & Secure Deployment on AWS

This project showcases a full DevOps lifecycle using a Netflix-style full-stack app. It demonstrates modern infrastructure automation, CI/CD, observability, and secure deployment practices in the cloud.

---

## Project Highlights

- Full-stack application: Node.js backend + React frontend (TMDB API)
- Containerized with Docker & orchestrated via Docker Compose
- CI/CD pipeline with Jenkins, GitHub Webhooks & SSH deployment
- Monitoring via Prometheus & Grafana with custom metrics and alerts
- Hosted on AWS EC2 (Linux)
- Secure deployment planned with NGINX and HTTPS

---

## Goals

- Build and containerize a production-ready app
- Automate deployment using Jenkins
- Monitor system health and app performance
- Secure and maintain infrastructure on AWS

---

## Tech Stack

| Layer        | Tools                                 |
|--------------|----------------------------------------|
| Frontend     | React, TMDB API                        |
| Backend      | Node.js, Express                       |
| CI/CD        | Jenkins, GitHub, SSH Keys              |
| Monitoring   | Prometheus, Grafana, Alertmanager      |
| Container    | Docker, Docker Compose                 |
| Infra        | AWS EC2, NGINX                         |

---

## Project Structure

```bash
netflix-devOps/
├── backend/               # Node.js API
├── frontend/              # React frontend using TMDB
├── docker-compose.yml     # Docker orchestration
├── jenkins/               # Jenkins jobs & pipeline
├── monitoring/            # Prometheus & Grafana configs
│   ├── prometheus.yml
│   ├── grafana/
│   └── alertmanager/
└── README.md
```

---

## Run Locally

```bash
git clone https://github.com/NazBilgic/netflix-devOps.git
cd netflix-devOps
docker-compose up --build
```

This will launch:
- Frontend (React + TMDB)
- Backend API (Node.js)
- Prometheus & Grafana for monitoring

---

## CI/CD Pipeline

Jenkins automatically builds and deploys on each push:

- Builds Docker images
- Connects to EC2 via SSH
- Pulls latest code and restarts containers

> SSH key used: `jenkins-github-key` (stored securely in Jenkins)

---

## Monitoring

- Prometheus scrapes metrics from the backend
- Grafana dashboards show usage, error rates, response time
- Alertmanager triggers notifications on HTTP 500 spikes

---

## Security (Planned)

- NGINX reverse proxy with optional HTTPS (Let’s Encrypt)
- Basic authentication and token-based access possible

---

## Observability

The backend exposes a `/metrics` endpoint with:
- Request count
- Status codes
- Response time

Prometheus scrapes every 15s, Grafana visualizes the trends.

---

## Future Improvements

- Add HTTPS with Let's Encrypt
- Integrate Slack/email alerts via Alertmanager
- Publish Docker images to Docker Hub
- Terraform the infrastructure

---

## About the Author

**Naz Bilgic**  
Cloud & DevOps Engineer | AWS Enthusiast  
Based in London  
GitHub: [@NazBilgic](https://github.com/NazBilgic)
