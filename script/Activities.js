// alert();
function history(id, id2) {
  const container = document.getElementById(id);
  const p = document.createElement("p");
  p.className = "m-2 bg-gray-300 rounded-lg p-2";
  const text = document.getElementById(id2).textContent;

  const time = new Date();
  const hour = String(time.getHours()).padStart(2, "0");
  const minute = String(time.getMinutes()).padStart(2, "0");
  const second = String(time.getSeconds()).padStart(2, "0");

  p.innerText = `You have completed the task "${text}" at "${hour}" : "${minute}" : "${second}"`;
  container.appendChild(p);
}
