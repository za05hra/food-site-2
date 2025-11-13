//IN THE NAME IF ALLAH
//YA ALI YA ZAHRA

const menuBtn = document.getElementById("menu-btn");
const circleMenu = document.getElementById("circleMenu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");
const menuItems = document.querySelectorAll(".menu-item");
const themeToggle = document.getElementById("theme-toggle");

let darkMode = false;

menuBtn.addEventListener("click", () => {
  circleMenu.classList.remove("sunset");
  circleMenu.classList.add("active", "sunrise");
  overlay.classList.add("active");

  const radius = 130;
  const total = menuItems.length;
  menuItems.forEach((item, index) => {
    const angle = (360 / total) * index * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    setTimeout(() => {
      item.style.transform = `translate(${x}px, ${y}px) scale(1)`;
      item.classList.add("show");
    }, index * 80);
  });
});

function closeCircularMenu() {
  circleMenu.classList.remove("sunrise");
  circleMenu.classList.add("sunset");
  overlay.classList.remove("active");

  menuItems.forEach((item) => {
    item.classList.remove("show");
    item.style.transform = "translate(0, 0) scale(0)";
  });

  setTimeout(() => {
    circleMenu.classList.remove("active", "sunset");
  }, 1100);
}

closeMenu.addEventListener("click", closeCircularMenu);
overlay.addEventListener("click", closeCircularMenu);

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const action = item.dataset.action;

    switch (action) {
      case "home":
        closeCircularMenu();
        document.querySelector("main").innerHTML = "<h2>صفحه اصلی 🍽️</h2>";
        break;

      case "search":
        window.location.href = "search.html";
        break;

      case "shop":
        // مثال برای هدایت به صفحه دیگر
        window.location.href = "shop.html";
        break;

      case "contact":
        // مثال برای هدایت یا باز کردن مدال تماس
        window.location.href = "contact.html";
        break;

      case "profile":
        window.location.href = "profile.html";
        break;

      default:
        // اگر آیکونی مثل theme-toggle بود، کاری نکن چون جداگانه کنترل می‌شود
        break;
    }
  });
});

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
});
