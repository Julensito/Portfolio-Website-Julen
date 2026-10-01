"use strict";
const portfolio = window.PORTFOLIO;
function node(tag, className, text) {
  const item = document.createElement(tag);
  if (className) item.className = className;
  if (text) item.textContent = text;
  return item;
}
for (const slot of document.querySelectorAll(".soundcloud-link")) {
  if (portfolio.soundcloud) {
    const link = node("a", "", "SoundCloud");
    link.href = portfolio.soundcloud;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    slot.append(link);
  } else {
    const label = node("span", "nav-pending", "SoundCloud");
    label.setAttribute("aria-disabled", "true");
    label.title = "Perfil pendiente de enlazar";
    slot.append(label);
  }
}
const projects = portfolio.projects || [];
const slide = document.getElementById("project-slide");
if (slide && projects.length) {
  let selected = 0;
  const pickers = document.getElementById("project-pickers");
  function show(index) {
    selected = (index + projects.length) % projects.length;
    const project = projects[selected];
    const article = node("article", "project-article");
    article.setAttribute("aria-label", `${selected + 1} de ${projects.length}: ${project.name}`);
    article.setAttribute("aria-roledescription", "diapositiva");
    const identity = node("div", `project-identity ${project.theme}`);
    identity.setAttribute("aria-hidden", "true");
    identity.append(node("span", "project-identity-top", project.category), node("strong", "project-wordmark", project.name), node("span", "project-identity-bottom", project.tagline));
    const copy = node("div", "project-copy");
    copy.append(node("p", "eyebrow", project.category), node("h2", "", project.name), node("p", "project-description", project.description));
    const tags = node("div", "tags");
    for (const tag of project.tags) tags.append(node("span", "", tag));
    copy.append(tags);
    if (project.url) {
      const link = node("a", "button primary project-action", "Visitar la web");
      link.href = project.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", `Visitar la web de ${project.name} en una nueva pestaña`);
      copy.append(link);
    }
    article.append(identity, copy);
    slide.replaceChildren(article);
    [...pickers.children].forEach((button, i) => button.setAttribute("aria-pressed", String(i === selected)));
    document.getElementById("project-status").textContent = `${selected + 1} / ${projects.length} · ${project.name}`;
  }
  projects.forEach((project, index) => {
    const button = node("button", "project-picker", project.name);
    button.type = "button";
    button.setAttribute("aria-label", `Mostrar ${project.name}`);
    button.addEventListener("click", () => show(index));
    pickers.append(button);
  });
  document.getElementById("previous-project").addEventListener("click", () => show(selected - 1));
  document.getElementById("next-project").addEventListener("click", () => show(selected + 1));
  document.querySelector(".project-carousel").addEventListener("keydown", event => {
    if (event.target.closest("a")) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); show(selected + (event.key === "ArrowRight" ? 1 : -1)); }
  });
  let startX = 0, startY = 0;
  slide.addEventListener("touchstart", event => { startX = event.changedTouches[0].clientX; startY = event.changedTouches[0].clientY; }, { passive: true });
  slide.addEventListener("touchend", event => {
    const dx = event.changedTouches[0].clientX - startX;
    const dy = event.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) show(selected + (dx < 0 ? 1 : -1));
  }, { passive: true });
  show(0);
}
document.getElementById("year").textContent = new Date().getFullYear();
