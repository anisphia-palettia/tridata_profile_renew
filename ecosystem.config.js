module.exports = {
  apps: [
    {
      name: 'tridata-profile',
      script: 'npm',
      args: 'start',
      instances: 'max',       // Menggunakan semua CPU core yang tersedia (Cluster Mode)
      exec_mode: 'cluster',   // Menjalankan mode cluster agar lebih stabil dan cepat
      autorestart: true,
      watch: false,           // Set ke true hanya jika ingin restart saat ada perubahan file
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001            // Sesuaikan port jika perlu
      }
    }
  ]
};
