const github = document.getElementById("github");
function goGit() {
  location.href = "https://github.com/hhjeee";
}
github.addEventListener("click", goGit);

const doodle = document.getElementById("doodle");
function goDoo() {
  location.href = "https://www.google.com/doodles";
}
doodle.addEventListener("click", goDoo);

const searchForm = document.getElementById("search-form");
const input = searchForm.querySelector("input");
function goInput(event) {
  event.preventDefault();
  const whatToSearch = input.value;
  input.value = "";
  location.href = "https://www.google.com/search?q=" + `${whatToSearch}`;
}
searchForm.addEventListener("submit", goInput);
