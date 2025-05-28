# Personal Website

This project demonstrates a production-ready ReactJS app styled with Material UI, containerized using Docker, served via NGINX, deployed on an AWS EC2 instance with HTTPS enabled using Certbot SSL, and automated deployment with CircleCI.

- **Custom Domain**: [https://jerecfrank.com](https://jerecfrank.com)
- **EC2 Public URL**: [http://ec2-54-146-215-207.compute-1.amazonaws.com](http://ec2-54-146-215-207.compute-1.amazonaws.com)

> The custom domain uses SSL with HTTPS via Certbot + Nginx.
> The EC2 URL is available for direct access.
> 
---

## Stack

* **ReactJS** with **Material UI** for frontend UI development
* **Docker** for containerization and deployment
* **NGINX** to serve the built React static files
* **AWS EC2 (Ubuntu)** for hosting the app
* **Certbot (Let's Encrypt)** to provision free SSL certificates
* **CircleCI** for Continuous Integration and Continuous Deployment (CI/CD)
* **Firebase** for database (Cloud Firestore)

---

## Development

1. Environment variables:

```
REACT_APP_FIREBASE_KEY=
REACT_APP_FIREBASE_DOMAIN=
REACT_APP_FIREBASE_DB=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_BUCKET=
REACT_APP_FIREBASE_MSG_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

2. Install dependencies:

```bash
yarn install
```

3. Run locally with hot reload:

```bash
yarn start
```

---

## Docker

### Build and run the app locally using Docker

```bash
docker-compose up --build
```

## Deploying on AWS EC2

1. SSH into your EC2 instance:

```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

2. Copy build folder to EC2:

```bash
scp -i your-key.pem -r ./build ubuntu@your-ec2-ip:/home/ubuntu/app/
```

3. Build and run Docker container on EC2:

```bash
docker stop container-profile || true
docker rm container-profile || true
docker build -t profile .
docker run -d --name container-profile -p 80:80 profile
```

---

## SSL with Certbot (HTTPS)

On EC2 instance:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx

sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

- Ensure domain points to EC2 public IP (via DNS A record)  
- Ensure ports 80 and 443 are open in EC2 Security Group

---

## CircleCI Setup

### Environment Variables in CircleCI project settings:

- `EC2_HOST` — your EC2 instance IP or hostname  
- `EC2_USER` — typically `ubuntu`  
- `EC2_SSH_KEY` — private SSH key content (base64 encoded or as a file)

---

## Domain and DNS Setup

- Use your domain registrar to point domain A record to your EC2 IPv4 public address  
- Open ports 80 and 443 in your EC2 Security Group to allow HTTP/HTTPS traffic  

---

## License

This project is open source.

---

## Author

Built with ❤️ by Jerec Frank
