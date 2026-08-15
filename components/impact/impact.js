class ProjectImpact extends HTMLElement {
  connectedCallback() {
    const projects = [
      ['Equipment', 'Feeding pump, portable nebulizer, portable suction, mechanical ventilator, portable oxygen concentrator, suction machine, bath tub/chair, positioning chair, and stroller.'],
      ['Medical Supplies', 'Consumable medical supplies, speaking valve, stethoscope, tracheostomy tubes, and related family support.'],
      ['Family Moments', 'Mother’s Day treats, birthday gifts for mothers and warriors, cosmetics, and travel-related support.'],
      ['Financial Assistance', 'Confinement allowance and other cash assistance based on individual family needs.']
    ];

    this.innerHTML = `
      <section id="impact" class="bg-cream py-20 sm:py-28">
        <div class="mx-auto max-w-7xl px-5 sm:px-8">
          <div class="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div class="reveal max-w-2xl">
              <div class="text-xs font-extrabold uppercase tracking-[.17em] text-ezrah-700">Our Impact</div>
              <h2 class="mt-3 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">Our journey began with <span class="italic text-ezrah-700">acts of care.</span></h2>
              <p class="mt-5 text-base font-light leading-8 text-slate-600">Before Project Ezrah Mata became a registered nonprofit organization in Texas, support was already reaching families in need. These earlier projects are part of the story that shaped the organization we are building today.</p>
            </div>
            <div class="reveal rounded-2xl border border-ezrah-100 bg-white px-6 py-5 text-right shadow-soft">
              <div class="font-serif text-3xl font-semibold text-ezrah-700">2026</div>
              <div class="mt-1 text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-400">Past project archive</div>
            </div>
          </div>

          <div class="mt-12 grid gap-5 lg:grid-cols-4">
            ${projects.map(([title, text], index) => `
              <article class="reveal rounded-3xl border border-ezrah-100 bg-white p-7 shadow-[0_8px_28px_rgba(40,65,59,.05)]">
                <div class="grid h-12 w-12 place-items-center rounded-2xl bg-ezrah-100 font-serif text-xl font-semibold text-ezrah-700">0${index + 1}</div>
                <h3 class="mt-6 font-serif text-2xl font-semibold text-ink">${title}</h3>
                <p class="mt-3 text-sm leading-7 text-slate-500">${text}</p>
              </article>
            `).join('')}
          </div>

          <div class="reveal mt-8 rounded-3xl border border-dashed border-ezrah-300 bg-ezrah-50/70 p-6 text-sm leading-7 text-slate-600">
            <strong class="text-ezrah-800">A note on our archive:</strong> These projects are presented as part of Project Ezrah Mata’s history and are not described as activities of the Texas nonprofit before its registration. Beneficiary photos and stories should only be published with appropriate parent/guardian consent.
          </div>
        </div>
      </section>
    `;
    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}
customElements.define('project-impact', ProjectImpact);
