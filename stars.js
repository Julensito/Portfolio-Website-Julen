"use strict";
// Fondo decorativo: no intercepta clics ni añade contenido accesible.
(() => {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0, height = 0, stars = [], frame = 0, previous = 0, elapsed = 0;
  let meteor = null, nextMeteor = 9000;
  function resize() {
    width = document.documentElement.clientWidth;
    height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    stars = Array.from({ length: width < 700 ? 65 : 125 }, () => ({
      x: Math.random() * width, y: Math.random() * height,
      radius: .5 + Math.random() * 1.3,
      phase: Math.random() * Math.PI * 2,
      speed: .003 + Math.random() * .006
    }));
    draw(0);
  }
  function draw(delta) {
    ctx.clearRect(0, 0, width, height);
    const moving = !reducedMotion.matches;
    for (const star of stars) {
      if (moving) star.y = (star.y + star.speed * delta) % height;
      const alpha = .55 + (moving ? Math.sin(elapsed * .0006 + star.phase) * .22 : .1);
      ctx.fillStyle = `rgba(203,222,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
      if (star.radius > 1.65) {
        ctx.strokeStyle = `rgba(169,197,255,${alpha * .4})`;
        ctx.lineWidth = .6;
        ctx.beginPath();
        ctx.moveTo(star.x - 4, star.y); ctx.lineTo(star.x + 4, star.y);
        ctx.moveTo(star.x, star.y - 4); ctx.lineTo(star.x, star.y + 4);
        ctx.stroke();
      }
    }
    if (moving && elapsed > nextMeteor && !meteor) {
      meteor = { x: width * (.3 + Math.random() * .6), y: height * .1, life: 0 };
      nextMeteor = elapsed + 14000;
    }
    if (moving && meteor) {
      meteor.life += delta;
      meteor.x -= delta * .27;
      meteor.y += delta * .13;
      const alpha = Math.max(0, Math.sin(Math.PI * meteor.life / 1300)) * .55;
      const trail = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x + 100, meteor.y - 48);
      trail.addColorStop(0, `rgba(216,232,255,${alpha})`);
      trail.addColorStop(1, "rgba(216,232,255,0)");
      ctx.strokeStyle = trail; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(meteor.x, meteor.y); ctx.lineTo(meteor.x + 100, meteor.y - 48); ctx.stroke();
      if (meteor.life > 1300) meteor = null;
    }
  }
  function tick(now) {
    const delta = previous ? Math.min(now - previous, 50) : 0;
    previous = now; elapsed += delta;
    draw(delta);
    frame = requestAnimationFrame(tick);
  }
  function start() {
    cancelAnimationFrame(frame);
    previous = 0;
    if (reducedMotion.matches || document.hidden) { meteor = null; draw(0); return; }
    frame = requestAnimationFrame(tick);
  }
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", start);
  reducedMotion.addEventListener("change", start);
  resize(); start();
})();
