// Sidebar, topbar, dan bottom nav sesuai role (mockup statis)
const MENUS = {
  user:    { label: "User", items: [["bi-ticket-perforated", "Tiket Saya"], ["bi-plus-circle", "Buat Tiket"], ["bi-chat-dots", "Pesan"], ["bi-person", "Profil"]] },
  staff:   { label: "Agent", items: [["bi-grid", "Dashboard"], ["bi-inbox", "Antrean Saya"], ["bi-chat-dots", "Pesan"], ["bi-person", "Profil"]] },
  manager: { label: "Manager", items: [["bi-grid", "Dashboard"], ["bi-ticket-perforated", "Semua Tiket"], ["bi-people", "Tim Agent"], ["bi-bar-chart", "Laporan"]] },
  admin:   { label: "Super Admin", items: [["bi-grid", "Dashboard"], ["bi-ticket-perforated", "Semua Tiket"], ["bi-person-gear", "Kelola User"], ["bi-shield-lock", "Role & Permission"], ["bi-gear", "Pengaturan"]] }
};
const SUB = { user: "Kamu punya 3 tiket yang masih Open", staff: "2 tiket di antrean kamu, 1 berstatus High", manager: "24 tiket Open, 9 Pending hari ini", admin: "20 user baru minggu ini, 2 belum verifikasi" };
const PEOPLE = { user: "Andi Wijaya", staff: "Iman Abadi", manager: "Rina Putri", admin: "Afatyo" };
function buildLayout() {
  const role = document.body.dataset.role, m = MENUS[role];
  const nav = m.items.map((it, i) => `<a class="nav-link ${i === 0 ? "active" : ""}" href="#"><i class="bi ${it[0]}"></i>${it[1]}</a>`).join("");
  document.getElementById("sidebar").innerHTML = `
    <a class="brand" href="index.html"><img src="assets/logo-mark.svg" alt="">tavrena<b>.</b></a>
    <div class="menu-label">MENU ${m.label.toUpperCase()}</div>
    <nav class="nav flex-column gap-1">${nav}</nav>
    <div class="menu-label">LAINNYA</div>
    <nav class="nav flex-column gap-1"><a class="nav-link" href="#"><i class="bi bi-palette"></i>Tampilan</a>
    <a class="nav-link" href="login.html"><i class="bi bi-box-arrow-left"></i>Keluar</a></nav>`;
  document.getElementById("bottomnav").innerHTML = m.items.slice(0, 4).map((it, i) =>
    `<a href="#" class="${i === 0 ? "active" : ""}"><i class="bi ${it[0]}"></i>${it[1]}</a>`).join("");
  const h = new Date().getHours();
  const sapa = h < 11 ? "Selamat Pagi" : h < 15 ? "Selamat Siang" : h < 18 ? "Selamat Sore" : "Selamat Malam";
  document.getElementById("greet").innerHTML = `<div class="fw-semibold">${sapa}, ${PEOPLE[role].split(" ")[0]} <span class="role-chip ms-1">${m.label}</span></div>
    <div class="text-muted small">${SUB[role]}</div>`;
}
document.addEventListener("DOMContentLoaded", buildLayout);
