import img1 from "../assets/img/projects/project-1.png";
import img2 from "../assets/img/projects/project-2.png";
import img3 from "../assets/img/projects/project-3.png";

const projectsEl = document.querySelector("#projects");

const cards = [
  {
    title: "Product Card",
    description:
      "This is a responsive Product Card made with HTML and plain CSS. I had a lot of fun and learnt a lot while developing it.",
    tags: ["html", "css"],
    links: {
      source: "https://github.com/GracilianoOG/fementor-product-card",
      preview: "https://gracilianoog.github.io/fementor-product-card/",
    },
    imgURL: img1,
  },
  {
    title: "QR Code",
    description:
      "This is a simple QR Code Preview made with HTML and CSS. It is simple, but I really enjoyed making it.",
    tags: ["html", "css"],
    links: {
      source: "https://github.com/GracilianoOG/fementor-qrcode",
      preview: "https://gracilianoog.github.io/fementor-qrcode/",
    },
    imgURL: img2,
  },
  {
    title: "Text Encoder",
    description:
      "I made it during the Oracle Next Education course through the Alura platform. I learnt so much coding it! It was made with HTML, CSS and Javascript.",
    tags: ["html", "css", "javascript"],
    links: {
      source: "https://github.com/GracilianoOG/descodificador-de-texto",
      preview: "https://gracilianoog.github.io/descodificador-de-texto/",
    },
    imgURL: img3,
  },
];

projectsEl.innerHTML += cards
  .map((card, index) => {
    const { title, description, tags, links, imgURL } = card;
    return `
    <div class="project">
      <img
        class="project__image"
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
        <h3 id="project#${index}" class="sr-only">${title} Tools and technologies</h3>
        <ul class="project__tags" aria-describedby="project#${index}">
          ${tags
            .map(
              tag =>
                `<li class="tag"><span aria-hidden="true">#</span>${tag}</li>`
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
