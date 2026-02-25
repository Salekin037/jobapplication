const total = document.getElementById("jobCount");
function jobCount() {
  const count = allCards.children.length;
  total.innerText = count;
  jobsCountText.innerText = count + " jobs";

  if (count === 0) {
    empty-tab.classList.remove("hidden");
  } else {
    empty-tab.classList.add("hidden");
  }
}
jobCount();