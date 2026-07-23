import { projectCard } from "./component/projectCard.js";
import { projectCardData } from "./data/projectCardData.js";

const projectContainer = document.querySelector("#projects");

projectContainer.innerHTML = projectCardData
  .map((project) => projectCard(project))
  .join("");
