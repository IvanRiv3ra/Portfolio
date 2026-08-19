const url = `details.html?project=`;

export function projectCard(project) {
  return `
    <article class="project">
          <div class="project__text">
            <div class="project__version sm-text monospace">
              <p class="text-green">${project.version}</p>
              <span class="text-sec">⋅</span>
              <p class="text-sec">${project.date}</p>
              <p class="project__status text-green">EN PRODUCCIÓN</p>
            </div>

            <div class="project__desc">
              <h2 class="project__title text-main fraunces">${project.title}</h2>
              <p class="inter text-sec">
                ${project.description}
              </p>
            </div>

            <div class="monospace text-main sm-text">
              <ul class="project__features">
              ${project.features
                .map(
                  (item, index) => `
                <li>
                  <span class="text-green">
                  ${String(index + 1).padStart(2, "0")}⋅
                  </span>
                  ${item}
                </li>
              `,
                )
                .join("")}
              </ul>
            </div>
            <p class="auto text-sec monospace sm-text">Tecnologías utilizadas</p>
            <div class="project__stack monospace text-main sm-text">
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
            
            <div class="project__buttons">
              <a class="project__button">
                <svg class="project__button--icon">
                  <use href="/assets/sprite.svg#icon-share"></use></svg
                >${project.title == "Este portafolio" ? "Lo estás viendo" : "Ver proyecto"}
              </a>
              <a href=${url + project.slug} class="project__button">
                <svg class="project__button--icon">
                  <use href="/assets/sprite.svg#icon-doc"></use></svg
                >Ver detalles
              </a>
              <a href=${project.github} target="_blank" class="project__button">
                <svg class="project__button--icon">
                  <use href="/assets/sprite.svg#icon-github"></use>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div class="project__preview">
            <img src=${project.homeImage}></img>
          </div>
        </article>
    `;
}
