class ProjectFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-ink py-12 text-white/55">
        <div class="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <img src="assets/images/project-ezrah-mata-logo.png" alt="Project Ezrah Mata" class="h-10 w-10 rounded-lg bg-white object-contain p-0.5" />
            <div class="font-serif text-2xl font-light text-ezrah-200">Project <span class="italic text-gold">Ezrah Mata</span></div>
          </div>
          <p class="mt-3 text-sm text-white/40">Supporting trach & ventilator-dependent children and their families in the Philippines.</p>

          <div class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[.08em]">
            <a class="transition hover:text-ezrah-200" href="index.html">Home</a>
            <a class="transition hover:text-ezrah-200" href="index.html#about">About</a>
            <a class="transition hover:text-ezrah-200" href="index.html#mission">Mission &amp; Vision</a>
            <a class="transition hover:text-ezrah-200" href="index.html#what">What We Do</a>
            <a class="transition hover:text-ezrah-200" href="index.html#impact">Our Impact</a>
            <a class="transition hover:text-ezrah-200" href="#board">Board of Directors</a>
            <a class="transition hover:text-ezrah-200" href="index.html#community">Support</a>
          </div>

          <div class="mt-7 border-t border-white/10 pt-6 text-xs text-white/30">© <span id="footer-year"></span> Project Ezrah Mata. Built with care.</div>
          <div class="mt-4 rounded-md bg-ezrah-800 px-4 py-3 text-sm text-white">
            Project Ezrah Mata Inc. — EIN: 42-4498343.
          </div>
        </div>
      </footer>
    `;
    this.querySelector('#footer-year').textContent = new Date().getFullYear();
    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}
customElements.define('project-footer', ProjectFooter);
