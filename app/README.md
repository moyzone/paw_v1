
## 🏡 Restopia Homestay Website

A modern, responsive **Next.js** website for **Restopia Homestay**, designed with a **black & gold** premium theme.
It features animated sections, smooth transitions, and dynamic pages like **Home**, **About Us**, **Gallery**, and **Contact Us** — all built using **Tailwind CSS** and **Framer Motion**.

---

### 🚀 Tech Stack

* **Next.js 14+** (App Router)
* **React**
* **Tailwind CSS**
* **Framer Motion**
* **Lucide Icons**

---

### 🧩 Folder Structure

```
RestopiaHomestay/
│
├── app/
│   ├── AboutUs/page.tsx
│   ├── ContactUs/page.tsx
│   ├── Gallery/page.tsx
│   ├── Home/page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── public/
│   ├── images/
│   │   ├── home1.jpg
│   │   ├── gallery1.jpg … gallery6.jpg
│   │   ├── user1.jpg, user2.jpg, user3.jpg
│   └── favicon.ico
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│
├── package.json
├── README.md
└── next.config.mjs
```

---

### ⚙️ Getting Started

Follow these steps to run the project on your local machine 👇

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/Ompaliwal/RestopiaHomestay.git
```

#### 2️⃣ Navigate into the folder

```bash
cd RestopiaHomestay
```

#### 3️⃣ Install dependencies

Make sure you have **Node.js (v18 or later)** and **npm** installed.

Then run:

```bash
npm install
```

#### 4️⃣ Run the development server

```bash
npm run dev
```

#### 5️⃣ Open in your browser

Visit:

```
http://localhost:3000
```

✅ You should see the **Restopia Homestay** website running locally!

---

### 🧠 Common Commands

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Starts development server      |
| `npm run build` | Builds for production          |
| `npm start`     | Runs production build          |
| `npm run lint`  | Checks for code linting issues |

---

### 📦 Dependencies Overview

| Package                  | Purpose                     |
| ------------------------ | --------------------------- |
| **next**                 | Framework for React SSR/SSG |
| **react**, **react-dom** | Core React libraries        |
| **tailwindcss**          | Styling framework           |
| **framer-motion**        | Animations and transitions  |
| **lucide-react**         | Modern icon library         |

---

### 🧑‍💻 Developer Notes

* All theme colors and styles are defined in `app/globals.css` using CSS variables.
* Page routes (`/AboutUs`, `/Gallery`, `/ContactUs`) are handled via Next.js App Router.
* Icons and motion effects are used for consistent branding.

---

### 🌐 Deployment

You can deploy easily using:

* [**Vercel**](https://vercel.com/) (recommended)
* or any Node.js hosting platform

Just connect this repo and click **Deploy**.

---


