const cardButtons = document.querySelectorAll("[data-feature]");
const featureViews = document.querySelectorAll(".feature-view");
const dashboardHome = document.querySelector("#dashboard-home");
const backButtons = document.querySelectorAll(".back-button");

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    featureViews.forEach((elem) => {
      elem.hidden = true;
    });

    dashboardHome.hidden = true;

    const sectionId = button.dataset.feature + "-section";
    const section = document.getElementById(sectionId);

    if (section !== null) {
      section.hidden = false;
    }
  });
});

backButtons.forEach((back) => {
  back.addEventListener("click", () => {
    featureViews.forEach((elem) => {
      elem.hidden = true;
    });
    dashboardHome.hidden = false;
  });
});
