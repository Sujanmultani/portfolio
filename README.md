# Sujan Multani — Developer Portfolio

A modern, high-fidelity developer portfolio website designed and optimized to showcase professional credentials, full-stack web platforms, and native Android applications.

Featuring a fast, responsive user interface with rich aesthetics, glassmorphism card panels, dynamic Framer Motion animations, a custom mouse cursor, and full-stack contact submissions with spam honeypot filters.

## Tech Stack
- **Frontend**: React (v18), Vite, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend**: Node.js, Express, Nodemailer, Resend API
- **Database**: MongoDB Atlas, Mongoose

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   cd portfoliyo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Navigate to the `server/` subdirectory and install backend dependencies:
   ```bash
   cd server
   ```
   ```bash
   npm install
   ```
   *Note: The `server/` folder is a separate backend component. For detail-oriented instructions regarding environment configurations, see the dedicated [server/README.md](file:///c:/Users/sujan/OneDrive/Desktop/portfoliyo/server/README.md).*

### Running Locally
To launch both the frontend dev server and the backend Express/MongoDB server concurrently:
```bash
npm run dev:all
```
- Frontend will be available at: [http://localhost:5173/](http://localhost:5173/)
- Backend will be available at: [http://localhost:5000/](http://localhost:5000/)

### Production Build
To compile the optimized production bundle:
```bash
npm run build
```

---

**Live**: [Add live URL once deployed]
