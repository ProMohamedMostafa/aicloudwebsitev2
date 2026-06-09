// PM2 ecosystem file — keeps the Next.js process alive on your server
// Usage:
//   pm2 start ecosystem.config.js
//   pm2 save          (persist across reboots)
//   pm2 startup       (auto-start on server reboot)

module.exports = {
  apps: [
    {
      name: "aicloud",
      script: "npm",
      args: "start",
      cwd: process.env.APP_DIR || "/var/www/aicloud",
      instances: "max",               // use all CPU cores
      exec_mode: "cluster",           // cluster mode for load balancing
      autorestart: true,
      watch: false,                   // never watch in production
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "/var/log/pm2/aicloud-error.log",
      out_file: "/var/log/pm2/aicloud-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
