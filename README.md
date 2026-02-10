# CryptoPulse 🚀 | Astro SSR Dashboard

![Status](https://img.shields.io/badge/Status-Deployed-success?style=flat&color=00e700)
![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat&logo=astro)
![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan?style=flat&logo=tailwindcss)

Finance Dashboard showing the most populars crypto prices using API's with **Astro** in SSR (Server Side Rendering). Using fast init rendering with the complex use of **React** and a Global State of **Nano Stores**

🔗 **Landing page in Vercel:** [https://crypto-pulse-h31m.vercel.app](https://crypto-pulse-h31m.vercel.app)


## 🛠️ Technologies

* **Core:** [Astro](https://astro.build/)
* **UI Framework:** [React](https://react.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **State Management:** [Nano Stores](https://github.com/nanostores/nanostores) (Persistent Atoms)
* **Deployment:** [Vercel](https://vercel.com/)
* **Data:** [CoinGecko API](https://www.coingecko.com/en/api)

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── CryptoCard.tsx
│   └── FavoriteTicker.tsx
├── pages/
│   └── index.astro
├── stores/
│   └── favoritesStore.ts
└── styles/
    └── global.css