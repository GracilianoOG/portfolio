import { cards } from "./cards";

const projectsEl = document.querySelector("#projects");

projectsEl.innerHTML += cards
  .map((card, index) => {
    const { title, description, tags, links, imgURL } = card;
    return `
    <div class="project">
      <img
        class="project__image${index % 2 === 1 ? " project__image--mirrored" : ""}"
        src="${imgURL}"
        loading="lazy"
        alt="${title}"
        aria-hidden="true"
      />
      <div class="project__information">
        <h3 class="project__title">${title}</h3>
        <p class="project__description">
          ${description}
        </p>
        <h4 id="project#${index}" class="sr-only">${title} Tools and technologies</h4>
        <ul class="project__tags" aria-describedby="project#${index}">
          ${tags
            .map(
              (tag) =>
                `<li class="tag"><span aria-hidden="true">#</span>${tag}</li>`,
            )
            .join("")}
        </ul>
        <a
          href="${links.source}"
          class="project__link project__link--source button button--transparent"
          >Source<span class="sr-only"> to ${title}</span></a
        >
        <a
          href="${links.preview}"
          class="project__link button"
          >Demo<span class="sr-only"> to ${title}</span></a
        >
      </div>
    </div>
  `;
  })
  .join("");
