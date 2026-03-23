export function scrollToSection(id?: string) {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 64; // header height is 64px
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
