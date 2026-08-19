class ProjectBoardOfDirectors extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="board" class="page-viewport relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(83,185,168,0.18),transparent_32%),linear-gradient(180deg,#f7f2e8_0%,#f4efe6_100%)] py-20 sm:py-28">
        <div class="mx-auto max-w-7xl px-5 sm:px-8">
          <div class="max-w-3xl reveal">
            <div class="text-xs font-extrabold uppercase tracking-[.2em] text-ezrah-700">Leadership</div>
            <h2 class="mt-4 font-serif text-5xl font-light leading-none text-ezrah-800 sm:text-6xl">Meet our directors</h2>
            <p class="mt-5 text-base leading-8 text-slate-700 sm:text-lg">The Project Ezrah Mata board brings together compassionate leaders and advocates dedicated to supporting complex-care children and families in the Philippines.</p>
          </div>

          <div class="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            ${[
              { name: 'Gloria & Enrique Mata', img: 'enrique-gloria.jpg', bio: 'President & Vice President — Founders and advocates focused on family-centered care and community partnerships.' },
              { name: 'Marithea Mendez', img: 'marithea.jpg', bio: 'Treasurer — Community organizer with experience in nonprofit program delivery.' },
              { name: 'DNP-FNP Cristina Sarro', img: 'cristina.jpg', bio: 'Secretary — DNP‑FNP (Doctor of Nursing Practice, Family Nurse Practitioner). Clinical nurse leader focused on pediatric and primary respiratory care, and governance.' },
              { name: 'Ira Dunne', img: 'ira.jpg', bio: 'Trustee — Volunteer coordinator and outreach strategist.' },
              { name: 'RN Eugenie Nkemka', img: 'eugenie.jpg', bio: 'Trustee — Registered nurse focused on caregiver education and training.' },
              { name: 'Marcellus Moss', img: 'marcellus.jpg', bio: 'Supports the board team by assisting with coordination, strategic initiatives, and resource development.' }
            ].map((member) => `
              <article class="reveal director-card">
                <div class="card-media">
                  <div class="placeholder" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 21s-7.5-4.35-9.2-6.02C-0.1 11.7 2.1 6 7 6c2.54 0 3.9 1.6 5 3.04C13.1 7.6 14.46 6 17 6c4.9 0 7.1 5.7 4.2 8.98C19.5 16.65 12 21 12 21z" fill="currentColor"/>
                    </svg>
                  </div>
                  <img src="assets/images/board/${member.img}" alt="${member.name}" onload="this.parentNode.querySelector('.placeholder').style.display='none'" onerror="this.style.display='none'; this.parentNode.querySelector('.placeholder').style.display='flex'" />
                </div>
                <div class="card-body">
                  <div class="card-name">${member.name}</div>
                  <div class="card-bio">${member.bio}</div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    this.dispatchEvent(new CustomEvent('component-rendered', { bubbles: true }));
  }
}

customElements.define('project-board-of-directors', ProjectBoardOfDirectors);
