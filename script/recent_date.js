const today = new Date();
const dayName = today.toLocaleDateString("en-US", { weekday: "short" });
const date = today.toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});
document.getElementById("day").textContent = dayName + ",";
document.getElementById("date").textContent = date;
