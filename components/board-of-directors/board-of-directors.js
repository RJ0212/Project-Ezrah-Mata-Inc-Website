class ProjectBoardOfDirectors extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="board" class="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(83,185,168,0.18),transparent_32%),linear-gradient(180deg,#f7f2e8_0%,#f4efe6_100%)] py-20 sm:py-28">
        <div class="mx-auto max-w-7xl px-5 sm:px-8">
          <div class="max-w-3xl reveal">
            <div class="text-xs font-extrabold uppercase tracking-[.2em] text-ezrah-700">Leadership</div>
            <h2 class="mt-4 font-serif text-5xl font-light leading-none text-ezrah-800 sm:text-6xl">Meet our directors</h2>
            <p class="mt-5 text-base leading-8 text-slate-700 sm:text-lg">The Project Ezrah Mata board brings together compassionate leaders and advocates dedicated to supporting complex-care children and families in the Philippines.</p>
          </div>

          <div class="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            ${[
              'Gloria Mata',
              'Enrique Mata',
              'Marithea Mendez',
              'Cristina Sarro',
              'Ira Dunne',
              'Eugenie Nkemka',
              'Clarissa Miasco',
              'Iries Sanceja',
              'Marcellus Moss'
            ].map((name, index) => `
              <div class="reveal rounded-[2rem] border border-ezrah-100 bg-white/70 p-6 shadow-[0_24px_60px_rgba(22,41,41,0.08)] backdrop-blur-sm">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ezrah-100 font-serif text-2xl text-ezrah-800">${index + 1}</div>
                <h3 class="font-serif text-3xl text-ezrah-800">${name}</h3>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}

customElements.define('project-board-of-directors', ProjectBoardOfDirectors);
