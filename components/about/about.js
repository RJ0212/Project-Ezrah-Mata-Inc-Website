class ProjectAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="about" class="bg-white py-20 sm:py-28">
        <div class="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div class="reveal">
            <div class="rounded-[2rem] border border-ezrah-100 bg-ezrah-50 p-8 shadow-soft sm:p-10">
              <div class="font-serif text-2xl font-medium italic leading-relaxed text-ezrah-700 sm:text-3xl">
                “A child’s medical needs may be complex. Their right to be loved, supported, and included is simple.”
              </div>
              <div class="mt-6 text-xs font-extrabold uppercase tracking-[.15em] text-slate-400">Project Ezrah Mata</div>
            </div>
          </div>

          <div class="reveal">
            <div class="text-xs font-extrabold uppercase tracking-[.17em] text-ezrah-700">About Us</div>
            <h2 class="mt-3 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">Born from <span class="italic text-ezrah-700">need</span>, built on hope.</h2>
            <p class="mt-5 text-base font-light leading-8 text-slate-600">
              Project Ezrah Mata is a nonprofit organization registered in Texas with a mission centered on tracheostomy- and ventilator-dependent children in the Philippines. We help families access practical resources while making caregiver knowledge and awareness part of the support system.
            </p>

            <a href="#mission" class="group mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[.1em] text-ezrah-700 transition hover:text-ezrah-800">
              Read our Vision &amp; Mission
              <span aria-hidden="true" class="transition group-hover:translate-x-0.5">↓</span>
            </a>
          </div>
        </div>
      </section>
    `;
    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}
customElements.define('project-about', ProjectAbout);
