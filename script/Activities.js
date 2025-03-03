function history(id, id2) {
  const container = document.getElementById(id);
  const p = document.createElement("p");
  p.className = "m-2 bg-gray-300 rounded-lg p-2";
  const text = document.getElementById(id2).textContent;
  const time = new Date();
  const n = time.toLocaleDateString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  p.innerText = `You have completed the task ${text} at ${n} `;
  container.appendChild(p);
}
