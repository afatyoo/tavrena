// Sidebar, sapaan, dan navigasi bawah sesuai role (issue #10)
// Data user diambil dari localStorage setelah login. Selama API login (#9) belum ada,
// role bisa dicoba lewat URL, contoh: dashboard.html?role=manager

const MENUS = {
  user:        { label: "User",        items: [["bi-ticket-perforated", "Tiket Saya", "dashboard.html"], ["bi-plus-circle", "Buat Tiket", "tickets.html#baru"], ["bi-person", "Profil", "#"]] },
  agent:       { label: "Agent",       items: [["bi-grid", "Dashboard", "dashboard.html"], ["bi-inbox", "Antrean Saya", "tickets.html"], ["bi-person", "Profil", "#"]] },
  manager:     { label: "Manager",     items: [["bi-grid", "Dashboard", "dashboard.html"], ["bi-ticket-perforated", "Semua Tiket", "tickets.html"], ["bi-people", "Tim Agent", "users.html"]] },
  super_admin: { label: "Super Admin", items: [["bi-grid", "Dashboard", "dashboard.html"], ["bi-ticket-perforated", "Semua Tiket", "tickets.html"], ["bi-person-gear", "Kelola User", "users.html"]] }
};

function getCurrentUser() {
  try {
    const saved = JSON.parse(localStorage.getItem("tv_user"));
    if (saved && MENUS[saved.role]) return saved;
  } catch (e) { /* data rusak, abaikan */ }
  const role = new URLSearchParams(location.search).get("role");
  return { name: "Tamu", role: MENUS[role] ? role : "user" };
}

function greeting() {
  const h = new Date().getHours();
  if (h < 11) return "Selamat pagi";
  if (h < 15) return "Selamat siang";
  if (h < 18) return "Selamat sore";
  return "Selamat malam";
}

function buildLayout() {
  const user = getCurrentUser();
  const menu = MENUS[user.role];
  const page = location.pathname.split("/").pop() || "dashboard.html";

  let links = "";
  for (const [icon, label, href] of menu.items) {
    const active = href === page ? "active" : "";
    links += `<a class="nav-link ${active}" href="${href}"><i class="bi ${icon}"></i>${label}</a>`;
  }

  document.getElementById("sidebar").innerHTML = `
    <a class="brand" href="dashboard.html"><img src="assets/img/logo-mark-animated.svg" alt=""><span class="brand-word">tavrena</span></a>
    <div class="menu-label">MENU ${menu.label.toUpperCase()}</div>
    <nav class="nav flex-column gap-1">${links}</nav>
    <div class="menu-label">AKUN</div>
    <nav class="nav flex-column gap-1"><a class="nav-link" href="#" data-logout><i class="bi bi-box-arrow-left"></i>Keluar</a></nav>`;

  document.getElementById("bottomnav").innerHTML = menu.items
    .map(([icon, label, href]) => `<a href="${href}" class="${href === page ? "active" : ""}"><i class="bi ${icon}"></i>${label}</a>`)
    .join("");

  const firstName = user.name.split(" ")[0];
  document.getElementById("greet").innerHTML =
    `<div class="fw-semibold">${greeting()}, ${firstName} <span class="role-chip ms-1">${menu.label}</span></div>`;

  document.querySelectorAll("[data-logout]").forEach(el => el.addEventListener("click", e => {
    e.preventDefault();
    localStorage.removeItem("tv_user");
    location.href = "index.html";
  }));
}

document.addEventListener("DOMContentLoaded", buildLayout);
