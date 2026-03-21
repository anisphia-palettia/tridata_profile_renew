module.exports = {
  apps: [
    {
      name: 'tridata-profile',
      script: 'bun',
      args: 'run start',      // Menjalankan perintah 'bun start'
      interpreter: 'none',    // Memberitahu PM2 untuk tidak menggunakan node sebagai default
      exec_mode: 'fork',      // Catatan: Bun saat ini paling stabil di mode fork dengan PM2
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};

