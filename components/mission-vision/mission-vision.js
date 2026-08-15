class ProjectMissionVision extends HTMLElement {
  connectedCallback() {
    const pillars = [
      ['📦', 'Medical Supplies'],
      ['📖', 'Knowledge & Education'],
      ['📣', 'Awareness'],
      ['🤝', 'Community Support']
    ];

    this.innerHTML = `
      <section id="mission" class="relative bg-gradient-to-b from-white to-ezrah-50 pt-20 sm:pt-28">
        <div class="mx-auto max-w-7xl px-5 sm:px-8">
          <div class="reveal max-w-2xl">
            <div class="text-xs font-extrabold uppercase tracking-[.17em] text-ezrah-700">Our Purpose</div>
            <h2 class="mt-3 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">Vision &amp; <span class="italic text-ezrah-700">Mission.</span></h2>
          </div>

          <div class="mt-12 grid gap-6 pb-20 sm:pb-28 lg:grid-cols-2 lg:gap-8">
            <article class="reveal rounded-[2rem] border border-ezrah-100 bg-white p-8 shadow-soft sm:p-10">
              <div class="grid h-12 w-12 place-items-center rounded-2xl bg-ezrah-100 text-2xl">🌅</div>
              <h3 class="mt-6 font-serif text-2xl font-semibold text-ink">Our Vision</h3>
              <p class="mt-4 text-base font-light leading-8 text-slate-600">A future where no tracheostomy- or ventilator-dependent child is left without the care, resources, and support they need.</p>
            </article>

            <article class="reveal rounded-[2rem] border border-ezrah-100 bg-white p-8 shadow-soft sm:p-10">
              <div class="grid h-12 w-12 place-items-center rounded-2xl bg-ezrah-100 text-2xl">🧭</div>
              <h3 class="mt-6 font-serif text-2xl font-semibold text-ink">Our Mission</h3>
              <p class="mt-4 text-base font-light leading-8 text-slate-600">To provide essential medical supplies, empower caregivers through knowledge and education, raise awareness, and build a community that supports tracheostomy- and ventilator-dependent children and their families in the Philippines.</p>

              <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                ${pillars.map(([icon, label]) => `
                  <div class="rounded-xl bg-ezrah-50 px-3 py-4 text-center">
                    <div class="text-xl">${icon}</div>
                    <div class="mt-2 text-[10px] font-extrabold uppercase leading-tight tracking-[.06em] text-ezrah-800">${label}</div>
                  </div>
                `).join('')}
              </div>
            </article>
          </div>
        </div>

        <!-- Wave divider, echoing the wave in the Project Ezrah Mata brand banner -->
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" class="block h-[54px] w-full text-ezrah-700 sm:h-[70px]" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,90 L0,90 Z"></path>
        </svg>

        <div class="relative -mt-px overflow-hidden bg-ezrah-700 py-14 sm:py-16">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,.08),transparent_35%)]"></div>
          <div class="reveal relative mx-auto max-w-4xl px-5 text-center sm:px-8">
            <div class="text-xs font-extrabold uppercase tracking-[.17em] text-ezrah-100">Our Commitment</div>
            <p class="mt-4 font-serif text-2xl font-light italic leading-relaxed text-white sm:text-3xl">“We care for the child, empower the caregiver, and build hope through community.”</p>
          </div>
        </div>
      </section>
    `;
    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}
customElements.define('project-mission-vision', ProjectMissionVision);
