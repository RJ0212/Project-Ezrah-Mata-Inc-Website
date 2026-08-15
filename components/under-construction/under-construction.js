class ProjectUnderConstruction extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="under-construction" class="relative flex min-h-screen flex-col overflow-hidden gradient-hero">
        <div class="hero-orb hero-orb-a"></div>
        <div class="hero-orb hero-orb-b"></div>
        <div class="hero-orb hero-orb-c"></div>

        <div class="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8">
          <img
            src="assets/images/project-ezrah-mata-logo.png"
            alt="Project Ezrah Mata logo"
            class="reveal h-24 w-24 object-contain sm:h-28 sm:w-28"
          />

          <div class="reveal mt-8 inline-flex items-center gap-2 rounded-full border border-ezrah-200 bg-ezrah-100/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-ezrah-800">
            <span class="h-2 w-2 rounded-full bg-ezrah-500"></span>
            Launching soon
          </div>

          <h1 class="reveal mt-6 max-w-3xl font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-6xl">
            We're building something <span class="font-medium italic text-ezrah-700">worth it.</span>
          </h1>

          <p class="reveal mt-6 max-w-xl text-base font-light leading-8 text-slate-600 sm:text-lg">
            We're still hard at work putting together the meaningful content this site deserves — our full story, resources, and ways to help tracheostomy- and ventilator-dependent children and their families in the Philippines. We'll announce our launch date soon, so hang tight.
          </p>

          <p class="reveal mt-5 text-sm font-bold uppercase tracking-[.1em] text-ezrah-700">
            You don't have to wait to support us.
          </p>

          <div class="reveal mt-4">
            <a
              href="mailto:projectezrahmatainc@gmail.com"
              class="inline-flex items-center justify-center rounded-full bg-ezrah-700 px-7 py-3.5 text-sm font-extrabold tracking-wide text-white shadow-mint transition hover:-translate-y-0.5 hover:bg-ezrah-600"
            >
              Support Us
            </a>
          </div>

          <p class="reveal mt-6 font-serif text-lg italic text-ezrah-700">Every breath matters. ♥</p>
        </div>

        <div class="relative z-10 pb-8 text-center text-xs font-bold uppercase tracking-[.1em] text-slate-400">
          © <span id="uc-footer-year"></span> Project Ezrah Mata &middot; Care. Educate. Empower. Advocate.
        </div>
      </section>
    `;
    this.querySelector('#uc-footer-year').textContent = new Date().getFullYear();
    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}
customElements.define('project-under-construction', ProjectUnderConstruction);
