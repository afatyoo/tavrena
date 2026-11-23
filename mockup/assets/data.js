// DATA DUMMY untuk mockup (tidak terhubung ke backend)
const AGENTS = [
  { id: 1, name: "Iman Abadi", color: "#8116E0" },
  { id: 2, name: "Rina Putri", color: "#0A0A0D" },
  { id: 3, name: "Bagas Pratama", color: "#C77800" },
  { id: 4, name: "Sinta Dewi", color: "#7a9600" }
];
const TICKETS = [
  { id: 1024, title: "Tidak bisa login ke email kantor", user: "Andi Wijaya", severity: "High", status: "Open", agent: 1, age: "15 menit" },
  { id: 1023, title: "Printer lantai 3 tidak terdeteksi", user: "Maya Sari", severity: "Medium", status: "Pending", agent: 2, age: "2 jam" },
  { id: 1022, title: "Permintaan akses folder Finance", user: "Dodi Kurnia", severity: "Low", status: "Open", agent: 3, age: "3 jam" },
  { id: 1021, title: "Website company down", user: "Lina Marlina", severity: "High", status: "Pending", agent: 1, age: "5 jam" },
  { id: 1020, title: "Laptop lambat setelah update", user: "Andi Wijaya", severity: "Medium", status: "Open", agent: 4, age: "1 hari" },
  { id: 1019, title: "Reset password VPN", user: "Rudi Hartono", severity: "Low", status: "Complete", agent: 2, age: "1 hari" },
  { id: 1018, title: "Email terkirim masuk spam", user: "Maya Sari", severity: "Medium", status: "Complete", agent: 1, age: "2 hari" },
  { id: 1017, title: "Server backup gagal jalan", user: "Lina Marlina", severity: "High", status: "Complete", agent: 3, age: "3 hari" }
];
const MESSAGES = [
  { from: "them", name: "Andi Wijaya", text: "Halo, saya tidak bisa login ke email sejak pagi. Muncul pesan password salah.", time: "09:02" },
  { from: "me", name: "Iman (Agent)", text: "Halo Pak Andi, saya cek dulu ya. Apakah Bapak baru ganti password?", time: "09:10" },
  { from: "them", name: "Andi Wijaya", text: "Tidak ada ganti password, Mas.", time: "09:12" },
  { from: "me", name: "Iman (Agent)", text: "Akun terkunci karena 5x gagal login. Sudah saya buka, silakan coba lagi.", time: "09:20" }
];
const SEV_WEIGHT = { High: 3, Medium: 2, Low: 1 };
function agentOf(id) { return AGENTS.find(a => a.id === id); }
function initials(n) { return n.split(" ").map(w => w[0]).slice(0, 2).join(""); }
function sevBadge(s) { return `<span class="sev sev-${s}">${s}</span>`; }
function stBadge(s) { return `<span class="st st-${s}">${s}</span>`; }
function countBy(list, key, val) { let n = 0; for (const t of list) if (t[key] === val) n++; return n; }
function sortByPriority(list) {
  return [...list].sort((a, b) => SEV_WEIGHT[b.severity] - SEV_WEIGHT[a.severity] || a.id - b.id);
}
function renderChat(el) {
  el.innerHTML = MESSAGES.map(m => `<div class="bubble ${m.from}"><div>${m.text}</div><div class="meta">${m.name} · ${m.time}</div></div>`).join("");
}
