class ProjectNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="fixed top-0 inset-x-0 z-50 border-b border-ezrah-100 glass-nav">
        <nav class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" class="flex items-center gap-3" aria-label="Project Ezrah Mata home">
            <img src="assets/images/project-ezrah-mata-logo.png" alt="Project Ezrah Mata logo" class="logo-mark rounded-xl" />
            <span class="hidden sm:block font-serif text-2xl font-semibold tracking-tight text-ezrah-800">Project <span class="text-gold italic">Ezrah Mata</span></span>
          </a>

          <div class="hidden items-center gap-7 md:flex">
            <a class="text-xs font-extrabold uppercase tracking-[.14em] text-slate-600 transition hover:text-ezrah-700" href="#about">About</a>
            <a class="text-xs font-extrabold uppercase tracking-[.14em] text-slate-600 transition hover:text-ezrah-700" href="#mission">Mission &amp; Vision</a>
            <a class="text-xs font-extrabold uppercase tracking-[.14em] text-slate-600 transition hover:text-ezrah-700" href="#who">Who We Support</a>
            <a class="text-xs font-extrabold uppercase tracking-[.14em] text-slate-600 transition hover:text-ezrah-700" href="#what">What We Do</a>
            <a class="text-xs font-extrabold uppercase tracking-[.14em] text-slate-600 transition hover:text-ezrah-700" href="#impact">Our Impact</a>
            <a class="rounded-full bg-ezrah-700 px-5 py-2.5 text-xs font-extrabold uppercase tracking-[.12em] text-white shadow-mint transition hover:-translate-y-0.5 hover:bg-ezrah-600" href="#community">Support Us</a>
          </div>

          <button id="nav-toggle" class="grid h-11 w-11 place-items-center rounded-xl border border-ezrah-100 text-ezrah-800 md:hidden" aria-label="Open navigation" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="block h-0.5 w-5 bg-ezrah-700"></span>
            <span class="mt-1.5 block h-0.5 w-5 bg-ezrah-700"></span>
            <span class="mt-1.5 block h-0.5 w-5 bg-ezrah-700"></span>
          </button>
        </nav>

        <div id="mobile-nav" class="hidden border-t border-ezrah-100 bg-cream/95 px-5 py-4 md:hidden">
          <div class="mx-auto flex max-w-7xl flex-col gap-1">
            <a class="mobile-link rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-ezrah-50" href="#about">About</a>
            <a class="mobile-link rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-ezrah-50" href="#mission">Mission &amp; Vision</a>
            <a class="mobile-link rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-ezrah-50" href="#who">Who We Support</a>
            <a class="mobile-link rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-ezrah-50" href="#what">What We Do</a>
            <a class="mobile-link rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-ezrah-50" href="#impact">Our Impact</a>
            <a class="mobile-link mt-1 rounded-lg bg-ezrah-700 px-3 py-3 text-center text-sm font-extrabold text-white" href="#community">Support Us</a>
          </div>
        </div>
      </header>
    `;

    const toggle = this.querySelector('#nav-toggle');
    const menu = this.querySelector('#mobile-nav');
    toggle.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    this.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}
customElements.define('project-navbar', ProjectNavbar);
