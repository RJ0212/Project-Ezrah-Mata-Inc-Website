class ProjectWhatWeDo extends HTMLElement {
  connectedCallback() {
    const items = [
      ['01', 'Medical Supplies & Equipment', 'Help families access essential equipment and consumable supplies needed for daily care.'],
      ['02', 'Caregiver Education', 'Share practical, easy-to-understand knowledge that can help caregivers feel more prepared and supported.'],
      ['03', 'Awareness & Advocacy', 'Help communities better understand tracheostomy, ventilation, complex care, and the people behind the medical equipment.'],
      ['04', 'Family & Community Support', 'Support families through encouragement, special occasions, assistance, and compassionate community connection.'],
      ['05', 'Partnerships', 'Connect donors, volunteers, professionals, organizations, and families around shared goals.'],
      ['06', 'Sustainable Giving', 'Build long-term support through responsible fundraising initiatives, including future Project Ezrah Mata merchandise.']
    ];

    this.innerHTML = `
      <section id="what" class="bg-white py-20 sm:py-28">
        <div class="mx-auto max-w-7xl px-5 sm:px-8">
          <div class="reveal max-w-2xl">
            <div class="text-xs font-extrabold uppercase tracking-[.17em] text-ezrah-700">What We Do</div>
            <h2 class="mt-3 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">Practical help. Shared knowledge. <span class="italic text-ezrah-700">Human connection.</span></h2>
            <p class="mt-5 text-base font-light leading-8 text-slate-600">Our work goes beyond a single donation. We want families to have resources, information, and a community they can continue to lean on.</p>
          </div>

          <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            ${items.map(([number, title, text]) => `
              <article class="reveal rounded-3xl border border-ezrah-100 bg-ezrah-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-mint">
                <div class="font-serif text-4xl font-light text-ezrah-300">${number}</div>
                <h3 class="mt-2 font-serif text-2xl font-semibold text-ezrah-800">${title}</h3>
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
customElements.define('project-what-we-do', ProjectWhatWeDo);
