const filterButtons = document.querySelectorAll(".filter-button");
const songCards = document.querySelectorAll(".song-card");
const songCount = document.querySelector("#song-count");
const favoriteButtons = document.querySelectorAll(".favorite-button");
const menuToggle = document.querySelector(".menu-toggle");
const menuLabel = menuToggle.querySelector(".menu-label");
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

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
  menuLabel.textContent = isOpen ? "关闭" : "菜单";
  siteNav.classList.toggle("is-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.documentElement.classList.add("motion-ready");
document.querySelector("#year").textContent = new Date().getFullYear();
updateSongCount();

const revealTargets = document.querySelectorAll(".tagline-section, main > .section-pad, main > .shows, main > .closing");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => {
    if (!target.classList.contains("tagline-section")) target.classList.add("reveal-on-scroll");
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
