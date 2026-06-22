# Portfolio Backend Server

A lightweight Express server for handling contact form submissions securely via Nodemailer.

## Setup Instructions

1. Navigate to the `server` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file from the example template:
   ```bash
   cp .env.example .env
   ```
4. Open the `.env` file and replace the placeholder fields with your SMTP details.
   - **IMPORTANT NOTE**: For Gmail, `EMAIL_PASS` must be a **16-character Google "App Password"**, not your normal Gmail login password. You can generate one under Google Account settings > Security > 2-Step Verification (must be enabled) > App Passwords.
5. Run the server:
   - For development (with hot-reloading):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

The server runs on `http://localhost:5000` by default. Requests to `/api` from the Vite development server are automatically proxied there.
