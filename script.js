"use strict";
const data = window.PORTFOLIO;
const levels = { low: "Bajo", medium: "Medio", high: "Alto" };
const grid = document.getElementById("tool-grid");
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
function renderTools(filter = "all") {
  grid.replaceChildren();
  const tools = data.tools.filter(tool => filter === "all" || tool.category === filter);
  for (const tool of tools) {
    const card = element("article", "tool-card");
    const top = element("div", "tool-top");
    const icon = element("span", "tool-icon");
    icon.setAttribute("aria-hidden", "true");
    const logo = element("img", "tool-logo");
    logo.src = tool.icon;
    logo.alt = "";
    logo.width = 40;
    logo.height = 40;
    logo.decoding = "async";
    icon.append(logo);
    const level = Object.hasOwn(levels, tool.level) ? tool.level : "low";
    top.append(icon, element("span", `level ${level}`, levels[level]));
    const name = element("h3", "", tool.name);
    const description = element("p", "", tool.description);
    const meter = element("div", `level-meter ${level}`);
    meter.setAttribute("aria-hidden", "true");
    const count = { low: 1, medium: 2, high: 3 }[level];
    for (let i = 0; i < 3; i++) meter.append(element("span", i < count ? "filled" : ""));
    card.append(top, name, description, meter);
    grid.append(card);
  }
  document.getElementById("tool-count").textContent = `${tools.length} herramientas · ${filter === "all" ? "Todas las áreas" : document.querySelector(`[data-filter="${filter}"]`).textContent}`;
}
document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(other => other.setAttribute("aria-pressed", String(other === button)));
    renderTools(button.dataset.filter);
  });
});
renderTools();
for (const contact of data.contacts) {
  const link = element("a", "network-card");
  link.href = contact.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${contact.name}, ${contact.role}. Visitar web en una nueva pestaña`);
  const mark = element("span", "network-mark", contact.mark);
  mark.setAttribute("aria-hidden", "true");
  const text = element("div", "network-text");
  text.append(element("h3", "", contact.name), element("p", "", contact.role), element("span", "network-domain", contact.domain));
  link.append(mark, text);
  document.getElementById("network-grid").append(link);
}
if (data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
  const action = document.getElementById("contact-primary");
  action.href = `mailto:${data.email}`;
  action.textContent = "Escríbeme por email";
  action.removeAttribute("target");
  const address = document.getElementById("contact-address");
  address.textContent = data.email;
  address.hidden = false;
}
document.getElementById("year").textContent = new Date().getFullYear();
