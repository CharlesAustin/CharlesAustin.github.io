const date = new Date();
const currentYear = ` ${date.getFullYear()}`;
const copyright = document.querySelector(".copyright-notice");

copyright.insertAdjacentHTML("beforeend", currentYear);
