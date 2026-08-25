export function projectDetails(project) {
  return `
  <section>
      <div class="project-detail">
        <div class="project-detail__hero-right">
          <div class="project__version sm-text monospace">
            <p class="text-green">${project.version}</p>
            <span class="text-sec">⋅</span>
            <p class="text-sec">${project.date}</p>
            <p class="project__status text-green">EN PRODUCCIÓN</p>
          </div>
          <h1 class="project-detail__title">
            <!-- Nombre del <span class="text-green">proyecto uno</span>-->
            ${project.title}
          </h1>
          <p class="project-detail__desc">
            ${project.description}
          </p>
          <div class="project-detail__buttons">
            <a class="project-detail__button button--green" href="#">
              <svg class="project__button--icon">
                <use href="/assets/sprite.svg#icon-share"></use>
              </svg>
              ${project.slug == "portfolio" ? "lo estás viendo" : "ver sitio en vivo"}
            </a>
            <a
              class="project-detail__button button--transparent text-main"
              href=${project.github}
            >
              <svg class="project__button--icon">
                <use href="/assets/sprite.svg#icon-github"></use>
              </svg>
              ver repositorio
            </a>
          </div>
        </div>
        <div class="project-detail__info">
          <div class="project-detail__stacks">
            <div class="project-detail__info-item">
              <p class="text-sec monospace sm-text">ROL</p>
              <p class="project-detail__item">Full-stack</p>
            </div>
            <div class="project-detail__info-item">
              <p class="text-sec monospace sm-text">DURACION</p>
              <p class="project-detail__item">[Xsemanas]</p>
            </div>
            <div class="project-detail__info-item">
              <p class="text-sec monospace sm-text">TIPO</p>
              <p class="project-detail__item">Personal</p>
            </div>
            <div class="project-detail__info-item">
              <p class="text-sec monospace sm-text">AÑO</p>
              <p class="project-detail__item">2025</p>
            </div>
          </div>
          <div class="project-detail__icons monospace sm-text">
            <p class="text-sec">STACK</p>
            <div class="project-detail__icon">
              ${project.stack
                .map(
                  (item) =>
                    `<div class="project__stack--item">
                <svg class="project__stack--icon">
                  <use href="/assets/sprite.svg#icon-${item.icon}"></use>
                </svg>
                <p>${item.name}</p>
              </div>`,
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
      <div class="project-detail__main-img">
        <img src="assets/WhatsApp Image 2026-07-03 at 6.24.13 PM.jpeg" alt="" />
      </div>
      <div class="project-detail__context">
        <div>
          <p class="text-green monospace sm-text">01 / contexto</p>
        </div>
        <div class="project-detail__context--right">
          <h2 class="project-detail__context-title">
            Qué situación resolvía este proyecto
          </h2>
          <p class="project-detail__context-desc">
            Describe el contexto real: quién lo necesitaba, qué hacían antes (o
            qué no podían hacer), y por qué era un problema que valía la pena
            resolver. Un párrafo basta — específico, no genérico.
            <br /><br />Luego explica el enfoque: qué decisiones técnicas
            tomaste y por qué, no solo qué tecnologías usaste.
          </p>
          <div class="project-detail__decisions">
            <div class="project-detail__decision text-main">
              <span class="dot"></span>
              <p class="text-sec sm-text monospace">01</p>
              <p class="project-detail__decision-title">
                Decisión o arquitectura clave
              </p>
              <p class="project-detail__decision-desc">
                Por qué la elegiste y qué alternativa descartaste.
              </p>
            </div>
            <div class="project-detail__decision text-main">
              <span class="dot"></span>
              <p class="text-sec sm-text monospace">01</p>
              <p class="project-detail__decision-title">
                Decisión o arquitectura clave
              </p>
              <p class="project-detail__decision-desc">
                Por qué la elegiste y qué alternativa descartaste.
              </p>
            </div>
            <div class="project-detail__decision text-main">
              <span class="dot"></span>
              <p class="text-sec sm-text monospace">01</p>
              <p class="project-detail__decision-title">
                Decisión o arquitectura clave
              </p>
              <p class="project-detail__decision-desc">
                Por qué la elegiste y qué alternativa descartaste.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="project-details__sec-img">
        <div><img src="assets/Selfie.jpeg" alt="" /></div>
        <div><img src="assets/Selfie.jpeg" alt="" /></div>
      </div>
      <div class="project-detail__results">
        <div class="project-detail__result">
          <h2 class="project-detail__result-num">01</h2>
          <p class="monospace text-sec sm-text">
            Métrica o resultado concreto, con número si lo tienes
          </p>
        </div>
        <div class="project-detail__result">
          <h2 class="project-detail__result-num">02</h2>
          <p class="monospace text-sec sm-text">
            Qué aprendiste o qué harías distinto
          </p>
        </div>
      </div>
    </section>
    <footer class="project-detail__footer">
      <p class="monospace sm-text">© 2026 Iván Rivera</p>
      <p class="monospace sm-text">${project.version} — ${project.title}</p>
    </footer> `;
}
