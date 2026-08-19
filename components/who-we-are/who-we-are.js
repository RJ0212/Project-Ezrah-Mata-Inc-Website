class ProjectWhoWeAre extends HTMLElement {
  connectedCallback() {
    const cards = [
      ['🫁', 'Trach & Vent Warriors', 'Children living with tracheostomies, mechanical ventilation, or other complex respiratory care needs.'],
      ['👨‍👩‍👧', 'Families & Caregivers', 'Parents, guardians, and caregivers navigating the daily realities of complex home care.'],
      ['📚', 'Caregiver Learners', 'People who want clearer, practical information to better understand and support the children in their care.'],
      ['🤝', 'Compassionate Partners', 'Donors, volunteers, healthcare professionals, organizations, and advocates who believe support should reach families where it matters.']
    ];

    this.innerHTML = `
      <section id="who" class="page-viewport soft-grid bg-ezrah-50 py-20 sm:py-28">
        <div class="mx-auto max-w-7xl px-5 sm:px-8">
          <div class="reveal max-w-2xl">
            <div class="text-xs font-extrabold uppercase tracking-[.17em] text-ezrah-700">Who We Support</div>
            <h2 class="mt-3 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">Support that sees the <span class="italic text-ezrah-700">whole family.</span></h2>
            <p class="mt-5 text-base font-light leading-8 text-slate-600">The child is at the center of what we do, but meaningful support also means strengthening the caregiver and the community around them.</p>
          </div>

          <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            ${cards.map(([icon, title, text]) => `
              <article class="reveal group rounded-3xl border border-ezrah-100 bg-white p-7 shadow-[0_8px_30px_rgba(40,65,59,.05)] transition duration-300 hover:-translate-y-1 hover:shadow-mint">
                <div class="text-4xl">${icon}</div>
                <h3 class="mt-5 font-serif text-2xl font-semibold text-ink">${title}</h3>
                <p class="mt-3 text-sm leading-7 text-slate-500">${text}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    `;
    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}
customElements.define('project-who-we-are', ProjectWhoWeAre);
