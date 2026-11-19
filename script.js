const filterButtons = document.querySelectorAll(".filter-button");
const songCards = document.querySelectorAll(".song-card");
const songCount = document.querySelector("#song-count");
const favoriteButtons = document.querySelectorAll(".favorite-button");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const storageKey = "weibird-fan-archive-favorites";

function readFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...favorites]));
  } catch {
    // 收藏仍可在当前页面使用，即使浏览器不允许保存本地数据。
  }
}

function updateSongCount() {
  const visibleCount = [...songCards].filter((card) => !card.hidden).length;
  songCount.textContent = String(visibleCount).padStart(2, "0");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedMood = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    songCards.forEach((card) => {
      card.hidden = selectedMood !== "all" && card.dataset.mood !== selectedMood;
    });

    updateSongCount();
  });
});

const favorites = readFavorites();
favoriteButtons.forEach((button) => {
  const isFavorite = favorites.has(button.dataset.song);
  button.setAttribute("aria-pressed", String(isFavorite));
  button.textContent = isFavorite ? "★" : "☆";

  button.addEventListener("click", () => {
    const song = button.dataset.song;
    if (favorites.has(song)) {
      favorites.delete(song);
    } else {
      favorites.add(song);
    }

    const selected = favorites.has(song);
    button.setAttribute("aria-pressed", String(selected));
    button.textContent = selected ? "★" : "☆";
    saveFavorites(favorites);
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.textContent = isOpen ? "菜单" : "关闭";
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "菜单";
    siteNav.classList.remove("is-open");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
updateSongCount();
