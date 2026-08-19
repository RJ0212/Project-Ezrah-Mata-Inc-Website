class ProjectHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="home" class="page-viewport relative overflow-hidden gradient-hero">
        <div class="hero-orb hero-orb-a"></div>
        <div class="hero-orb hero-orb-b"></div>
        <div class="hero-orb hero-orb-c"></div>

        <div class="mx-auto grid max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:py-12">
          <div class="relative z-10 max-w-3xl">
            <div class="reveal inline-flex items-center gap-2 rounded-full border border-ezrah-200 bg-ezrah-100/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-ezrah-800">
              <span class="h-2 w-2 rounded-full bg-ezrah-500"></span>
              Supporting trach & ventilator-dependent children
            </div>

            <h1 class="reveal mt-6 font-serif text-5xl font-light leading-[.95] tracking-tight text-ink sm:text-6xl lg:text-8xl">
              Every breath deserves <span class="font-medium italic text-ezrah-700">care, dignity & hope.</span>
            </h1>

            <p class="reveal mt-7 max-w-2xl text-base font-light leading-8 text-slate-600 sm:text-lg">
              Project Ezrah Mata supports children and families in the Philippines through essential medical supplies, caregiver education, awareness, and a compassionate community of support.
            </p>

            <div class="reveal mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#community" class="inline-flex items-center justify-center rounded-full bg-ezrah-700 px-7 py-3.5 text-sm font-extrabold tracking-wide text-white shadow-mint transition hover:-translate-y-0.5 hover:bg-ezrah-600">Support the Mission</a>
              <a href="#about" class="inline-flex items-center justify-center rounded-full border-2 border-ezrah-200 bg-white/40 px-7 py-3.5 text-sm font-extrabold tracking-wide text-ezrah-800 transition hover:bg-ezrah-50">Learn Our Story</a>
            </div>

            <div class="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              <div class="relative pr-10 stat-divider">
                <div class="font-serif text-3xl font-semibold text-ezrah-700">💚</div>
                <div class="mt-1 text-[11px] font-extrabold uppercase tracking-[.13em] text-slate-400">Care with compassion</div>
              </div>
              <div class="relative pr-10 stat-divider">
                <div class="font-serif text-3xl font-semibold text-ezrah-700">4</div>
                <div class="mt-1 text-[11px] font-extrabold uppercase tracking-[.13em] text-slate-400">Core commitments</div>
              </div>
              <div>
                <div class="font-serif text-3xl font-semibold text-ezrah-700">🇺🇸 → 🇵🇭</div>
                <div class="mt-1 text-[11px] font-extrabold uppercase tracking-[.13em] text-slate-400">Connecting support</div>
              </div>
            </div>
          </div>

          <div class="relative z-10 hidden lg:block">
            <div class="reveal soft-grid relative mx-auto max-w-[520px] rounded-[2rem] border border-ezrah-100 bg-white/55 p-8 shadow-soft">
              <div class="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-ezrah-100"></div>
              <div class="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-blush/90"></div>
              <div class="relative rounded-[1.6rem] border border-white/80 bg-white p-7">
                <img src="assets/images/project-ezrah-mata-logo.png" alt="Project Ezrah Mata" class="mx-auto h-52 w-52 object-contain" />
                <div class="mt-6 text-center">
                  <div class="font-serif text-3xl font-medium text-ink">Care. Educate.</div>
                  <div class="font-serif text-3xl font-medium italic text-ezrah-700">Empower. Advocate.</div>
                  <p class="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-500">Supporting medically complex children while strengthening the people who care for them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}
customElements.define('project-hero', ProjectHero);
