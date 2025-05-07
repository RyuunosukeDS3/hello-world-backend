<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
</p>

<h1 align="center">Hello World Backend – DevSecOps Edition</h1>

<p align="center">
  <a href="https://github.com/your-org/hello-world-backend/actions/workflows/main.yml">
    <img src="https://github.com/ryuunosukeds3/hello-world-backend/actions/workflows/main.yml/badge.svg" alt="CI Status" />
  </a>
  <a href="https://sonarcloud.io/project/your_project_key">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=hello-world-backend&metric=alert_status" alt="Quality Gate" />
  </a>
  <a href="https://hub.docker.com/r/your-org/hello-world-backend">
    <img src="https://img.shields.io/docker/pulls/your-org/hello-world-backend" alt="Docker Pulls" />
  </a>
</p>

---

## 🛡️ Overview

This project demonstrates a secure and automated CI/CD pipeline for a NestJS backend application, integrating DevSecOps practices such as:

* **Code Quality and Security Analysis**: Utilizing SonarCloud for static code analysis.
* **Dependency and Container Scanning**: Employing Trivy to scan for vulnerabilities in both the filesystem and Docker images.
* **Automated Testing**: Running unit and end-to-end tests with coverage reports.
* **Efficient Builds**: Caching dependencies to speed up build times.
* **Artifact Management**: Sharing build artifacts across workflow jobs.

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v22.x
* [Yarn](https://yarnpkg.com/)
* [Docker](https://www.docker.com/)

### Installation

```bash
yarn install
```

---

## 🧪 Running the Application

### Development

```bash
yarn start:dev
```

### Production

```bash
yarn build
yarn start:prod
```

---

## ✅ Testing

### Unit Tests

```bash
yarn test
```

### End-to-End Tests

```bash
yarn test:e2e
```

### Test Coverage

```bash
yarn test:cov
```

Coverage reports are generated in the `coverage/` and `coverage-e2e/` directories and are uploaded as artifacts in the CI pipeline for SonarCloud analysis.

---

## 🐳 Docker

### Build Docker Image

```bash
docker build -t hello-world-backend:latest .
```

### Run Docker Container

```bash
docker run -p 3000:3000 hello-world-backend:latest
```

---

## 🔐 Security Scanning

### Filesystem Scan with Trivy

```bash
trivy fs .
```

### Docker Image Scan with Trivy

```bash
trivy image hello-world-backend:latest
```

These scans are integrated into the CI pipeline to ensure that vulnerabilities are detected early.

---

## 📈 Continuous Integration and Deployment

The CI/CD pipeline is defined in `.github/workflows/main.yml` and includes the following jobs:

* **Lint**: Checks code formatting and style.
* **Build**: Compiles the NestJS application.
* **Test**: Runs unit and end-to-end tests with coverage.
* **Docker**: Builds and saves the Docker image.
* **Trivy FS**: Scans the filesystem for vulnerabilities.
* **Trivy Image**: Scans the Docker image for vulnerabilities.
* **SonarCloud**: Performs static code analysis and uploads coverage reports.

Artifacts such as the build output (`dist/`) and coverage reports are shared between jobs using GitHub Actions' artifact storage.

---

## 📊 SonarCloud Integration

Static code analysis is performed using SonarCloud. The configuration is defined in the `sonar` job within the GitHub Actions workflow. It analyzes both the source code and test coverage to provide insights into code quality and security.

---

## 🧰 Tools and Technologies

* [NestJS](https://nestjs.com/)
* [SonarCloud](https://sonarcloud.io/)
* [Trivy](https://aquasecurity.github.io/trivy/)
* [GitHub Actions](https://github.com/features/actions)
* [Docker](https://www.docker.com/)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
