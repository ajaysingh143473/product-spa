export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const isFavorite = (id) => {
  return getFavorites().includes(id);
};

export const toggleFavorite = (id) => {
  let favorites = getFavorites();

  if (favorites.includes(id)) {
    favorites = favorites.filter(fid => fid !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));

  // 🔥 Notify app immediately
  window.dispatchEvent(new Event("favoritesUpdated"));

  return favorites;
};

export const favoritesCount = () => {
  return getFavorites().length;
};
