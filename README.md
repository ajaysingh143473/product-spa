# 📘 Product Explorer – Single Page Application (SPA)

Product Explorer is a modern **Single Page Application** (SPA) built using **React**, **Axios**, and **Bootstrap 5**.  
The application fetches product data from a public API and displays it across multiple dynamic pages with smooth routing, dark mode, and favorites functionality.

This project demonstrates API integration, routing, reusable components, state handling, and clean UI/UX.

---

## 🚀 Live Demo  
👉 https://product-spa-ajay.vercel.app

---

## 🛠️ Technology Used

- **React** – Component-based UI library
- **Vite** – Fast development server and build tool
- **Axios** – HTTP client for API requests
- **React Router DOM** – Client-side routing
- **Bootstrap 5** – Responsive UI and dark mode
- **LocalStorage** – Persistent data storage

---

## 🌐 API Used

**FakeStoreAPI**

```

[https://fakestoreapi.com/products](https://fakestoreapi.com/products)

```

### Why FakeStoreAPI?
- Free and public API
- No authentication required
- Provides realistic product data
- Supports fetching individual product details

---

## 📂 Folder Structure

```

src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Loader.jsx
│   ├── Error.jsx
│   └── FavoriteToast.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   └── Favorites.jsx
│
├── services/
│   ├── api.js
│   └── favorites.js
│
├── App.jsx
├── main.jsx

````

---

## 🧭 Application Routes (SPA)

| Route | Description |
|------|------------|
| `/` | Home page |
| `/products` | Products list page |
| `/products/:id` | Product detail page |
| `/favorites` | Favorites page |

---

## ✨ Features Implemented

### ✅ Mandatory Features
- Single Page Application using React
- API integration using Axios
- Loading and error state handling
- Reusable components
- Client-side routing with dynamic URLs
- Responsive design (mobile, tablet, desktop)

### ⭐ Bonus Features
- 🌙 Dark mode toggle using Bootstrap 5
- ❤️ Add to Favorites using localStorage
- 📊 Live favorites count badge in Navbar
- 🔔 Toast notifications (top-right corner)
- 📄 Dedicated Favorites page

---

## 🧩 Reusable Components

- **Navbar** – Navigation, dark mode toggle, favorites badge
- **ProductCard** – Displays product information
- **Loader** – Loading spinner during API calls
- **Error** – Error message display
- **FavoriteToast** – Toast notification for favorites

---

## 🔄 State Management

- Component-level state using `useState`
- Side effects handled using `useEffect`
- Global UI updates handled using a custom browser event
- Persistent data stored using `localStorage`

---

## 🌙 Dark Mode Implementation

- Implemented using Bootstrap 5.3 `data-bs-theme`
- User preference stored in `localStorage`
- Toggle button available in the Navbar
- Theme persists across page reloads

---

## ❤️ Favorites Implementation

- Favorite product IDs stored in `localStorage`
- Add/Remove favorites from product list and detail pages
- Dedicated Favorites page displaying only favorite products
- Navbar badge updates instantly without page reload
- Toast notification displayed on add/remove actions

---

## ⚠️ Challenges & Solutions

### Problem
Navbar favorites count was not updating instantly when products were added or removed.

### Solution
Since `localStorage` is not reactive, a custom browser event (`favoritesUpdated`) was implemented to notify the Navbar and update the badge count in real time.

---

## 📦 How to Run the Project Locally

```bash
npm install
npm run dev
````

---

## 🎯 Project Level

**Medium**

---

## 🧑‍💻 Author

**Ajay Singh Gogulapalli**
B.Tech – Computer Science & Engineering (AI & ML)

---

## 🏁 Conclusion

This project showcases:

* Clean React component architecture
* Real-world API integration
* Modern UI/UX practices
* Industry-relevant front-end skills
