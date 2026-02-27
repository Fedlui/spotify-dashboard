// ┌─────────────────────────────────────────────────────────────────┐
// │  config.js — ARCHIVO SECRETO                                    │
// │  NO subir a GitHub — ya está en .gitignore                      │
// │  Crea este archivo LOCAL en la misma carpeta que el .html       │
// └─────────────────────────────────────────────────────────────────┘

window._APP_CONFIG = {

  // Tu Client ID de Spotify Developer Dashboard
  // developer.spotify.com/dashboard → tu app → Settings
  clientId: 'PEGA_TU_CLIENT_ID_AQUI',

  // Correos de Spotify de las personas autorizadas a usar la app.
  // Si dejas el arreglo vacío [], cualquier correo puede entrar.
  // Recuerda que también deben estar en User Management en Spotify Developer.
  allowedEmails: [
    'tu_correo@ejemplo.com',
    'profe@ejemplo.com',
    'papa@ejemplo.com',
  ],

};
