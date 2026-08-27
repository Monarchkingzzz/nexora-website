# Nexora — Modern Web Design & IT Solutions

Clean, modern, and client-friendly agency portfolio website for **Nexora**.

## 🚀 How to Deploy to Vercel

### Method 1: Instant Vercel CLI Deployment (Recommended)
In your terminal, navigate to this project folder and run:
```bash
npx vercel --prod
```
- When asked `Set up and deploy?`, enter `Y`.
- Select your Vercel account/scope.
- Choose a project name (e.g., `nexora-portfolio` or `nexora-tech`).
- Vercel will deploy your project and provide a live URL like `https://nexora-portfolio.vercel.app`.

### Method 2: Deploy via GitHub + Vercel
1. Create a new repository on [GitHub](https://github.com/new).
2. Push this repository:
   ```bash
   git remote add origin https://github.com/<your-username>/nexora-website.git
   git branch -M main
   git push -u origin main
   ```
3. Visit [vercel.com/new](https://vercel.com/new), click **Import**, and press **Deploy**.

---

## 📂 Project Structure
- `index.html` — Main production website.
- `nexora-portfolio.html` — Synchronized portfolio page.
- `css/style.css` — Clean, bright design system.
- `js/main.js` — Navigation, WhatsApp triggers, and contact form logic.
- `vercel.json` — Routing & clean URL configuration.
