import { projectCard } from "./component/projectCard.js";
import { projectDetails } from "./component/projectDetails.js";
import { projectCardData } from "./data/projectCardData.js";

const params = new URLSearchParams(window.location.search);

const projectContainer = document.querySelector("#projects");
const projectDetailsContainer = document.querySelector("#project-details");

const paramProject = projectCardData.find(
  (element) => element.slug == params.get("project"),
);

if (projectContainer) {
  projectContainer.innerHTML = projectCardData
    .map((project) => projectCard(project))
    .join("");
}

if (projectDetailsContainer) {
  projectDetailsContainer.innerHTML = projectDetails(paramProject);
}
