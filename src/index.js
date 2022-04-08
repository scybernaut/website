import "./styles.css";

const colors = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
];

let lastColor = undefined;
const newColor = () => {
  const getColor = () => colors[Math.floor(Math.random() * colors.length)];

  let nextColor = undefined;
  do {
    nextColor = getColor();
  } while (nextColor == lastColor);

  document.getElementById("dot").style.color = nextColor;
  lastColor = nextColor;
};

window.addEventListener("load", () => {
  newColor();

  const name = document.getElementById("dot").parentElement;

  document.body.addEventListener("touchend", newColor);

  window.addEventListener("mousemove", () => {
    name.addEventListener("click", newColor);
  });
});

window.addEventListener("keypress", (ev) => {
  if (ev.code === "Space") newColor();
});
