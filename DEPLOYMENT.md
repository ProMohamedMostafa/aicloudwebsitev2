# Deployment Guide — AI Cloud

## Quick start (production server)

### 1. Server requirements
- Ubuntu 22.04+ (or Debian 12+)
- Node.js 20 LTS
- Nginx
- PM2
- Certbot (Let's Encrypt SSL)

### 2. First-time server setup

```bash
# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx & Certbot
sudo apt install -y nginx certbot python3-certbot-nginx

# Create app directory
sudo mkdir -p /var/www/aicloud
sudo chown $USER:$USER /var/www/aicloud
```

### 3. Clone & configure

```bash
cd /var/www/aicloud
git clone https://github.com/YOUR_ORG/YOUR_REPO.git .

# Create your environment file (never commit this)
cp .env.example .env.local
nano .env.local   # fill in NEXT_PUBLIC_API_BASE_URL
```

### 4. Build & start

```bash
npm ci --omit=dev
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup   # follow the printed command to enable auto-start
```

### 5. Configure Nginx

```bash
# Copy the config (update yourcompany.com inside first)
sudo cp nginx/aicloud.conf /etc/nginx/sites-available/aicloud
sudo ln -s /etc/nginx/sites-available/aicloud /etc/nginx/sites-enabled/

# Add rate-limit zones to the http{} block in /etc/nginx/nginx.conf:
# limit_req_zone $binary_remote_addr zone=general:10m rate=20r/s;
# limit_req_zone $binary_remote_addr zone=api:10m    rate=5r/m;

sudo nginx -t && sudo systemctl reload nginx
```

### 6. SSL certificate (free via Let's Encrypt)

```bash
sudo certbot --nginx -d yourcompany.com -d www.yourcompany.com
# Certbot auto-renews — verify with:
sudo certbot renew --dry-run
```

### 7. Firewall

```bash
sudo ufw allow 22/tcp     # SSH (change if you use a custom port)
sudo ufw allow 80/tcp     # HTTP (redirects to HTTPS)
sudo ufw allow 443/tcp    # HTTPS
sudo ufw deny 3000        # block direct Next.js port from outside
sudo ufw enable
```

### 8. Automated deployments (CI/CD)

Push to `main` → GitHub Actions builds and deploys automatically.

Add these secrets in GitHub → Settings → Secrets → Actions:
- `SSH_HOST` — server IP
- `SSH_USER` — deploy user
- `SSH_PRIVATE_KEY` — SSH private key
- `SSH_PORT` — SSH port (usually 22)
- `NEXT_PUBLIC_API_BASE_URL` — backend API URL

---

## Security checklist before going live

- [ ] `NEXT_PUBLIC_API_BASE_URL` is set in your server environment
- [ ] `.env.local` / `.env.production` are NOT in git (check `.gitignore`)
- [ ] SSL certificate is active (https:// works, http:// redirects)
- [ ] Firewall is enabled, port 3000 is blocked externally
- [ ] Nginx rate limiting zones are configured
- [ ] PM2 is set to auto-start (`pm2 startup` completed)
- [ ] Backend `/api/message` endpoint has its own rate limiting

---

## Useful commands

```bash
pm2 status              # check app status
pm2 logs aicloud        # live logs
pm2 reload aicloud      # zero-downtime reload after deploy
sudo nginx -t           # test nginx config
sudo systemctl reload nginx
sudo certbot renew      # manual SSL renewal (auto runs twice daily)
```
