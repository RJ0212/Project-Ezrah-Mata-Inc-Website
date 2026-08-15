// Project Ezrah Mata site bootstrap.
// Components are loaded from index.html as classic scripts so the site
// also works when opened directly from a local folder (file://).

// Show the full site instead of the "Under Construction" page once
// window.SITE_LIVE is set to true in index.html.
(function applyLaunchState() {
  const isLive = window.SITE_LIVE === true;
  const fullSite = document.getElementById('site-live-wrapper');
  const comingSoon = document.getElementById('under-construction-wrapper');
  if (!fullSite || !comingSoon) return;
  fullSite.hidden = !isLive;
  comingSoon.hidden = isLive;
})();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (!entry.isIntersecting) return;
    entry.target.style.transitionDelay = `${Math.min(index * 60, 300)}ms`;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

function observeRevealElements() {
  document.querySelectorAll('.reveal').forEach((element) => {
    revealObserver.observe(element);
  });
}

window.addEventListener('component-rendered', observeRevealElements);
window.addEventListener('DOMContentLoaded', observeRevealElements);
