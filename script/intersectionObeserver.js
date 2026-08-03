const sections = document.querySelectorAll("section[id]");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, //memicu saat 50% section terlihat di layar
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // ambil id dari section yang sedang terlihat
      const id = entry.target.getAttribute("id");

      // update URL hash tanpa menambah history (agar tombol back tidak rusak)
      window.history.replaceState(null, null, `#${id}`);
    }
  });
}, observerOptions);

// tunggu sampai halaman selesai dimuat sepenuhnya
window.addEventListener("load", () => {
  setTimeout(() => {
    // jalankan observer untuk tiap section
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, 100);
});
