// Mark logo Tavrena. {a} = warna utama, {b} = warna aksen, {bg} = warna latar (untuk lubang/knockout)
// lock = gaya lockup tulisan, supaya tiap logo beda karakter
const MARKS = [
  { id: "punch-t", name: "Punch T", lock: "row", note: "Huruf T tebal dengan dua lubang sobekan tiket. Paling literal: tiket + inisial.",
    svg: `<rect x="8" y="12" width="104" height="32" fill="{a}"/><path fill="{a}" d="M42 44h36v66H42z"/>
          <circle cx="42" cy="78" r="11" fill="{bg}"/><circle cx="78" cy="78" r="11" fill="{bg}"/>
          <circle cx="98" cy="96" r="12" fill="{b}"/>` },
  { id: "reply", name: "Reply", lock: "stack", note: "Cincin tebal terbuka yang ditutup titik: pesan dibalas sampai tuntas. Bulat dan ramah.",
    svg: `<path fill="none" stroke="{a}" stroke-width="26" d="M60 17A43 43 0 1 0 103 60"/><circle cx="100" cy="100" r="14" fill="{b}"/>` },
  { id: "tiles", name: "Tiles", lock: "caps", note: "Empat ubin tiket, satu bergeser keluar warna aksen: tiket yang sedang ditangani.",
    svg: `<rect x="8" y="8" width="46" height="46" rx="12" fill="{a}"/><rect x="62" y="8" width="46" height="46" rx="12" fill="{a}"/>
          <rect x="8" y="62" width="46" height="46" rx="12" fill="{a}"/>
          <rect x="66" y="66" width="44" height="44" rx="12" fill="{b}" transform="rotate(12 88 88)"/>` },
  { id: "headset", name: "Headset", lock: "row-light", note: "Headset geometris dari busur tebal dan dua blok earcup. Langsung terbaca sebagai helpdesk.",
    svg: `<path fill="none" stroke="{a}" stroke-width="16" d="M20 70V58a40 40 0 0 1 80 0v12"/>
          <rect x="8" y="62" width="30" height="44" rx="10" fill="{a}"/><rect x="82" y="62" width="30" height="44" rx="10" fill="{a}"/>
          <path fill="none" stroke="{b}" stroke-width="8" stroke-linecap="round" d="M97 104c0 4-8 6-22 6"/><circle cx="68" cy="110" r="7" fill="{b}"/>` },
  { id: "resolved", name: "Resolved", lock: "mono", note: "Centang dari dua balok tegas. Kaki pendek warna aksen: tiket selesai.",
    svg: `<path fill="{b}" d="M6 62l22-22 30 30-22 22z"/><path fill="{a}" d="M36 92L92 20l24 18-58 76z"/>` },
  { id: "slab", name: "Slab", lock: "none", note: "Wordmark di dalam blok beratap bertingkat. Tanpa simbol terpisah, cocok untuk header.",
    svg: `<path fill="{a}" d="M4 40H44V24L76 36H116V98H4Z"/>
          <text x="60" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans',Arial,sans-serif" font-weight="800" font-size="25" letter-spacing="-1.2" fill="{bg}">tavrena<tspan fill="{b}">.</tspan></text>` }
];
function markSVG(m, a, b, bg, size) {
  const body = m.svg.replaceAll("{a}", a).replaceAll("{b}", b).replaceAll("{bg}", bg);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="${size}" height="${size}">${body}</svg>`;
}
