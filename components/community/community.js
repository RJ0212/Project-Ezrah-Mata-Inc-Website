class ProjectCommunity extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="community" class="relative overflow-hidden bg-ezrah-800 py-20 sm:py-28">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(199,169,105,.16),transparent_35%),radial-gradient(circle_at_10%_85%,rgba(134,215,201,.16),transparent_34%)]"></div>
        <div class="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div class="reveal">
            <div class="text-xs font-extrabold uppercase tracking-[.17em] text-ezrah-100">Be Part of the Mission</div>
            <h2 class="mt-3 font-serif text-4xl font-light leading-tight text-white sm:text-6xl">There is room for <span class="italic text-ezrah-200">you</span> here.</h2>
            <p class="mt-5 max-w-xl text-base font-light leading-8 text-white/75 sm:text-lg">Support can take many forms: donating medical supplies, sharing knowledge, volunteering, amplifying awareness, partnering with us, or helping make future fundraising initiatives possible.</p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a href="mailto:hello@projectezrahmata.org" class="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-ezrah-800 transition hover:-translate-y-0.5 hover:bg-ezrah-50">Contact Project Ezrah Mata</a>
              <a href="#home" class="rounded-full border border-white/30 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/10">Back to Top</a>
            </div>
          </div>

          <div class="reveal rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-md sm:p-8">
            <div class="flex items-center gap-4">
              <img src="assets/images/project-ezrah-mata-logo.png" alt="Project Ezrah Mata logo" class="h-16 w-16 rounded-2xl bg-white object-contain p-1" />
              <div>
                <div class="font-serif text-2xl text-white">Care. Educate.</div>
                <div class="font-serif text-2xl italic text-ezrah-200">Empower. Advocate.</div>
              </div>
            </div>

            <div class="mt-7 space-y-3">
              ${['Give essential medical supplies', 'Share trustworthy caregiver education', 'Raise awareness for complex-care children', 'Help build sustainable support for families'].map((item) => `
                <div class="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span class="mt-0.5 text-ezrah-200">♥</span>
                  <span class="text-sm leading-6 text-white/80">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}
customElements.define('project-community', ProjectCommunity);
